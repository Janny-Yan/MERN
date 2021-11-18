import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import "../App.css";

const PirateForm = (props)=>{
  const [errors, setErrors] = useState({});
  const [pirateName, setPirateName] = useState("");

  const newSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/pirates',
    {pirateName}
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
    <form onSubmit={newSubmitHandler}>
      <h1>Add a New Pirate!</h1>

      <label>Pirate's Name: </label>
      <input onChange={(e)=> setPirateName(e.target.value)}
      type="text"
      name="pirateName"
      value={pirateName}/>

      <button type="submit">Add</button>
      <button onClick={(e)=> navigate("/")}>Cancel</button>
    
    </form>
  </div>
)}

export default PirateForm