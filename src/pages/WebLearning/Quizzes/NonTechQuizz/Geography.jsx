import React from 'react'
import geoQuiz from '../../../../data/quizz/geoQuizz'
import Quizz from '../../../../components/Quizz'
const Geography = () => {
  return (
    <Quizz name={"Geography"} quizzData={geoQuiz} />
  )
}

export default Geography