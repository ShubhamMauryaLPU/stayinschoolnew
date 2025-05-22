import React from 'react'
import Quizz from '../../../../components/Quizz'
import { hindiQuiz1 } from '../../../../data/quizz/primQuizz'

const Phindi = () => {
  return (
    <Quizz name={"Hindi"} quizzData={hindiQuiz1} />
  )
}

export default Phindi