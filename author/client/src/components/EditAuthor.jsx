import React, {useEffect, useState} from 'react';
import{Link, navigate} from '@reach/router';
import axios from "axios";

const EditAuthor = (props=>{
    const [errors, setErrors] = useState({});
    const[authorName, setAuthorName] =- useState("");

    useEffect(()=>{
        axios.get(`http://localhost:800/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthorName(res.data.authorName);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    }, [id])

    const updateSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:800/api/authors/${id}`,
        {authorName}
        )
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }
    return(
    <div>
        <form onSubmit={updateSubmitHandler}>
            <header>
                <h1>Edit this Author</h1>
                <Link to={"/"}>Home</Link>
            </header>
            <label>Name: </label>
            <input onChnage={(e)=> setAuthorName(e.target.value)}
            type="text"
            name="authorName"
            value={authorName}/>
            {errors.authorName ? <span>{errors.authorName.message}</span> :null }
        </form>
    </div>
    )
})

export default EditAuthor;