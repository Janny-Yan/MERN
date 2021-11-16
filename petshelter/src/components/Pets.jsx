import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from "./Home";

const Pets = (props) => {
    const [pets, setPets] = useState([]);
    
    const fetchPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res);
                console.log("data:", res.data);
                setPets(res.data)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchPets();
    }, []);
    
    return (
        <div>
            {pets.map((pet) =>
                <Home key={pet._id} pet={pet} />)}
        </div>
    );
}
export default Pets;