import React from 'react';

const Details = (props) => {
    let {work} = props;
    // console.log(work);
    let time = 0;
    for(let exercise of work){
        time = time + exercise.time;
    }
    return (
        <div className='details'>
            <h3>Exercise time: {time} seconds</h3>
        </div>
    );
};

export default Details;