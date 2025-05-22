import React from 'react'
import Quizz from '../../../../components/Quizz'
import { scienceQuiz } from '../../../../data/quizz/HschoolQuizz'

const Science = () => {
  return (
    <Quizz name={"Science"} quizzData={scienceQuiz} />
  )
}

export default Science