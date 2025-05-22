import React from 'react'
import Quizz from '../../../../components/Quizz'
import { socialScienceQuiz1 } from '../../../../data/quizz/primQuizz'

const Psoscience = () => {
  return (
    <Quizz name={"Social Science"} quizzData={socialScienceQuiz1} />
  )
}

export default Psoscience