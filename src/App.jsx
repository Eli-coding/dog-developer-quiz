import { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Questions';
import Results from './components/Results';
import { questions } from './data/questions';
import { dogTypes } from './data/dogTypes';
import LoadingScreen from './components/LoadingScreen';
import { useNavigate, useSearchParams } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sharedId = searchParams.get('id');
  const [resultDog, setResultDog] = useState(null);
  const [screen, setScreen] = useState(sharedId ?'results':'welcome'); // welcome, quiz, loading, results
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

  
  const calculateResult = (newScores) => {
  let maxScore = 0;
  let result = 'puppy';
  Object.keys(newScores).forEach(dog => {
    if (newScores[dog] > maxScore) {
      maxScore = newScores[dog];
      result = dog;
    }
  });
  return result;
  };

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
    const result = calculateResult(newScores);
    setResultDog(result);
    navigate(`/result?id=${result}`);
    setScreen('loading');
}};

 
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000',
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

      {screen === 'loading' && (
        <LoadingScreen onComplete={() => setScreen('results')} />
      )}
      
      {screen === 'results' && (
        <Results
          dogType={dogTypes[resultDog]}
          onRetake={startQuiz}
        />
      )}
    </div>
  );
}

export default App;