import React, { useState, useContext, useEffect, useRef } from 'react'
import { EditContext } from '../../context/EditContext'
import { useContent } from '../../hooks/useContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'

type Props = {
  contentKey: string
  value?: string
  onChange?: (key: string, value: string) => void
  defaultValue?: string
}

const EditableRichText: React.FC<Props> = ({ contentKey, value, onChange, defaultValue }) => {
  const { editMode } = useContext(EditContext)
  const context = useContent(contentKey)

  const resolvedValue = value ?? (context.hasValue ? context.value : defaultValue) ?? '';
  const resolvedSetValue = onChange ?? ((_: string, val: string) => context.setValue(val))

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(resolvedValue)

  useEffect(() => {
    setDraft(resolvedValue)
  }, [resolvedValue])

  const handleCancel = () => {
    setDraft(resolvedValue)
    setEditing(false)
  }

  if (!editMode) {
    return <ReactMarkdown>{resolvedValue}</ReactMarkdown>
  }

  return (
    <div style={{ position: 'relative', paddingRight: '2.2rem' }}>
      {editing ? (
        <textarea
          style={{
            width: '100%',
            minHeight: '6rem',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            padding: '0.5rem',
            border: '1px dashed #aaa',
            background: 'transparent',
            resize: 'vertical',
          }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
      ) : (
        <ReactMarkdown>{resolvedValue}</ReactMarkdown>
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
    </div>
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

export default EditableRichText
