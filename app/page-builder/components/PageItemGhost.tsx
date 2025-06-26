'use client'

import { FC } from 'react'
import { Page } from '../page.model'
import clsx from 'clsx'

type Props = {
  page: Page
}

const PageItemGhost: FC<Props> = ({ page }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm shadow-md',
        'bg-blue-100 border-blue-400 text-blue-900',
        'transition-all duration-150'
      )}
    >
      <div className="text-blue-500">{page.icon}</div>
      <span className="truncate max-w-[100px]">{page.title}</span>
    </div>
  )
}

export default PageItemGhost
