import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section className="start" style={{ display: `${showStart ? 'block' : 'none'}`}}>
      <div className="App">
        <div className="container">
          <div className="title-container">
            <h1>Welcome to the Blue Lock Quiz</h1>
            <img src="images/Title.jpeg" alt="title-image" />
          </div>
          <div className="start-button-container">
            <button onClick={startQuiz}>Start Quiz</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Start;