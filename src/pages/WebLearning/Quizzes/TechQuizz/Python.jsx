import React from 'react'
import pythonQuiz from '../../../../data/quizz/pythonQuizz'
import Quizz from '../../../../components/Quizz'
const Python = () => {
  return (
    <Quizz name={"Python"} quizzData={pythonQuiz} />
  )
}

export default Python