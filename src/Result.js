import React, { useEffect } from 'react'
import {  useHistory } from 'react-router'
import "./Result.css"

import { Button } from 'react-bootstrap';

const Result = ({name,score}) => {
    const history = useHistory()



useEffect(() => {
    if (!name){
        history.push("/")
    }
}, [name,history])
            {/* {score <5 && "So Poor"} */}


          

             
             

    return (
        <div className="analysis">

          <div className="thanks">

               <p>  Thank you for attempting the quiz !</p>
               <p>Congratulations {name} 🎉, Your score is {score}</p>
                   
          </div>

          <div className="report">

             <Button variant="danger" onClick={e=> history.push('/')}  >Go to Home</Button>{' '}     

             <Button variant="success" onClick={e=> history.push('/reports')}  >View Quiz Stats</Button>{' '}     

          </div>


             
          {/* <ReactStoreIndicator
              value={score}
              maxValue={10}   
          /> */}
                {/* <ReactStoreIndicator
                    value={score}
                    maxValue={10}   
                />
                <ReactStoreIndicator
                    value={score}
                    maxValue={10}   
                /> */}

              {/* <Chart
              width={'900px'}
              height={'300px'}
              chartType="PieChart"
              // loader={<div>Loading Chart</div>}
              data={[
                ['Task', 'Hours per Day'],
                ['Right Answers', score],
                ['Wrong Answers', 10-score],
                
              ]}
              options={{
                title: 'Your Quiz Stats',
                pieHole: 0.4,
              }}
            /> */}
            
        </div>
    )
}

export default Result
