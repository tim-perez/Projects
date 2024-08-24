import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
  const { showResult, startOver, quiz, score } = useContext(DataContext);
  return (
    <section className="start" style={{ display: `${showResult ? 'block' : 'none'}`}}>
      <div className="App">
        <div className="container">
          <div className="title-container">
						<h1>{score > (quiz.length * 5 / 2) ? 'You have what it takes egoist!' : 'Go home loser!'}</h1>
            <h1>Your score is {score} out of {quiz.length * 10}</h1>
            <img src="images/Result.png" alt="title-image" />
          </div>
          <div className="start-button-container">
            <button onClick={startOver}>Start Over</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Result;