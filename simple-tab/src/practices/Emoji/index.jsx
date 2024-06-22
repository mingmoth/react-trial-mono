import { useEffect, useState } from "react";
import "./styles.css";

function sleep(delay = 1000) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

function Emoji({ emoji, isBeating }) {
    const [start, setStart] = useState(false)

    async function waitBeating() {
        await sleep(2000)
        setStart(true)
    }

    useEffect(() => {
        waitBeating()
    }, [])

    return (
        <span
            key={emoji.id}
            img='role'
            className={`emoji ${(isBeating && start) ? 'heartbeat' : ''}`}
            style={{
                position: 'absolute',
                top: `${emoji.y - 36}px`,
                left: `${emoji.x - 18}px`,

            }}
        >{emoji.icon}</span>
    )
}

function App() {
    const fruitEmojis = ["🍎", "🍊", "🍇", "🍓", "🍒"];
    const [emojis, setEmojis] = useState([])
    const [isBeating, setIsBeating] = useState(true)

    function getEmojis() {
        const randomEmojiIndex = Math.floor(Math.random() * fruitEmojis.length)
        return fruitEmojis[randomEmojiIndex]
    }

    function handleClick(e) {
        const eventX = e.clientX
        const eventY = e.clientY
        setEmojis(oldEmojis => [...oldEmojis, {
            id: Date.now(),
            x: eventX,
            y: eventY,
            icon: getEmojis()
        }])
    }

    function handleButtonClick(e) {
        e.stopPropagation()
        setIsBeating(oldBeating => !oldBeating)
    }

    return (
        <div
            style={{ width: "100vw", height: "100vh", position: "relative" }}
            onClick={handleClick}
        >
            <h1>Click to add an fruit emoji 🍎🍊🍇</h1>
            <button onClick={handleButtonClick}>Click me to toggle animation</button>
            {emojis.map(emoji => <Emoji key={emoji.id} emoji={emoji} isBeating={isBeating} />)}
        </div>
    );
}

export default App;