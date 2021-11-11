import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkillOne(res.data.pet.skillOne)
                setSkillTwo(res.data.pet.skillTwo)
                setSkillThree(res.data.pet.skillThree)
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const updatePet = (e) => {
        e.preventDefault();
        const pets = { name, type, description, skillOne, skillTwo, skillThree };
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, pets)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }
    
    return (
                <form onSubmit={updatePet}>
                <p>Pet Name:</p>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} />
                    {errors.name ? <p>{errors.name.properties.message}</p> : ""}
                <p>Pet Type: </p>
                    <input type="text" onChange={e => setType(e.target.value)} value={type} />
                    {errors.type ? <p>{errors.type.properties.message}</p> : ""}
                <p>Pet Description: </p>
                    <textarea rows="4" columns="1" type="text" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                    {errors.description ? <p>{errors.description.properties.message}</p> : ""}
                <p>Pet Skills: </p>
                    <div>
                        <input type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne}></input>
                    </div>
                    <div>
                        <input type="text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}></input>
                    </div>
                    <div>
                        <input type="text" onChange={e => setSkillThree(e.target.value)} value={skillThree}></input>
                    </div>

                    <input type="submit" value="Update"></input>
                </form>
    );
}
export default EditPet;