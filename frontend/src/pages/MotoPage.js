import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getData } from '../services/request';

function MotoPage() {
    const [allMotos, setAllMotos] = useState([])
    
    async function getAll() {
        try {
            const result = await getData('http://localhost:3001/motoPage')
            console.log(result); 
            setAllMotos(result)
        } catch (error) {
            console.log(error.response.data);
        }
        
    }

    return (
        <div>

            <h1>MotorcycleDB</h1>
            <button type='submit' onClick={ () => getAll() }>
                All Motos
            </button>
            <Link to="/">
                <button>InitialPage</button>
            </Link>
            {
                allMotos.map((moto) => {
                    return (
                        <div key={moto._id}>
                            <p>{moto.model}</p>
                            <p>{moto.manufacturer}</p>
                            <p>{moto.buyValue}</p>
                            <p>{moto.type}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MotoPage;
