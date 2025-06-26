import { JSX } from "react"

export type Page = {
    id: string
    title: string
    isFirst?: boolean
    icon?: JSX.Element 
}