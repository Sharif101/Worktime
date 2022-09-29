import React, { useState } from 'react';
import './Details.css';

const Details = (props) => {
    let {work} = props;
    // console.log(work);
    let time = 0;
    for(let exercise of work){
        time = time + exercise.time;
    }


    // let [break, setBreak] = useState([]);
    let handler = () =>{
        let time = {};
        localStorage.setItem('time', JSON.stringify(time))
    }
    return (
        <div className='details'>
            <div className="info">
                <h2>MD. Sharif</h2>
                <p>Sydney, Australia</p>
            </div>
            <div className="bmi">
                <h3>73kg <p>Weight</p></h3>
                <h3>5.9 <p>Height</p></h3>
                <h3>23 <p>Age</p></h3>
            </div>
            <div className='btn'>
                <button onClick={handler}>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <h4>Exercise Time: <span> {time} seconds</span></h4>
                <h4>Break Time: <span>  seconds</span></h4>
            </div>
        </div>
    );
};

export default Details;