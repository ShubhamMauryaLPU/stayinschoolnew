import React from 'react'
import gsQuiz from '../../../../data/quizz/gsQuizz'
import Quizz from '../../../../components/Quizz'
const GS = () => {
  return (
    <Quizz name={"General Studies"} quizzData={gsQuiz} />
  )
}

export default GS