import { Button } from 'react-bootstrap';
import React from 'react'
import Positive from "./audioClips/positive.wav"
import useSound from 'use-sound';

import {useState} from "react"
import ErrorMessage from './ErrorMessage';
import "./Question.css"
import { useHistory } from "react-router";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,

  setScore,
  score,
  setQuestions,
}) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const history = useHistory();

     const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
  };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false)
      };

      const [play] = useSound(Positive);


      const handleNext = () => {
        if (currentQuestion > 8) {
          console.log("Last arrived");

          history.push("/result");
        } else if (selected) {
          setCurrentQuestion(currentQuestion + 1);
          setSelected();
        } 
        else setError("Please select an option first");
      };

    
      const handleQuit = () => {
        setCurrentQuestion(0);
        setQuestions();
      };

    return (
        <div className="question">
            <h1>
            Question number {currentQuestion +1}
            </h1>

            <div className="singleQuestion">
                <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className="options">

            {error && <ErrorMessage>{error}</ErrorMessage> }

            {options && 
            options.map(i=>(
                <Button
                variant="outline-secodary"

                // Checks if ans is right
                onClick={()=>{handleCheck(i);play();}}

                // Change in color when clicked
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
                >
                {i}</Button>
            ))
            }
            </div>

            <div className="controls">

                  <Button onClick={handleQuit} style={{width:185}} variant="danger">Quit </Button>{' '}
                  <Button onClick={handleNext} style={{width:185}} variant="success">Next  ➡ </Button>{' '}

            </div>

        </div>
    )
}

export default Question
