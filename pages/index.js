import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0B0B0F',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <img 
        src="/envella-landing-preview.png" 
        alt="Envella Coming Soon" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
          marginBottom: '2rem'
        }} 
      />

      <Link href="/waitlist">
        <a style={{
          padding: '1rem 2rem',
          border: '2px solid #D4AF37',
          borderRadius: '8px',
          color: '#D4AF37',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          Join the Waitlist
        </a>
      </Link>
    </div>
  );
}
