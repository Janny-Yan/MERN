import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const CreatePet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")
    const [errors, setErrors] = useState({});

    const newPet = (e) => {
        e.preventDefault();
        const pets = { name, type, description, skillOne, skillTwo, skillThree };
        axios.post("http://localhost:8000/api/pets/new", pets)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }
    return (
                <form onSubmit={newPet}>
                <p>Name: </p>
                    <input type="text" onChange={e => setName(e.target.value)}></input>
                    {errors.name ? <p>{errors.name.properties.message}</p> : ""}
                <p>Type: </p>
                    <input type="text" onChange={e => setType(e.target.value)}></input>
                    {errors.type ? <p>{errors.type.properties.message}</p> : ""}
                <p>Description: </p>
                    <textarea rows="4" columns="1" type="text" onChange={e => setDescription(e.target.value)} ></textarea>
                    {errors.description ? <p>{errors.description.properties.message}</p> : ""}
                <p>Skills: </p>
                    <div>
                        <input type=" text" onChange={e => setSkillOne(e.target.value)} value={skillOne}></input>
                        {errors.description ? <p>{errors.skillOne.properties.message}</p> : ""}
                    </div>
                    <div>
                        <input type=" text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}></input>
                    </div>
                    <div>
                        <input type=" text" onChange={e => setSkillThree(e.target.value)} value={skillThree}></input>
                    </div>
                    <div>
                    <Link to="/"><input type="submit" value="Add"></input></Link>
                    </div>
                </form>
    );
};
export default CreatePet;