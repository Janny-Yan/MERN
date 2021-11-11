import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PetDetails = (props) => {
    const [name, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setTitle(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkillOne(res.data.pet.skillOne);
                setSkillTwo(res.data.pet.skillTwo);
                setSkillThree(res.data.pet.skillThree);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const deletePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }
    return (
            <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Description: {description}</p>
                <p>Skills: {skillOne} | {skillTwo} | {skillThree} </p>
                <button onClick={deletePet} value={name}>Adopt Pet</button>
            </div>
    );
};
export default PetDetails