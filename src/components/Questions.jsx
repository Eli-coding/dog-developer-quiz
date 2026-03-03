function Question({ question, questionNumber, totalQuestions, onAnswer }) {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Question {questionNumber} of {totalQuestions}
      </p>
      
      <h2 style={{ marginBottom: '30px' }}>{question.question}</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.points)}
            style={{
              padding: '15px',
              fontSize: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              border: '2px solid #ddd',
              borderRadius: '5px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e0e0e0';
              e.target.style.borderColor = '#4CAF50';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.borderColor = '#ddd';
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;