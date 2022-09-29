import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <div className="ques">
                <h4>How does react work?</h4>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.</p>
            </div>
            <div className="ques">
                <h4>Difference between props and state?</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className="ques">
                <h4>Why is useEffect used?</h4>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
            </div>
        </div>
    );
};

export default Question;