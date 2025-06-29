"use client";

import React from 'react'
import { FC } from "react";

type Props = {
  onClick: () => void;
};

export const AddPageButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="text-gray-500 hover:text-blue-500 transition text-lg"
      onClick={onClick}
      title="Add page"
    >
      +
    </button>
  );
};
