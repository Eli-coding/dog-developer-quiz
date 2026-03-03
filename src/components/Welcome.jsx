function Welcome({ onStart }) {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1 style={{ marginBottom: '30px' }}>
         I heard YOU CODE <br></br>
         LIKE A DOG 
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
           textAlign: 'center',
          marginBottom: '40px', 
          color: '#CCCCCC',
          fontStyle: 'italic'
        }}>
          Big Woof. Find out if you're <span style={{ color: '#FFD700' }}>alpha</span> or just barking up the wrong tree
        </p>
        
      
        
        <button 
          onClick={onStart}
          className="btn-primary"
        >
          BITE IN
        </button>
        
        <p style={{ 
          marginTop: '30px',
          fontSize: '0.9rem',
          color: '#666',
          fontStyle: 'italic'
        }}>
          Warning: Results may bite back
        </p>
      </div>
    </div>
  );
}

export default Welcome;