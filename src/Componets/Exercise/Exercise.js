import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    let {name, time, img, theory} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{theory}</p>
            <p>Time required: {time}s</p>
            <button onClick={()=> props.addtodetails(props.exercise)}>Add to lists</button>
        </div>
    );
};

export default Exercise;