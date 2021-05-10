import React from 'react';

import './App.css';
import Footer from './Footer';
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {useState} from "react"

import Quiz from './Quiz';
import Result from './Result';
import axios from 'axios';
import Reports from './Reports';

 export default function App() {

 const [name, setName] = useState("")
const [questions, setQuestions] = useState("")
const [score, setScore] = useState(0)
const [category, setCategory] = useState("")



 const fetchQuestions=async(category="",difficulty="")=>{
      const {data}= await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${ difficulty && `&difficulty=${difficulty}`}&type=multiple`)

      setQuestions(data.results)

    }


  return (
    <Router>
     <div className="App">
      <Switch>
        <Route exact path="/">
        <Header/>

            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
            <Footer/>
        </Route>



        <Route exact path="/quiz">
            <Quiz
            name={name}
            questions={questions}
            fetchQuestions={fetchQuestions}
            score={score}
            setScore={setScore}
            category={category}
            setCategory={setCategory}
            />
        </Route>

        <Route exact path="/result">
            <Result name={name} score={score}/>
        </Route>
        {/* <Footer/> */}

        <Route exact path="/reports">
            <Reports name={name} score={score}/>
        </Route>

      </Switch>
      </div>
      
    </Router>
    
  );
}





// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
