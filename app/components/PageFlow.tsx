'use client'

import React from 'react'
import PageItem from './PageItem'
import AddPageButton from './AddPageButton'

const pages = ['Page 1', 'Page 2', 'Page 3']

export default function PageFlow() {
  return (
    <div className="flex flex-col gap-2 p-4">
      {pages.map((title, index) => (
        <PageItem key={index} title={title} />
      ))}
      <AddPageButton />
    </div>
  )
}
