import React from 'react'
import sqlQuiz from '../../../../data/quizz/sqlQuizz'
import Quizz from '../../../../components/Quizz'
const Sql = () => {
  return (
    <Quizz name={"SQL"} quizzData={sqlQuiz} />
  )
}

export default Sql