function Question({ question, questionNumber, totalQuestions, onAnswer }) {
  const progress = (questionNumber / totalQuestions) * 100;
  
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 20px',
    }}>
      <div className="card">
        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p style={{ 
          color: '#FFD700', 
          marginBottom: '25px',
          fontSize: '1rem',
          letterSpacing: '2px'
        }}>
          QUESTION {questionNumber} OF {totalQuestions}
        </p>
        
        <h2 style={{ marginBottom: '35px' }}>
          {question.question}
        </h2>
        
        <div>
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(answer.points)}
              className="answer-button"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;