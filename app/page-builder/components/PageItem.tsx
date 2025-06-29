"use client";

import React from "react";
import { FC, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Page } from "../page.model";
import { iconMap } from "../utils/generateUniquePageType";
import { suggestPageTitle } from "../utils/suggestPageTitle";

type Props = {
  page: Page;
  focus: boolean;
  onClick: () => void;
  onDelete: () => void;
};

const PageItem: FC<Props> = ({ page, focus, onClick, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [editing, setEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(page.title);

  const handleRename = () => {
    setEditing(false);
    if (tempTitle.trim() !== "") {
      page.title = tempTitle.trim();
    } else {
      setTempTitle(page.title);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 px-3 py-1.5 rounded-md border cursor-pointer",
        "transition-all duration-300 ease-in-out transform-gpu animate-fade-in",
        {
          "border-blue-500 bg-blue-50 text-blue-900 font-medium": focus,
          "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100": !focus,
          "opacity-50 scale-95": isDragging,
        }
      )}
    >
      <div className="text-gray-500">{iconMap[page.iconName ?? "doc"]}</div>

      {editing ? (
        <input
          autoFocus
          value={tempTitle}
          onChange={(e) => setTempTitle(e.target.value)}
          onBlur={handleRename}
          onKeyDown={(e) => e.key === "Enter" && handleRename()}
          className="text-sm border border-blue-300 rounded px-1 py-0.5 w-[100px]"
        />
      ) : (
        <span
          className="text-sm truncate max-w-[100px]"
          onDoubleClick={async (e) => {
            e.stopPropagation();
            setEditing(true);
            // If it's a default page, enhance with AI
            if (page.title === "New Page") {
              const suggestion = await suggestPageTitle();
              if (suggestion) setTempTitle(suggestion);
            }
          }}
        >
          {page.title}
        </span>
      )}

      <Menu as="div" className="relative ml-auto">
        <MenuButton>
          <EllipsisVerticalIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </MenuButton>

        <MenuItems
          style={{
            position: "fixed",
            left: "0px",
            top: "-100px",
            minWidth: "max-content",
            zIndex: 9999,
          }}
          className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="px-1 py-1 text-sm text-gray-800 space-y-1">
            <MenuItem>
              {() => (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                >
                  <PencilSquareIcon className="h-4 w-4 text-gray-500" />
                  Rename
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {() => (
                <button className="w-full flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded">
                  <DocumentDuplicateIcon className="h-4 w-4 text-gray-500" />
                  Duplicate
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {() => (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="w-full flex items-center gap-2 px-2 py-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <TrashIcon className="h-4 w-4 text-red-400" />
                  Delete
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default PageItem;
