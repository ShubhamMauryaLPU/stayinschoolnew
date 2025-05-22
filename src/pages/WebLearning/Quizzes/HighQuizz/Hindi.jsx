import React from 'react'
import Quizz from '../../../../components/Quizz'
import { hindiQuiz } from '../../../../data/quizz/HschoolQuizz'

const Hindi = () => {
  return (
    <Quizz name={"Hind"} quizzData={hindiQuiz} />
  )
}

export default Hindi