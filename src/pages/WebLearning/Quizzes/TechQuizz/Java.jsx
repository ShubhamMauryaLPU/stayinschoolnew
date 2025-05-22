import React from 'react'
import javaQuizz from "../../../../data/quizz/quizzjava";
import Quizz from '../../../../components/Quizz';
const Java = () => {
  return (
    <Quizz name="java" quizzData={javaQuizz} />
  )
}

export default Java