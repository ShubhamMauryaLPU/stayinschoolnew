import React from 'react'
import phpQuiz from '../../../../data/quizz/phpQuizz'
import Quizz from '../../../../components/Quizz'
const PHP = () => {
  return (
    <Quizz name={"PHP"} quizzData={phpQuiz} />
  )
}

export default PHP