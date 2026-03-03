import { useEffect } from 'react';

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    // Show loading for 2 seconds, then show results
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        fontSize: '48px',
        marginBottom: '30px',
        animation: 'bounce 1s infinite'
      }}>
        🐕
      </div>
      
      <h2 style={{
        fontSize: '32px',
        marginBottom: '20px',
        fontFamily: 'monospace'
      }}>
        FETCHing the right Branch...
      </h2>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <div className="dot" style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          animation: 'pulse 1.5s infinite'
        }}></div>
        <div className="dot" style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          animation: 'pulse 1.5s infinite 0.3s'
        }}></div>
        <div className="dot" style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          animation: 'pulse 1.5s infinite 0.6s'
        }}></div>
      </div>

      <p style={{
        marginTop: '40px',
        color: '#666',
        fontFamily: 'monospace'
      }}>
        Analyzing your coding pawsonality...
      </p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;