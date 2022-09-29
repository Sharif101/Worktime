import React from 'react';
import './Details.css';

const Details = (props) => {
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
            <h3>Exercise time: {time} seconds</h3>
        </div>
    );
};

export default Details;