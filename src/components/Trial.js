import React from 'react';
import { useLocation } from 'react-router-dom';
import App from '../conatiners/App/App';


function Trial() {
    const location = useLocation();
    const { from } = location.state;

    return (
        <div>
            <App props={from} />
        </div>
    )
}

export default Trial;
