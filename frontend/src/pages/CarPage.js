import React, { useState } from "react";
import { Link } from "react-router-dom"
import { getData } from '../services/request';

function CarPage() {
    const [allCars, setAllCars] = useState([])

    async function getAll() {
        try {
            const result = await getData('http://localhost:3001/carPage')
            console.log(result); 
            setAllCars(result)
        } catch (error) {
            console.log(error.response.data);
        }
        
    }

    return (
        <div>
            <h1>CarDB</h1>
            <button type='submit' onClick={ () => getAll() }>
                All Cars
            </button>
            <Link to="/">
                <button>InitialPage</button>
            </Link>
            {
                allCars.map((car) => {
                    return (
                        <div key={car._id}>
                            <p>{car.model}</p>
                            <p>{car.manufacturer}</p>
                            <p>{car.buyValue}</p>
                            <p>{car.doorsQty}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CarPage
