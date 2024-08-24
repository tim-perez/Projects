import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');

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

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
    setCorrectAnswer(question.answer);
  }

  const handleSelection = () => { 
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
      button.classList.remove('correct', 'wrong', 'selected');
    });
  }

  const checkAnswer = (event, selected) => {
    handleSelection();

    if (selected) {
      setSelectedAnswer(selected);
      event.target.classList.add('selected');
    }
    if (selected === correctAnswer) {
      event.target.classList.add('correct');
    } else {
      event.target.classList.add('wrong');
    }
  };

  const nextQuestion = () => {
    handleSelection();
    setSelectedAnswer('');
    setQuestionIndex(questionIndex + 1);
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