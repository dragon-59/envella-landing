export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0B0B0F',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <img 
        src="/envella-landing-preview.png" 
        alt="Envella Coming Soon" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)'
        }} 
      />
    </div>
  );
}
