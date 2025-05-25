export default function Home() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      backgroundColor: '#0B0B0F',
      color: '#F4F5F7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#D4AF37' }}>Envella is Coming Soon</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
        Envella helps you control your home, inside and out — track inventory, manage repairs, and simplify everything. Built for homeowners, pros, and enterprises.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '3rem' }}>
        © 2025 Envella.ai — All rights reserved.
      </p>
    </div>
  );
}