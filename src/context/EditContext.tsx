// src/context/EditContext.tsx
import React, { createContext, useState, useEffect } from 'react'

type EditContextType = {
  editMode: boolean
  setEditMode: (editMode: boolean) => void
  unsavedChanges: Record<string, string>
  setUnsavedChanges: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

export const EditContext = createContext<EditContextType>({
  editMode: false,
  setEditMode: () => {},
  unsavedChanges: {},
  setUnsavedChanges: () => {}
})

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [editMode, setEditMode] = useState(false)
  const [unsavedChanges, setUnsavedChanges] = useState<Record<string, string>>({})

  useEffect(() => {
    const stored = localStorage.getItem('editMode')
    if (stored) setEditMode(stored === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('editMode', editMode.toString())
  }, [editMode])

  return (
    <EditContext.Provider value={{ editMode, setEditMode, unsavedChanges, setUnsavedChanges }}>
      {children}
    </EditContext.Provider>
  )
}
