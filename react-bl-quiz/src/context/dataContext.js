import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false); 

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  

  useEffect(() => {
    fetch('quiz.json')
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }, []);

  useEffect(() => {
    if (quiz.length > questionIndex){
      setQuestion(quiz[questionIndex]);
    }
  }, [quiz, questionIndex]);

  useEffect(() => {
    if (correctAnswer !== question.answer) {
      setCorrectAnswer(question.answer);
    }
  }, [question, correctAnswer]);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }

  const handleSelection = () => { 
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
      button.classList.remove('correct', 'wrong', 'selected');
    });
  }


  const checkAnswer = (event, selected) => {

    handleSelection();
    setSelectedAnswer(selected);
    event.target.classList.add('selected');

    if (selected === correctAnswer && hasAnswered === false ) {
      setScore(score + 10);
      setHasAnswered(true);
    } else if (selected !== correctAnswer && hasAnswered === true){
      setScore(score - 10);
      setHasAnswered(false);
    } else if (selected === correctAnswer && hasAnswered === true){
      setScore(score);
    } else {
      setScore(score);
    }
    console.log(score);
    console.log(hasAnswered);
  };

  const nextQuestion = () => {
    handleSelection();
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer('');
    setHasAnswered(false);
    console.log(score);
  }

  const showTheResult = () => {
    setShowQuiz(false);
    setShowStart(false);
    setShowResult(true);
  }

  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setSelectedAnswer('');
    setQuestionIndex(0);
    setScore(0);
  }

  return (
    <DataContext.Provider value={{ 
      quiz, 
      question, 
      questionIndex,
      selectedAnswer,
      checkAnswer,
      nextQuestion,
      score,
      showStart,
      showQuiz,
      showResult,
      startQuiz,
      showTheResult,
      startOver
     }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;