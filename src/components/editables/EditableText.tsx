import React, { useState, useContext, useRef, useEffect } from 'react'
import { EditContext } from '../../context/EditContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContent } from '../../hooks/useContent'

type Props = {
  contentKey: string
  value?: string
  onChange?: (key: string, value: string) => void
}

const EditableText: React.FC<Props> = ({ contentKey, value, onChange }) => {
  const { editMode } = useContext(EditContext)
  const context = useContent(contentKey)

  const resolvedValue = value ?? context.value
  const resolvedSetValue = onChange ?? ((_: string, val: string) => context.setValue(val))

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(resolvedValue)

  useEffect(() => {
    setDraft(resolvedValue)
  }, [resolvedValue])

  const wrapperRef = useRef<HTMLSpanElement>(null)

  const handleCancel = () => {
    setDraft(resolvedValue)
    setEditing(false)
  }

  if (!editMode) return <>{resolvedValue}</>

  return (
    <span
      ref={wrapperRef}
      onClick={(e) => {
        if (editMode) e.preventDefault()
      }}
      style={{
        position: 'relative',
        display: 'inline-block',
        paddingRight: '2.2rem', // reserve space for toolbar
      }}
    >
      {editing ? (
        <>
          <input
            style={{
              all: 'inherit',
              fontSize: 'inherit',
              padding: '0.3em',
              background: 'transparent',
              border: '1px dashed #aaa',
              outline: 'none',  
            }}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
        </>
      ) : (
        <>{resolvedValue}</>
      )}

      <span
        style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '0',
          display: 'flex',
          gap: '0.3rem',
          background: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '0.5rem',
          padding: '0.2rem 0.4rem',
          zIndex: 1,
        }}
      >
        {editing ? (
          <>
            <button onClick={handleCancel} style={buttonStyle}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button
              onClick={() => {
                resolvedSetValue(contentKey, draft)
                setEditing(false)
              }}
              style={buttonStyle}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </>
        ) : (
          <button onClick={() => setEditing(true)} style={buttonStyle}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
      </span>
    </span>
  )
}

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '2px',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  outline: 'none',
}

export default EditableText
