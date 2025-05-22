import React from 'react'
import gkQuiz from '../../../../data/quizz/gkQuizz'
import Quizz from '../../../../components/Quizz'
const GK = () => {
  return (
    <Quizz name={"General Knowledge"} quizzData={gkQuiz} />
  )
}

export default GK