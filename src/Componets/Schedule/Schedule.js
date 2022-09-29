import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';
import './Schedule.css';

const Schedule = () => {

    let [exercises, setExercises] = useState([]);
    let [work, setWork] = useState([]);

    useEffect( () => {
        fetch('fakedb.json')
        .then(res => res.json())
        .then(res => setExercises(res))
    },[])

    let addtodetails = (seletedExercise) =>{
        let newExercise = [...work, seletedExercise];
        setWork(newExercise);
    }
    
    return (
        <div className='schedule-container'>
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Exercise exercise ={exercise} key ={exercise.id}  addtodetails ={addtodetails}></Exercise>)
                }
            </div>
            <div className='details-container'>
                <Details work={work}></Details>
            </div>
        </div>
    );
};

export default Schedule;