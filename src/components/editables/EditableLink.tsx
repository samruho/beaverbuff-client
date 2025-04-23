// src/components/EditableLink.tsx
import React, { useState, useContext, useEffect, useRef } from 'react'
import { EditContext } from '../../context/EditContext'
import { useContent } from '../../hooks/useContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

type Props = {
  textKey: string
  hrefKey: string
  className?: string
  style?: React.CSSProperties
}

const EditableLink: React.FC<Props> = ({ textKey, hrefKey, className, style }) => {
  const { editMode } = useContext(EditContext)

  const text = useContent(textKey)
  const href = useContent(hrefKey)

  const [editing, setEditing] = useState(false)
  const [draftText, setDraftText] = useState(text.value)
  const [draftHref, setDraftHref] = useState(href.value)

  const wrapperRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setDraftText(text.value)
  }, [text.value])

  useEffect(() => {
    setDraftHref(href.value)
  }, [href.value])

  const handleCancel = () => {
    setDraftText(text.value)
    setDraftHref(href.value)
    setEditing(false)
  }

  const handleSave = () => {
    text.setValue(draftText)
    href.setValue(draftHref)
    setEditing(false)
  }

  if (!editMode) {
    return (
      <a href={href.value} className={className} style={style}>
        {text.value}
      </a>
    )
  }

  return (
    <span
      ref={wrapperRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        paddingRight: '2.2rem', // reserve space for toolbar
      }}
    >
      {editing ? (
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.3rem' }}>
          <input
            style={{
              all: 'inherit',
              padding: '0.3em',
              background: 'transparent',
              border: '1px dashed #aaa',
              outline: 'none',
            }}
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            placeholder="Link text"
          />
          <input
            style={{
              all: 'inherit',
              padding: '0.3em',
              background: 'transparent',
              border: '1px dashed #aaa',
              outline: 'none',
            }}
            value={draftHref}
            onChange={(e) => setDraftHref(e.target.value)}
            placeholder="Link URL"
          />
        </span>
      ) : (
        <a href={href.value} className={className} style={style} onClick={e => e.preventDefault()}>
            {text.value}
        </a>
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
          color: 'inherit'
        }}
      >
        {editing ? (
          <>
            <button onClick={handleCancel} style={buttonStyle}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button onClick={handleSave} style={buttonStyle}>
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

export default EditableLink
