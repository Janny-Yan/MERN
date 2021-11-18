import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const PirateForm = (props) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    const newPirateData = {
        name,
    };
    axios
        .post("http://localhost:8000/api/pirates", newPirateData)
        .then((response) => {
        console.log(response);
        setName("");
    })
        .catch((err) => console.log(err));
    };
return (
    <form onSubmit={handleSubmit}>
        <h2>Add a Pirate!</h2>
        <div className="form-div">
        Name:{" "}
        <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={title}
        />
        </div>
        <button type="submit">Add</button>
    </form>
    );
};

export default PirateForm;