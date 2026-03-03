function Welcome({ onStart }) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🐕 🐾Do you code like a Dog? Big Woof 🐾 🐕</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>
        Find out which dog breed code like you or better!
      </p>
      <p>Are you a Puppy learning the ropes? A Border Collie perfecting every detail?</p>
      <p>A Husky dramatically debugging? Take the quiz to find out!</p>
      <button 
        onClick={onStart}
        style={{
          fontSize: '20px',
          padding: '15px 30px',
          marginTop: '30px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;