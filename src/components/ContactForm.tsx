import React, { useState } from 'react';
import { fetchWithAuth } from '../utils/api';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetchWithAuth('/contact', 'POST', {
        firstName,
        lastName,
        email,
        message,
      });
      setStatus('sent');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <div>
        <label style={styles.label}>Name <span style={styles.required}>(required)</span></label>
        <div style={styles.nameRow}>
          <div style={styles.nameField}>
            <label style={styles.subLabel}>First Name</label>
            <input type="text" style={styles.input} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div style={styles.nameField}>
            <label style={styles.subLabel}>Last Name</label>
            <input type="text" style={styles.input} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>
      </div>

      <div>
        <label style={styles.label}>Email <span style={styles.required}>(required)</span></label>
        <input type="email" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <label style={styles.label}>Message <span style={styles.required}>(required)</span></label>
        <textarea style={{ ...styles.input, height: '100px' }} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>

      <button className="button" type="submit" style={styles.button}>
        {status === 'sending' ? 'Sending...' : 'SEND'}
      </button>
      {status === 'sent' && <p style={{ color: 'green' }}>Message sent!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Error sending message.</p>}
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
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  }
};

export default ContactForm;
