"use client";
import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Page } from "../page.model";
import { FC, useState } from "react";
import PageItem from "./PageItem";
import { AddPageButton } from "./AddPageButton";
import { v4 as uuidv4 } from "uuid";
import PageItemGhost from "./PageItemGhost";
import { generateUniquePageType } from "../utils/utils";

type Props = {
  pages: Page[];
  setPages: (pages: Page[]) => void;
  activePageId: string;
  setActivePageId: (id: string) => void;
};

const MAX_PAGES = 6;

const PageFlow: FC<Props> = ({
  pages,
  setPages,
  activePageId,
  setActivePageId,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 4,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const [draggedPageId, setDraggedPageId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setDraggedPageId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setDraggedPageId(null);

    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((p) => p.id === active.id);
      const newIndex = pages.findIndex((p) => p.id === over?.id);
      setPages(arrayMove(pages, oldIndex, newIndex));
    }
  };

  const addNewPageAt = (index: number | "end") => {
    if (pages.length >= MAX_PAGES) {
      alert("Maximum of 6 pages reached.");
      return;
    }

    const newType = generateUniquePageType(pages);

    const newPage: Page = {
      id: uuidv4(),
      title: "New Page",
      type: newType,
    };

    const newPages = [...pages];
    if (index === "end") {
      newPages.push(newPage);
    } else {
      newPages.splice(index + 1, 0, newPage);
    }

    setPages(newPages);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={pages.map((p) => p.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex items-center gap-2 bg-white rounded-lg p-3">
          {pages.map((page, i) => (
            <div key={page.id} className="flex items-center gap-2">
              <PageItem
                page={page}
                focus={page.id === activePageId}
                onClick={() => setActivePageId(page.id)}
              />
              {i < pages.length - 1 && (
                <AddPageButton onClick={() => addNewPageAt(i)} />
              )}
            </div>
          ))}

          <button
            className="ml-2 bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-200 transition text-sm"
            onClick={() => addNewPageAt("end")}
          >
            + Add page
          </button>
        </div>
      </SortableContext>

      <DragOverlay>
        {draggedPageId ? (
          <PageItemGhost page={pages.find((p) => p.id === draggedPageId)!} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default PageFlow;
