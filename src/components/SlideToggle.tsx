import React from 'react'

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
}

const SlideToggle: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <label style={{ display: 'inline-block', position: 'relative', width: '50px', height: '24px' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          opacity: 0,
          width: 0,
          height: 0
        }}
      />
      <span style={{
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: checked ? '#ed8989' : '#64c151',
        transition: '.4s',
        borderRadius: '24px'
      }}>
        <span style={{
          position: 'absolute',
          height: '18px',
          width: '18px',
          left: checked ? '26px' : '4px',
          bottom: '3px',
          backgroundColor: 'white',
          transition: '.4s',
          borderRadius: '50%'
        }}></span>
      </span>
    </label>
  )
}

export default SlideToggle
