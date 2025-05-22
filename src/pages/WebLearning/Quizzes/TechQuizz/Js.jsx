import React from 'react'
import jsQuizz from '../../../../data/quizz/jsquizz'
import Quizz from '../../../../components/Quizz'
const Js = () => {
  return (
    <Quizz name="javascript" quizzData={jsQuizz} />
  )
}

export default Js