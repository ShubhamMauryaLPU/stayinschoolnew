import React from 'react'
import Quizz from '../../../../components/Quizz'
import { scienceQuiz1 } from '../../../../data/quizz/primQuizz'

const Pscience = () => {
  return (
    <Quizz name={"Science"} quizzData={scienceQuiz1} />
  )
}

export default Pscience