import React, { useState } from "react";
import Button from "./Button";

const Quizz = ({name, quizzData }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState(null);
  const [disable, setDisable] = useState(false);

  const selectOnClick = (option, idx) => {
    const isCorrect = quizzData[currentQ].answer === option;
    setScore((prev) => (isCorrect ? prev + 1 : prev - 0.25));
    setSelectOption({ option, idx });
    setDisable(true);
  };

  const handleNextQuizz = () => {
    if (currentQ < quizzData.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setDisable(false);
      setSelectOption(null);
    } else {
      alert(`Quiz completed! Your final score is: ${score}`);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center bg-gradient-to-b from-orange-100 to-orange-300 min-h-screen">
      <div className="rounded-lg border-black w-full min-h-[40vh] flex flex-col justify-center text-center">
        <h1 className="text-2xl font-bold font-serif ">
          Participate in the {name} quiz to enhance your skills
        </h1>
        <p className="text-xl font-medium py-3">
          Check your score after every question
        </p>
        {!score == 0 ? (
          <Button name={`Your score is : ${score}`} />
        ) : (
          <p className="font-bold">
            Right answer give you 1 marks and wrong will deduct 0.25 marks
          </p>
        )}
      </div>

      <div className="border-2 rounded-lg flex flex-col items-center py-3 bg-orange-200 border-black w-[25rem] h-[25rem]">
        <p className="text-xl font-medium w-[90%]">
          Q.{currentQ + 1} {quizzData[currentQ].question}
        </p>
        <div className="w-[90%] text-center">
          {quizzData[currentQ].options.map((option, idx) => (
            <p
              key={idx}
              className="py-2 mt-4 border w-full rounded cursor-pointer"
              style={{
                backgroundColor:
                  selectOption &&
                  (option === quizzData[currentQ].answer
                    ? "green"
                    : selectOption.idx === idx
                    ? "red"
                    : "white"),
              }}
              onClick={() => !disable && selectOnClick(option, idx)}
            >
              {option}
            </p>
          ))}
        </div>
        <div onClick={handleNextQuizz} className="w-[90%]">
          <Button
            name={currentQ < quizzData.length - 1 ? "Next" : "Finish"}
            className="my-4 w-full bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-700 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Quizz;
