// ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form style={styles.form}>
      <div>
        <label style={styles.label}>Name <span style={styles.required}>(required)</span></label>
        <div style={styles.nameRow}>
          <div style={styles.nameField}>
            <label style={styles.subLabel}>First Name</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.nameField}>
            <label style={styles.subLabel}>Last Name</label>
            <input type="text" style={styles.input} />
          </div>
        </div>
      </div>

      <div>
        <label style={styles.label}>Email <span style={styles.required}>(required)</span></label>
        <input type="email" style={styles.input} />
      </div>

      <div>
        <label style={styles.label}>Message <span style={styles.required}>(required)</span></label>
        <textarea style={{ ...styles.input, height: '100px' }} />
      </div>

      <button className="button" type="submit" style={styles.button}>SEND</button>
    </form>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '600px',
    padding: '2rem',
    background: '#f5f6f8',
    fontFamily: 'Arial, sans-serif',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'block',
  },
  required: {
    fontWeight: 'normal',
    fontSize: '0.9rem',
    color: '#555',
    marginLeft: '0.5rem',
  },
  subLabel: {
    fontSize: '0.85rem',
    marginBottom: '0.3rem',
    display: 'block',
  },
  nameRow: {
    display: 'flex',
    gap: '1rem',
  },
  nameField: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    borderRadius: '0.4rem',
    border: '1px solid #666',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    background: 0,
    color: 'black'
  }
};

export default ContactForm;