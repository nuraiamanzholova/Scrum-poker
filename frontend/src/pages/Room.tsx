import { useState } from 'react'

type CardProps = {
    value: number
    onClick: () => void
    disabled?: boolean
}

function Card({ value, onClick, disabled = false }: CardProps) {
    return (
        <button className="card" onClick={onClick} disabled={disabled}>
            {value}
        </button>
    )
}

function getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ')
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=')
        if (key === name) return value
    }
    return null
}

function deleteCookie(name: string) {
    document.cookie = `${name}=; path=/; max-age=0`
}

export default function Room() {
    const [room, setRoom] = useState<string>('')
    const [voted, setVoted] = useState<boolean>(!!getCookie('voted'))

    function joinRoom() {
        if (room.trim() === '') {
            alert('Bitte gib einen Raumnamen ein!')
        } else {
            alert('Raum beitreten: ' + room)
        }
    }

    function vote(value: number) {
        if (!getCookie('voted')) {
            document.cookie = 'voted=true; path=/; max-age=86400'
            setVoted(true)
            alert(`Danke für deine Stimme: ${value}`)
        } else {
            alert('Du hast bereits abgestimmt.')
        }
    }

    function handleDeleteCookie() {
        deleteCookie('voted')
        setVoted(false)
        alert('Cookie gelöscht! Du kannst jetzt wieder abstimmen.')
    }

    return (
        <div className="room">
            <div className="room-login">
                <input
                    type="text"
                    placeholder="Raumname"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button onClick={joinRoom}>Raum beitreten</button>
            </div>

            <section className="cards-container">
                <h2>Abstimmung</h2>
                <div className="cards">
                    {[0, 0.5, 1, 2, 3, 5, 8, 13].map((num) => (
                        <Card
                            key={num}
                            value={num}
                            onClick={() => vote(num)}
                            disabled={voted}
                        />
                    ))}
                </div>
                <button className="end-btn">Abstimmung beenden</button>
            </section>

            <button onClick={handleDeleteCookie}>Cookie löschen</button>
        </div>
    )
}
