import React from 'react'
import Quizz from '../../../../components/Quizz'
import { socialScienceQuiz } from '../../../../data/quizz/HschoolQuizz'

const SoScience = () => {
  return (
    <Quizz name={"Social Science"} quizzData={socialScienceQuiz} />
  )
}

export default SoScience