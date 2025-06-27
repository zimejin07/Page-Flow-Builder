"use client";

import { JSX, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageFlow from "./page-builder/components/PageFlow";
import { Page, PageType } from "./page-builder/page.model";
import DismissibleTip from "./page-builder/components/DismissibleTip";
import Info from "./page-builder/pages/Info";
import Details from "./page-builder/pages/Details";
import Other from "./page-builder/pages/Other";
import Ending from "./page-builder/pages/Ending";

// component map with proper PageType keys
const pageComponents: Partial<Record<PageType, () => JSX.Element>> = {
  Info: Info,
  Details: Details,
  Other: Other,
  Ending: Ending,
};

export default function PageBuilder() {
  const [pages, setPages] = useState<Page[] | null>(null);
  const [activePageId, setActivePageId] = useState<string | null>(null);

  useEffect(() => {
    const initialPages: Page[] = [
      {
        id: uuidv4(),
        title: "Info",
        type: "Info",
        iconName: "info",
      },
      {
        id: uuidv4(),
        title: "Details",
        type: "Details",
        iconName: "phone",
      },
      {
        id: uuidv4(),
        title: "Other",
        type: "Other",
        iconName: "doc",
      },
      {
        id: uuidv4(),
        title: "Ending",
        type: "Ending",
        iconName: "end",
      },
    ];

    const saved = localStorage.getItem("form-pages");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setPages(parsed);
          setActivePageId(parsed[0]?.id ?? null);
        }
      } catch {
        localStorage.removeItem("form-pages");
      }
    } else {
      setPages(initialPages);
      setActivePageId(initialPages[0].id);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (pages?.length) {
      localStorage.setItem("form-pages", JSON.stringify(pages));
    }
  }, [pages]);

  if (!pages || !activePageId) return null;

  const activePage = pages.find((p) => p.id === activePageId);

  console.log(activePage);

  const ActiveComponent = activePage?.type && pageComponents[activePage.type];

  const FallbackComponent = () => (
    <div className="text-gray-500">No content for this page type yet.</div>
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-10 flex flex-col gap-6">
      {/* Page Content */}
      <div className="justify-items-center bg-white rounded-md p-6 mb-6 text-black shadow transition-opacity duration-300 animate-fade">
        {ActiveComponent ? <ActiveComponent /> : <FallbackComponent />}
      </div>

      {/* Navigation Flow */}
      <div className="bg-white text-black p-4 rounded-lg shadow-md mb-6">
        <PageFlow
          pages={pages}
          setPages={setPages}
          activePageId={activePageId}
          setActivePageId={setActivePageId}
        />
      </div>

      {/* Tip */}
      <div className="mt-auto flex justify-center">
        <DismissibleTip />
      </div>
    </main>
  );
}
