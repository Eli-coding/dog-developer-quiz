function Results({ dogType, onRetake }) {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '30px' }}>
          {dogType.name}
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '50px', 
          lineHeight: '1.8',
          color: '#CCCCCC',
          fontStyle: 'italic',
          borderLeft: '4px solid #FFD700',
          paddingLeft: '20px',
          textAlign: 'left'
        }}>
          {dogType.description}
        </p>
        
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <h3 style={{ color: '#51CF66', marginBottom: '20px' }}>
            STRENGTHS:
          </h3>
          <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
            {dogType.strengths.map((strength, i) => (
              <li key={i} style={{ 
                marginBottom: '12px', 
                fontSize: '1.1rem',
                color: '#F5F5DC'
              }}>
                {strength}
              </li>
            ))}
          </ul>
          
          <h3 style={{ color: '#FF6B6B', marginBottom: '20px' }}>
            WEAKNESSES:
          </h3>
          <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
            {dogType.weaknesses.map((weakness, i) => (
              <li key={i} style={{ 
                marginBottom: '12px', 
                fontSize: '1.1rem',
                color: '#F5F5DC'
              }}>
                {weakness}
              </li>
            ))}
          </ul>
          
          <h3 style={{ marginBottom: '15px' }}>FAMOUS FOR:</h3>
          <p style={{ 
            fontStyle: 'italic', 
            marginLeft: '20px',
            marginBottom: '40px',
            fontSize: '1.2rem',
            color: '#FFD700'
          }}>
            {dogType.famousFor}
          </p>
          
          {/* <h3 style={{ marginBottom: '15px', color:'#FF6B6B' }}>ERROR MESSAGE STYLE:</h3>
          <div style={{ 
            backgroundColor: '#1a0000', 
            padding: '25px', 
            border: '2px solid #FF6B6B',
            fontFamily: 'Courier New, monospace',
            marginLeft: '20px',
            marginBottom: '40px',
            color: '#FF6B6B',
            fontSize: '1rem'
          }}>
            {dogType.errorMessage}
          </div> */}
          
          {dogType.encouragement && (
            <div style={{ 
              marginTop: '40px', 
              padding: '30px', 
              backgroundColor: '#0a1a0a',
              border: '2px solid #51CF66'
            }}>
              <p style={{ 
                margin: 0, 
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: '#51CF66'
              }}>
                💚 {dogType.encouragement}
              </p>
            </div>
          )}
        </div>
        
        <button
          onClick={onRetake}
          className="btn-secondary"
        >
          BITE BACK
        </button>
      </div>
    </div>
  );
}

export default Results;