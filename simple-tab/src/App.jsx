import './App.css'

const TABS = [
    { id: "1", title: "Tab 1", content: "Content 1" },
    { id: "2", title: "Tab 2", content: "Content 2" },
    { id: "3", title: "Tab 3", content: "Content 3" }
];

function Tab({ tabs }) {
    return (
        <div className="tab-container">
            <div className="tab-buttons">
                {/* TODO: Render buttons here based on passed tabs and manage active state */}
            </div>
            <div className="tab-content">
                {/* TODO: Render content of active tab */}
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
