'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function DismissibleTip() {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) return null

    return (
        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-4 relative transition-all">
            <button
                onClick={() => setDismissed(true)}
                className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
            >
                <XMarkIcon className="h-4 w-4" />
            </button>
            <p className="text-sm">
                💡 <strong>Tip:</strong> You can drag pages to reorder or use the "+" icon to insert a new one.
            </p>
        </div>
    )
}
