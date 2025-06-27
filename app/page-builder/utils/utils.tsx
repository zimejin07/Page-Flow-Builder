import React from 'react'
import { JSX } from "react";
import { Page } from "../page.model";
import {
  DocumentIcon,
  InformationCircleIcon,
  PhoneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export // ✅ Utility to generate unique page type (Custom1, Custom2...)
const generateUniquePageType = (pages: Page[]): string => {
  const existingTypes = new Set(pages.map((p) => p.type));
  let i = 1;
  while (existingTypes.has(`Custom${i}`)) {
    i++;
  }
  return `Custom${i}`;
};

export const iconMap: Record<string, JSX.Element> = {
  info: <InformationCircleIcon className="h-4 w-4" />,
  doc: <DocumentIcon className="h-4 w-4" />,
  phone: <PhoneIcon className="h-4 w-4" />,
  end: <CheckCircleIcon className="h-4 w-4" />,
};
