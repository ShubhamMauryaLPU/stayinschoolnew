import React from 'react'
import Quizz from '../../../../components/Quizz'
import { gkQuiz1 } from '../../../../data/quizz/primQuizz'

const Pgk = () => {
  return (
    <Quizz name={"General Knowledge"} quizzData={gkQuiz1} />
  )
}

export default Pgk