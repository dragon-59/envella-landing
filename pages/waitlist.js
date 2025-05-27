import { useState } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist form submitted:', form); // Replace with POST request later
    setSubmitted(true);
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      backgroundColor: '#0B0B0F',
      color: '#F4F5F7',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#D4AF37' }}>Join the Envella Waitlist</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: 'none' }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', border: 'none' }}
          />
          <button type="submit" style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#D4AF37',
            color: '#0B0B0F',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}>
            Submit
          </button>
        </form>
      ) : (
        <p>✅ Thank you! You’ve been added to the waitlist.</p>
      )}
    </div>
  );
}
