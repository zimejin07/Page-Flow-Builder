'use client'

import { FC, InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon: ReactNode
    required?: boolean
}

const InputField: FC<Props> = ({ label, icon, required, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    {icon}
                </div>
                <input
                    {...rest}
                    required={required}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
            </div>
        </div>
    )
}

export default InputField
