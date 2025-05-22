import React from 'react'
import nodeQuiz from '../../../../data/quizz/nodeQuizz'
import Quizz from "../../../../components/Quizz"
const Node1 = () => {
  return (
    <Quizz name ={"Node JS"} quizzData={nodeQuiz}/>
  )
}

export default Node1