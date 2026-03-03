import { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Questions';
import Results from './components/Results';
import { questions } from './data/questions';
import { dogTypes } from './data/dogTypes';

function App() {
  const [screen, setScreen] = useState('welcome'); // welcome, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    puppy: 0,
    golden: 0,
    collie: 0,
    husky: 0,
    chihuahua: 0,
    corgi: 0,
    dane: 0,
    beagle: 0,
    greyhound: 0
  });

  const startQuiz = () => {
    setScreen('quiz');
    setCurrentQuestion(0);
    setScores({
      puppy: 0,
      golden: 0,
      collie: 0,
      husky: 0,
      chihuahua: 0,
      corgi: 0,
      dane: 0,
      beagle: 0,
      greyhound: 0
    });
  };

  const handleAnswer = (points) => {
    // Add points to the appropriate dog type
    const newScores = { ...scores };
    Object.keys(points).forEach(dog => {
      newScores[dog] += points[dog];
    });
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('results');
    }
  };

  const calculateResult = () => {
    // Find dog type with highest score
    let maxScore = 0;
    let resultDog = 'puppy';
    
    Object.keys(scores).forEach(dog => {
      if (scores[dog] > maxScore) {
        maxScore = scores[dog];
        resultDog = dog;
      }
    });
    
    return dogTypes[resultDog];
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      {screen === 'welcome' && (
        <Welcome onStart={startQuiz} />
      )}
      
      {screen === 'quiz' && (
        <Question
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {screen === 'results' && (
        <Results
          dogType={calculateResult()}
          onRetake={startQuiz}
        />
      )}
    </div>
  );
}

export default App;