import React from 'react'
import Quizz from '../../../../components/Quizz'
import { englishQuiz } from '../../../../data/quizz/HschoolQuizz'

const English = () => {
  return (
    <Quizz name={"English"} quizzData={englishQuiz} />
  )
}

export default English