import "./styles.css";
import { useState } from 'react'

function Emoji({ emoji }) {
    return (
        <span
            key={emoji.id}
            img='role'
            className="emoji"
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

    function getEmojis() {
        const randomEmojiIndex = Math.floor(Math.random() * fruitEmojis.length)
        return fruitEmojis[randomEmojiIndex]
    }

    function handleClick(e) {
        const eventX = e.clientX
        const eventY = e.clientY
        console.log('x', e.clientX)
        console.log('y', e.clientY)
        setEmojis(oldEmojis => [...oldEmojis, {
            id: Date.now(),
            x: eventX,
            y: eventY,
            icon: getEmojis()
        }])
    }

    return (
        <div
            style={{ width: "100vw", height: "100vh", position: "relative" }}
            onClick={handleClick}
        >
            <h1>Click to add an fruit emoji 🍎🍊🍇</h1>
            // Display your emojis
            {emojis.map(emoji => <Emoji key={emoji.id} emoji={emoji} />)}
        </div>
    );
}

export default App;