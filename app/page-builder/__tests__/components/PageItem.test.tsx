import React from 'react'
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PageItem from "../../components/PageItem";
import { Page } from "../../page.model";

describe("PageItem", () => {
  const mockPage: Page = {
    id: "1",
    title: "Info",
    type: "Info",
    iconName: "info",
  };

  it("renders the page title", () => {
    render(<PageItem page={mockPage} focus={false} onClick={() => {}} />);
    expect(screen.getByText("Info")).toBeInTheDocument();
  });

  it("triggers onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<PageItem page={mockPage} focus={false} onClick={handleClick} />);
    fireEvent.click(screen.getByText("Info"));
    expect(handleClick).toHaveBeenCalled();
  });
});
