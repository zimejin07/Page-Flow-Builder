'use client'

import React from 'react'
import ContextMenu from './ContextMenu'

type PageItemProps = {
  title: string
}

export default function PageItem({ title }: PageItemProps) {
  return (
    <div className="relative group flex justify-between items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
      <span>{title}</span>
      <ContextMenu />
    </div>
  )
}
