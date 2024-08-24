import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
const { showQuiz, question, quiz, checkAnswer,
selectedAnswer,questionIndex, nextQuestion, showTheResult }  = useContext(DataContext);

return (
<section style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
	<div className="App">
		<div className="container">
			<div className='container-items'>
				<div className="question-container">
					<h5 className="question">{question?.question}</h5>
					<h5 className="question-number">{quiz.indexOf(question) + 1} / {quiz?.length}</h5>
				</div>
				<div className="image-container">
					<img src={question?.image} alt="question" />
				</div>
				<div className="choices-container">
					{question?.options?.map((item, index) => 
						<button
							className="choice"
							key={index}
							onClick={(event) => checkAnswer(event, item)}
							>
							{item}
						</button>
					)}
				</div>
				<div className="next-question-container">
					{
						(questionIndex + 1) !== quiz.length ?
							<button onClick={nextQuestion} disabled={!selectedAnswer}> Next Question</button> 
						:
						<button onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
					}
				</div>
			</div>
		</div>
	</div>
</section>
);
};

export default Quiz;