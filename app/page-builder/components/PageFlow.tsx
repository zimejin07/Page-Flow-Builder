"use client";

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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Page } from "../page.model";
import { FC, useState } from "react";
import PageItem from "./PageItem";
import { AddPageButton } from "./AddPageButton";
import { v4 } from "uuid";
import PageItemGhost from "./PageItemGhost";

type Props = {
  pages: Page[];
  setPages: (pages: Page[]) => void;
  activePageId: string;
  setActivePageId: (id: string) => void;
};

const PageFlow: FC<Props> = ({
  pages,
  setPages,
  activePageId,
  setActivePageId,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150, // Wait 150ms before activating
        tolerance: 4, // Allow small movement without triggering
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
                <AddPageButton
                  onClick={() => {
                    const newPage = { id: v4(), title: "New Page" };
                    const newPages = [...pages];
                    newPages.splice(i + 1, 0, newPage);
                    setPages(newPages);
                  }}
                />
              )}
            </div>
          ))}
          <button
            className="ml-2 bg-gray-100 text-black px-3 py-1 rounded hover:bg-gray-200 transition"
            onClick={() => {
              const newPage = { id: v4(), title: "New Page" };
              setPages([...pages, newPage]);
            }}
          >
            + Add page
          </button>
        </div>
      </SortableContext>

      {/* Drag Preview */}
      <DragOverlay>
        {draggedPageId ? (
          <PageItemGhost page={pages.find((p) => p.id === draggedPageId)!} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default PageFlow;
