import React, { useContext, useEffect, useState } from 'react'
import SlideToggle from './SlideToggle'
import { patchContent } from '../utils/api'
import { EditContext } from '../context/EditContext'

const AdminWidget: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null)
  const { editMode, setEditMode, unsavedChanges, setUnsavedChanges } = useContext(EditContext)


  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUsername = localStorage.getItem('username')
    if (token && storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.reload() // or redirect to /admin
  }

  const handleSave = async () => {
    try {
      await patchContent(unsavedChanges)
      setUnsavedChanges({})
      alert('Changes saved.')
    } catch (err) {
      alert('Failed to save changes: ' + String(err));
    }
  }

  if (!username) return null

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <strong>Logged in as:</strong> {username}
      </div>

      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        <span style={{ marginRight: '0.5rem' }}>Preview</span>
        <SlideToggle checked={editMode} onChange={setEditMode} />
        <span style={{ marginLeft: '0.5rem' }}>Edit</span>
      </label>
      {Object.keys(unsavedChanges).length > 0 && 
        <p style={{ margin: '0.5em' }}>{Object.keys(unsavedChanges).length} unsaved change{Object.keys(unsavedChanges).length > 1 ? 's': ''}</p>
      }
      {Object.keys(unsavedChanges).length > 0 && (
        <button style={{ marginRight: '0.5em'}} className="button" onClick={handleSave}>Save</button>
      )}

      <button className="button alt" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminWidget
