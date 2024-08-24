import { useState } from 'react';
import Button from './Button';
import questions from '../data/questions';
import reactions from '../data/reactions';

const Game = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reaction, setReaction] = useState(''); // Store the current reaction

  const getRandomReaction = () => {
    const randomIndex = Math.floor(Math.random() * reactions.length);
    setReaction(reactions[randomIndex].reaction); // Set the reaction in state
  };

  const getRandomQuestion = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setQuestionIndex(randomIndex);
      setIsLoading(false);
    }, 1000);
  };

  const handleChoice = () => {
    getRandomReaction();
    getRandomQuestion();
  };

  const question = questions[questionIndex].question;
  const parts = question.split(' or ');
  const questionOne = parts[0].substring(17);
  const questionTwo = parts[1].substring(0, parts[1].length - 1);

  return (
    <div>
      {isLoading ? (
        <p>Loading next question...</p>
      ) : (
        <div className='question-container'>
          <p>{question.substring(0, 16)}...</p>
        </div>
      )}
      <div className='choice-container'>
        <Button text={questionOne} onClick={handleChoice} />
        <p> or </p>
        <Button text={questionTwo} onClick={handleChoice} />
      </div>
      <div className='reaction-container'>
        {reaction && <p>{reaction}</p>} 
      </div>
    </div>
  );
};

export default Game;

