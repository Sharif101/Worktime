import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    let {name, time, img} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{time}</p>
            <button>Add to lists</button>
        </div>
    );
};

export default Exercise;