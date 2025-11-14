import { useState } from 'react'

type LoginProps = {
    onLogin: (username: string, password: string) => void
}

export default function Login({ onLogin }: LoginProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (!username || !password) {
            alert('Bitte Benutzername und Passwort eingeben!')
            return
        }
        onLogin(username, password)
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
