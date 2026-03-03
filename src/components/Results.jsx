function Results({ dogType, onRetake }) {
  return (
    <div style={{ padding: '30px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        {dogType.name}
      </h1>
      
      <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
        {dogType.description}
      </p>
      
      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
        <h3>💪 Strengths:</h3>
        <ul>
          {dogType.strengths.map((strength, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{strength}</li>
          ))}
        </ul>
        
        <h3>⚠️ Weaknesses:</h3>
        <ul>
          {dogType.weaknesses.map((weakness, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{weakness}</li>
          ))}
        </ul>
        
        <h3>🌟 Famous For:</h3>
        <p style={{ fontStyle: 'italic', marginLeft: '20px' }}>{dogType.famousFor}</p>
        
        <h3>❌ Error Message Style:</h3>
        <p style={{ 
          backgroundColor: '#ffe6e6', 
          padding: '15px', 
          borderRadius: '5px',
          fontFamily: 'monospace',
          marginLeft: '20px'
        }}>
          {dogType.errorMessage}
        </p>
        
        {dogType.encouragement && (
          <div style={{ 
            marginTop: '20px', 
            padding: '20px', 
            backgroundColor: '#e8f5e9',
            borderRadius: '5px'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>💚 {dogType.encouragement}</p>
          </div>
        )}
      </div>
      
      <button
        onClick={onRetake}
        style={{
          fontSize: '18px',
          padding: '12px 30px',
          cursor: 'pointer',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        Retake Quiz
      </button>
    </div>
  );
}

export default Results;
