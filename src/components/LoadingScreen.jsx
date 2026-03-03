import React from 'react';

function LoadingScreen({ onComplete }) {
  const messages = [
    "FETCHing the right Branch..."
  ];

  const [message, setMessage] = React.useState(messages[0]);

  React.useEffect(() => {
    let index = 0;
    const messageTimer = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 400);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => {
      clearInterval(messageTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(circle, #1a1a1a 0%, #000000 100%)'
    }}>
      {/* DOG BITE FRAME */}
      <div style={{
        position: 'relative',
        width: '500px',
        maxWidth: '90%',
        margin: '0 auto 40px',
        padding: '60px 40px',
        border: '4px solid #FFD700',
        borderRadius: '20px',
        background: '#000',
      }}>
        {/* Teeth decorations */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px'
        }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '25px solid #FFD700'
            }} />
          ))}
        </div>
        
        {/* Bottom teeth */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px'
        }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '25px solid #FFD700'
            }} />
          ))}
        </div>

        {/* Content inside bite */}
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className="bouncing-dog">
            🦴
          </div>
          
          <h2 style={{
            fontSize: '2rem',
            marginTop: '20px',
            marginBottom: '20px',
            fontFamily: 'Wartorn, sans-serif',
            color: '#F5F5DC',

          }}>
            {message}
          </h2>
        </div>
      </div>
      
      {/* Loading dots */}
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>

      <p style={{
        marginTop: '40px',
        color: '#CCCCCC',
        fontSize: '1.1rem',
        fontStyle: 'italic'
      }}>
        Analyzing your coding pawsonality...
      </p>
    </div>
  );
}

export default LoadingScreen;