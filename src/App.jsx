import { questions } from './data/questions';
import { dogTypes } from './data/dogTypes';

function App() {
  return (
    <div>
      <h1>Data Test</h1>
      <p>Questions loaded: {questions.length}</p>
      <p>Dog types loaded: {Object.keys(dogTypes).length}</p>
      
      <h2>First Question:</h2>
      <p>{questions[0].question}</p>
      
      <h2>First Dog Type:</h2>
      <p>{dogTypes.puppy.name}</p>
    </div>
  );
}

export default App;
// ```

// **Save and check your browser. You should see:**
// ```
// Data Test
// Questions loaded: 10
// Dog types loaded: 9
// First Question: You encounter a bug in production...
// First Dog Type: Puppy Developer 🐶