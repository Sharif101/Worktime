import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
            
                <h1><span><FontAwesomeIcon icon={faDumbbell} /></span> Exercise Club</h1>
            </nav>
        </div>
    );
};

export default Header;