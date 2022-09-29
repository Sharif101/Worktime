import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Schedule.css';

const Schedule = () => {

    let [exercises, setExercises] = useState([]);

    useEffect( () => {
        fetch('fakedb.json')
        .then(res => res.json())
        .then(res => setExercises(res))
    },[])
    
    return (
        <div className='schedule-container'>
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Exercise exercise ={exercise} key ={exercise.id}></Exercise>)
                }
            </div>
            <div className='details-container'>
                <h4>details</h4>
            </div>
        </div>
    );
};

export default Schedule;