import React, { useRef, useState, useEffect } from 'react';

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          textAlign: 'left',
          alignItems: 'center',
          color: 'inherit'
        }}
        aria-expanded={open}
      >
        {title}
        <span style={{ position: 'relative', width: '16px', height: '16px', display: 'inline-block' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '2px',
              background: 'black',
              transform: 'translateY(-50%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'black',
              transform: open ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)',
              transition: 'transform 0.3s ease'
            }}
          />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div style={{ paddingTop: '0.5rem', textAlign: 'left' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
