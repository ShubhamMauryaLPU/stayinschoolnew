import React from 'react'
import Quizz from '../../../../components/Quizz'
import { computerScienceQuiz } from '../../../../data/quizz/HschoolQuizz'

const Computer = () => {
  return (
    <Quizz name={"Computer Science"} quizzData={computerScienceQuiz} />
  )
}

export default Computer