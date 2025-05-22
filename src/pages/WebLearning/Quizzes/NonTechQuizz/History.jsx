import React from 'react'
import Quizz from '../../../../components/Quizz'
import historyQuiz from '../../../../data/quizz/historyQuizz'
const History = () => {
  return (
    <Quizz name={"History"} quizzData={historyQuiz} />
  )
}

export default History