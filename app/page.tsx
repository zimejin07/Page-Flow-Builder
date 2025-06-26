"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PageFlow from "./page-builder/components/PageFlow";
import { Page } from "./page-builder/page.model";

const defaultPages: Page[] = [
  { id: uuidv4(), title: "Info" },
  { id: uuidv4(), title: "Details" },
  { id: uuidv4(), title: "Other" },
  { id: uuidv4(), title: "Ending" },
];

export default function PageBuilder() {
  const [pages, setPages] = useState(defaultPages);
  const [activePageId, setActivePageId] = useState(pages[0].id);

  return (
    <main className="p-10 bg-gray-900 min-h-screen text-white">
      <PageFlow
        pages={pages}
        setPages={setPages}
        activePageId={activePageId}
        setActivePageId={setActivePageId}
      />
    </main>
  );
}
