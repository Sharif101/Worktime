import React, { useEffect, useState } from 'react';
import './Details.css';

const Details = (props) => {

    const [breaktime, setBreaktime] = useState(0);

    let handler = (e)=>{
        localStorage.setItem('time', e);
        setBreaktime(e);
    }

    useEffect(()=>{
        let value = localStorage.getItem('time');
        if(value){
            setBreaktime(value);
        }
    },[])

    let {work} = props;
    // console.log(work);
    let time = 0;
    for(let exercise of work){
        time = time + exercise.time;
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
                <button onClick={()=> handler(10)}>10s</button>
                <button onClick={()=> handler(20)}>20s</button>
                <button onClick={()=> handler(30)}>30s</button>
                <button onClick={()=> handler(40)}>40s</button>
                <button onClick={()=> handler(50)}>50s</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <h4>Exercise Time: <span> {time} seconds</span></h4>
                <h4>Break Time: <span> {breaktime} seconds</span></h4>
            </div>
        </div>
    );
};

export default Details;