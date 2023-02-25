import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getData } from '../services/request';

function MotoPage() {
    const [test, setTest] = useState(false)
    
    async function teste() {
        try {
            const result = await getData('http://localhost:3001/moto')
            console.log(result); 
            setTest(result)
        } catch (error) {
            console.log(error.response.data);
        }
        
    }

    return (
        <div>

            <h1>MotorcycleDB</h1>
            <button type='submit' onClick={ () => teste() }>
                oi
            </button>
            <Link to="/">
                <button>InitialPage</button>
            </Link>
        </div>
    )
}

export default MotoPage;
