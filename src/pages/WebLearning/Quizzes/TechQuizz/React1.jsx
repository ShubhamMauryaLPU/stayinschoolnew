import React from 'react'
import reactQuiz from '../../../../data/quizz/reactQuizz'
import Quizz from '../../../../components/Quizz'
const React1 = () => {
  return (
    <Quizz name={"React JS"} quizzData={reactQuiz} />
  )
}

export default React1