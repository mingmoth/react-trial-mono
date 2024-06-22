import { useState } from 'react'
import './App.css'

const TABS = [
    { id: "1", title: "Tab 1", content: "Content 1" },
    { id: "2", title: "Tab 2", content: "Content 2" },
    { id: "3", title: "Tab 3", content: "Content 3" }
];

function Tab({ tabs }) {
    const [activeTabId, setActiveTabId] = useState(TABS[0].id);

    const activeTabContent = TABS.find((tab) => tab.id === activeTabId)?.content ?? activeTabId
    return (
        <div className="tab-container">
            <div className="tab-buttons">
                {/* TODO: Render buttons here based on passed tabs and manage active state */}
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={tab.id === activeTabId ? "active" : ""}
                        onClick={() => setActiveTabId(tab.id)}
                    >{tab.title}</button>
                ))}
            </div>
            <div className="tab-content">
                {/* TODO: Render content of active tab */}
                {activeTabContent}
            </div>
        </div>
    );
}

export default function App() {

    return (
        <div className="app">
            <h1>Simple Tab Component</h1>
            <Tab tabs={TABS} />
        </div>
    )
}
