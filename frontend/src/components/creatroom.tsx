async function createRoom() {
    const response = await fetch('http://localhost:8000/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    const data = await response.json()
    return data // { id: 1, code: "ABC123" }
}

import { useState } from 'react'

export default function CreateRoomButton() {
    const [roomCode, setRoomCode] = useState('')

    const handleClick = async () => {
        const room = await createRoom()
        setRoomCode(room.code)
    }

    return (
        <div>
            <button onClick={handleClick}>Raum erstellen</button>

            {roomCode && <p>Raum-Code: {roomCode}</p>}
        </div>
    )
}
