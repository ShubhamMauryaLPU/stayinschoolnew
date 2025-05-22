import React from 'react'
import Quizz from '../../../../components/Quizz'
import { computerScienceQuiz1 } from '../../../../data/quizz/primQuizz'

const Pcomputer = () => {
  return (
    <Quizz name={"Computer"} quizzData={computerScienceQuiz1} />
  )
}

export default Pcomputer