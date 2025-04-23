import React, { useState, useEffect } from 'react'
import { login } from '../utils/api'

const Admin: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState<string | null>(null)
  
    useEffect(() => {
      const token = localStorage.getItem('token')
      const username = localStorage.getItem('username')
      if (token && username) {
        setIsAuthenticated(true)
        setCurrentUser(username)
      }
    }, [])
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()
  
      try {
        const { token, username: loggedInUsername } = await login(username, password)
        localStorage.setItem('token', token)
        localStorage.setItem('username', loggedInUsername)
        setCurrentUser(loggedInUsername)
        setIsAuthenticated(true)
        window.location.reload() // Refresh the page to show the admin widget
      } catch {
        alert('Invalid credentials')
      }
    }
  
    const handleLogout = () => {
      localStorage.clear()
      setIsAuthenticated(false)
      setCurrentUser(null)
      setUsername('')
      setPassword('')
      window.location.reload() // Refresh the page to show the admin widget
    }

    if (!isAuthenticated) {
        return (
            <>
                <div style={{ maxWidth: 400, margin: '4rem auto' }}>
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                    <div>
                        <label>Username</label><br/>
                        <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        required
                        />
                    </div>
                    <div>
                        <label>Password</label><br/>
                        <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                        />
                    </div>
                    <button className="button" type="submit" style={{ marginTop: '1rem' }}>Login</button>
                    </form>
                </div>
            </>
        
        )
    }

    return (
        <>
            <div style={{ maxWidth: 400, margin: '4rem auto' }}>
                <h2>Welcome, {currentUser}!</h2>
                <button className="button" onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Admin
