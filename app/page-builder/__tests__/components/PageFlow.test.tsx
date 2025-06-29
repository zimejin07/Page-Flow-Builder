import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PageFlow from "../../components/PageFlow";
import { Page } from "../../page.model";

describe("PageFlow", () => {
  const mockPages: Page[] = [
    { id: "1", title: "Info", type: "Info" },
    { id: "2", title: "Details", type: "Details" },
  ];

  const setup = (customPages = mockPages) => {
    const setPages = vi.fn();
    const setActivePageId = vi.fn();

    render(
      <PageFlow
        pages={customPages}
        setPages={setPages}
        activePageId="1"
        setActivePageId={setActivePageId}
      />
    );

    return { setPages, setActivePageId };
  };

  it("renders each page item", () => {
    setup();

    expect(screen.getByText("Info")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("calls setActivePageId when a page is clicked", () => {
    const { setActivePageId } = setup();

    fireEvent.click(screen.getByText("Details"));
    expect(setActivePageId).toHaveBeenCalledWith("2");
  });

  it('adds a new page when "+ Add page" button is clicked', () => {
    const { setPages } = setup();

    fireEvent.click(screen.getByText("+ Add page"));

    expect(setPages).toHaveBeenCalled();
    const updated = setPages.mock.calls[0][0];
    expect(updated).toHaveLength(3);
    expect(updated[2].title).toBe("New Page");
  });

  it("does not add more than 6 pages", () => {
    const fullPages: Page[] = Array.from({ length: 6 }, (_, i) => ({
      id: String(i + 1),
      title: `Page ${i + 1}`,
      type: `Custom${i + 1}`,
    }));

    // mock global alert
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    const { setPages } = setup(fullPages);

    fireEvent.click(screen.getByText("+ Add page"));
    expect(setPages).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith("Maximum of 6 pages reached.");

    alertSpy.mockRestore();
  });

  it("deletes a page and updates state correctly", () => {
    const pages: Page[] = [
      { id: "1", title: "One", type: "Custom1" },
      { id: "2", title: "Two", type: "Custom2" },
    ];

    const setPages = vi.fn();
    const setActivePageId = vi.fn();

    render(
      <PageFlow
        pages={pages}
        setPages={setPages}
        activePageId="1"
        setActivePageId={setActivePageId}
      />
    );

    fireEvent.click(screen.getByText("Two"));
    const deleteBtn = screen.getByText("Delete");
    fireEvent.click(deleteBtn);

    const newPages = setPages.mock.calls[0][0];
    expect(newPages).toHaveLength(1);
    expect(newPages[0].title).toBe("One");
  });
});
