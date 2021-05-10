import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import Categories from './Categories'
import "./Home.css";
import {  useHistory } from 'react-router'
import {useState} from "react"
import ErrorMessage from './ErrorMessage';

const Home = ({name,setName,fetchQuestions}) => {

const [category, setCategory] = useState("");
const [difficulty, setDifficulty] = useState("")
const [error, setError] = useState(false)

const history = useHistory()

const handleSubmit = () =>{
    if(!category || !difficulty || !name){
        setError(true)
        return;
    }else{
        setError(false)
        fetchQuestions(category,difficulty)
        history.push("/quiz")
    }
}

    return (
        <div className="content">


           <div className="settings">



               <span style={{fontSize:20}}>Enter Details</span>
               

               <div className="settings__select">
                    <TextField 
                    label="Enter name" 
                    variant="filled" 
                    style={{marginBottom:25}}
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <TextField select 
                    label="Select Category" 
                    variant="filled" style={{marginBottom:30}}
                    onChange={(e)=>setCategory(e.target.value)}
                    value={category}
                    >
                        {Categories.map((cat)=>(
                        <MenuItem key={cat.category} value={cat.value} >
                            {cat.category}
                        </MenuItem>
                        ))
                        }
                    </TextField>

                    <TextField select
                    label="Select Difficulty"
                    variant="filled"
                    style={{marginBottom:30}}
                    onChange={(e)=>setDifficulty(e.target.value)}
                    value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>

                    </TextField>
                    {error && <ErrorMessage>Fill all the fields first !</ErrorMessage> }


                    <Button variant="contained" color="primary"
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>

               </div>
           </div>

           <img src="/5.svg" style={{width:674, marginTop:0}} className="banner" alt="quiz app" />       
        </div>
    )
}

export default Home
