import { describe, it, expect } from "vitest";
import { Page } from "../../page.model";
import { generateUniquePageType } from "../../utils/utils";

describe("generateUniquePageType", () => {
  it("returns Custom1 when no pages exist", () => {
    expect(generateUniquePageType([])).toBe("Custom1");
  });

  it("returns next available Custom type", () => {
    const pages: Page[] = [
      { id: "1", title: "One", type: "Custom1" },
      { id: "2", title: "Two", type: "Custom2" },
    ];
    expect(generateUniquePageType(pages)).toBe("Custom3");
  });

  it("fills in missing index", () => {
    const pages: Page[] = [
      { id: "1", title: "One", type: "Custom1" },
      { id: "2", title: "Two", type: "Custom3" },
    ];
    expect(generateUniquePageType(pages)).toBe("Custom2");
  });
});
