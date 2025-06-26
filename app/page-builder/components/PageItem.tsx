'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Page } from '../page.model'
import { Menu, MenuItem } from '@headlessui/react'
import { FC } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

type Props = {
  page: Page
  active: boolean
  onClick: () => void
}

const PageItem: FC<Props> = ({ page, active, onClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: page.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${
        active ? 'border-blue-500 bg-blue-100 text-blue-800' : 'border-gray-300 bg-white text-black'
      } hover:shadow-sm transition cursor-pointer`}
      onClick={onClick}
    >
      <span>{page.title}</span>

      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="ml-1">
          <EllipsisVerticalIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </Menu.Button>
        <Menu.Items className="absolute z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <MenuItem>{({ focus }) => <button className="menu-btn">Set as first page</button>}</MenuItem>
            <MenuItem>{({ focus }) => <button className="menu-btn">Rename</button>}</MenuItem>
            <MenuItem>{({ focus }) => <button className="menu-btn">Copy</button>}</MenuItem>
            <MenuItem>{({ focus }) => <button className="menu-btn">Duplicate</button>}</MenuItem>
            <MenuItem>{({ focus }) => <button className="menu-btn text-red-600">Delete</button>}</MenuItem>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default PageItem
