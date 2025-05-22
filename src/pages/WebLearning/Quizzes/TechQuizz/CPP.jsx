import React from 'react'
import cppQuiz from '../../../../data/quizz/cppQuizz'
import Quizz from '../../../../components/Quizz'
const CPP = () => {
  return (
    <Quizz name="c++" quizzData={cppQuiz}/>
  )
}

export default CPP