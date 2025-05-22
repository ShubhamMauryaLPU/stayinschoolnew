import React from 'react'
import Quizz from '../../../../components/Quizz'
import { englishQuiz1 } from '../../../../data/quizz/primQuizz'

const Penglish = () => {
  return (
    <Quizz name={"English"} quizzData={englishQuiz1} />
  )
}

export default Penglish