import React, { useEffect } from 'react'
import {useState} from "react"
import "./Quiz.css";
import {CircularProgress} from "@material-ui/core"
import Question from './Question';
import {  useHistory } from 'react-router'
import { Button } from 'react-bootstrap';


const Quiz = ({category,name,score,setScore,questions,setQuestions}) => {
   
const [options, setOptions] = useState();

// Current qn number
const [currentQuestion, setCurrentQuestion] = useState(0)


useEffect(() => {
    console.log(questions);

    setOptions(
        questions && handleShuffle([
        questions[currentQuestion]?.correct_answer,
        ...questions[currentQuestion]?.incorrect_answers,
    ]))

},[questions,currentQuestion]);
    

console.log(options)



const handleShuffle =(choices)=>{
    return choices.sort(()=>Math.random() - 0.5 )
}
const history = useHistory()

    return (

    <div className="fullscreen">

        <div className="leftscreen">
            <div className="user">
                <span className="username" >👤 &nbsp; {name}</span>
                <br/>
                
                <span className="score" >Score : {score}</span>
                
                <span className="logout"><Button 

                
                 variant="outline-danger" onClick={e=> history.push('/')}>Logout</Button>{' '}</span>
            </div>
            {/* <div className="dashboard">
               <span>{score}</span>
            </div> */}
        </div>
        
        <div className="quiz">
            <span className="subtitle">Keep going {name} !</span>
            
            {questions ? 
            <>
            <div className="quizInfo">
            <span>{questions[currentQuestion].category}</span>
            <span>
              Score : {score}
            </span>
          </div>

          <Question
           currentQuestion={currentQuestion}
           setCurrentQuestion={setCurrentQuestion}
           questions={questions}
           options={options}
           correct={questions[currentQuestion]?.correct_answer}
           score={score}
           setScore={setScore}
           setQuestions={setQuestions}
          />
            </>
            : <CircularProgress
            style={{margin:100}}
            color ="inherit"
            thickness ={1}
            />
             }
        </div>

    </div>
    )
}

export default Quiz
