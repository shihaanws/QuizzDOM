// import "./Result.css"
import React from 'react'
import {  useHistory } from 'react-router'
import ReactStoreIndicator from 'react-score-indicator'
import Chart from "react-google-charts";
import "./Reports.css";
import { Button } from 'react-bootstrap';
import { Smile, Frown,ThumbsUp,ThumbsDown } from 'react-feather'
const Reports = ({name,score}) => {

    const [isBlue, setIsBlue] = React.useState(false)
    const [isGreen, setIsGreen] = React.useState(false)
    const [isBlue2, setIsBlue2] = React.useState(false)
    const [isGreen2, setIsGreen2] = React.useState(false)


    const history = useHistory()
        
    return (
        <div className="analysis">

        <div className= "experience1">

    <div className="feedback1">Did you find this Quiz easy or difficult?</div>

    <div className="emojis">
        <button
        style={{ padding: 8, background: 'transparent', border: 0,outline:0 }}
        onClick={() => setIsBlue(!isBlue)}
        >
        <Smile
          color={isBlue ? 'green' : 'black'}
          size={80}
          style={{ verticalAlign: 'middle' ,outline:"0"}}
        />
        </button>


        <button
        style={{ padding: 8, background: 'transparent',border:0, outline:0 }}
        onClick={() => setIsGreen(!isGreen)}
        >
        <Frown
          color={isGreen ? 'red' : 'black'}
          size={80}
          style={{ verticalAlign: 'middle' }}
        />
        </button>
    </div>


</div>







<div className= "experience2">


<div className="feedback2">How was the App in your opinion?</div>

<div className="emojis">
<button
        style={{ padding: 8, background: 'transparent', border: 0,outline:0 }}
        onClick={() => setIsBlue2(!isBlue2)}
      >
        <ThumbsUp
          color={isBlue2 ? 'green' : 'black'}
          size={80}
          style={{ verticalAlign: 'middle' ,outline:"0"}}
        />
      </button>

      <button
        style={{ padding: 8, background: 'transparent',border:0, outline:0 }}
        onClick={() => setIsGreen2(!isGreen2)}
      >
        <ThumbsDown
          color={isGreen2 ? 'red' : 'black'}
          size={80}
          style={{ verticalAlign: 'middle' }}
        />
      </button>
    </div>


</div>
      

    


          <div className="scorebox" >



            <div className="marks">
                <ReactStoreIndicator
                    value={score}
                    maxValue={10}  
                />
               <p style={{textAlign:"center",color:"white", fontWeight:"bolder"}}>Marks</p> 
            </div>
             
                
                
            <div  className="percent">
                <Chart             
                    width={'400px'}
                    height={'200px'}
                    chartType="PieChart"
                    // loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Right Answers', score],
                        ['Wrong Answers', 10-score],
                        
                    ]}
                    options={{
                        // title: 'Your Quiz Stats',
                        pieHole: 0.4,
                    }}
                />
               <p style={{textAlign:"center",color:"white", fontWeight:"bolder"}}>Percentage</p> 

            </div>

          </div>
<div style={{width:"100%",display:"flex", alignItems:"center" ,paddingTop:"1%" ,justifyContent:"center",flexDirection:"column" }}>
<Button  variant="danger" onClick={e=> history.push('/')}  >Quit</Button>{' '}     

</div>


        </div>
    )
}

export default Reports
