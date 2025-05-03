import React, { useState, useContext, useEffect, useRef } from 'react'
import { EditContext } from '../../context/EditContext'
import { useContent } from '../../hooks/useContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
import { uploadImage } from '../../utils/api'

type Props = {
  contentKey: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  defaultValue?: string
}

const EditableImage: React.FC<Props> = ({ contentKey, alt, className, style, defaultValue }) => {
  const { editMode } = useContext(EditContext)
  const context = useContent(contentKey)

  const resolvedValue = context.hasValue ? context.value : defaultValue ?? ''
  const [editing, setEditing] = useState(false)
  const [draftUrl, setDraftUrl] = useState(resolvedValue)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLSpanElement>(null)

  const [pendingFile, setPendingFile] = useState<File | null>(null)

  useEffect(() => {
    setDraftUrl(context.hasValue ? context.value : defaultValue ?? '')
  }, [context.value, context.hasValue, defaultValue])

  const handleCancel = () => {
    if (draftUrl.startsWith('blob:')) {
      URL.revokeObjectURL(draftUrl)
    }

    setDraftUrl(resolvedValue)
    setEditing(false)
    setPendingFile(null)
  }

  const handleSave = async () => {
    let finalUrl = draftUrl

    if (pendingFile) {
      try {
        const { url } = await uploadImage(pendingFile)
        finalUrl = url
      } catch (err) {
        alert('Upload failed')
        return
      }
    }

    context.setValue(finalUrl)
    setEditing(false)
    setPendingFile(null)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const localUrl = URL.createObjectURL(file)
    setDraftUrl(localUrl)
    setPendingFile(file)
  }

  return (
    <span
      ref={wrapperRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        paddingRight: '2.2rem',
      }}
    >
      <img src={editing ? draftUrl : resolvedValue} alt={alt} className={className} style={style} />

      {editMode && (
        <>
          {editing && (
            <div style={{ marginTop: '0.5rem' }}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
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
              color: 'inherit',
            }}
          >
            {editing ? (
              <>
                <button onClick={handleCancel} style={buttonStyle}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <button onClick={handleUploadClick} style={buttonStyle}>
                  <FontAwesomeIcon icon={faUpload} />
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
        </>
      )}
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

export default EditableImage
