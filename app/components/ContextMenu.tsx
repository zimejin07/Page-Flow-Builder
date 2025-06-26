'use client'

import React, { useState } from 'react'

export default function ContextMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="ml-2 p-1 text-sm text-gray-500 hover:text-gray-700"
      >
        ⋮
      </button>
      {open && (
        <ul className="absolute right-0 top-6 bg-white border shadow rounded text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rename</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
        </ul>
      )}
    </div>
  )
}
