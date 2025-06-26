"use client";
import {JSX, useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import PageFlow from "./page-builder/components/PageFlow";
import {Page} from "./page-builder/page.model";
import DismissibleTip from "./page-builder/components/DismissibleTip";
import Info from "./page-builder/pages/Info";
import Details from "./page-builder/pages/Details";
import Other from "./page-builder/pages/Other";
import Ending from "./page-builder/pages/Ending";
import {CheckCircleIcon, DocumentIcon, InformationCircleIcon, PhoneIcon} from "@heroicons/react/24/outline";

const pageComponents: Record<string, JSX.Element> = {
    Info: <Info/>, Details: <Details/>, Other: <Other/>, Ending: <Ending/>,
};


export default function PageBuilder() {
    const [pages, setPages] = useState<Page[] | null>(null);
    const [activePageId, setActivePageId] = useState<string | null>(null);

    useEffect(() => {
        const initialPages: Page[] = [{
            id: uuidv4(),
            title: 'Info',
            icon: <InformationCircleIcon className="h-4 w-4"/>
        }, {id: uuidv4(), title: 'Details', icon: <DocumentIcon className="h-4 w-4"/>}, {
            id: uuidv4(),
            title: 'Other',
            icon: <PhoneIcon className="h-4 w-4"/>
        }, {id: uuidv4(), title: 'Ending', icon: <CheckCircleIcon className="h-4 w-4"/>},]
        setPages(initialPages);
        setActivePageId(initialPages[0].id);
    }, []);

    if (!pages || !activePageId) return null; // Avoid rendering until mounted on client

    const activePage = pages.find((p) => p.id === activePageId);
    const ActiveComponent = activePage && pageComponents[activePage.title];

    return (<main className="p-10 bg-neutral-900 min-h-screen text-white">

            <div
                className="bg-white rounded-md p-6 mb-6 text-black shadow transition-opacity duration-300 animate-fade">
                {ActiveComponent ?? <p>No page selected</p>}
            </div>

            <div className="bg-white text-black p-4 rounded-lg shadow-md mb-6">
                <PageFlow
                    pages={pages}
                    setPages={setPages}
                    activePageId={activePageId}
                    setActivePageId={setActivePageId}
                />
            </div>

            <DismissibleTip/>
        </main>);
}
