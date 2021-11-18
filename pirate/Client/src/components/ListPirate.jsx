import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const PirateList = (props) => {
    const {
    hasBeenSubmittedDummy,
    setHasBeenSubmittedDummy,
    handleDeletePirate,
    } = props;
    const [pirates, setPirates] = useState([]);
    useEffect(() => {
    axios
        .get("http://localhost:8000/api/pirates")
        .then((response) => {
        console.log(response.data);
        setPirates(response.data);
        })
        .catch((err) => console.log(err));
}, [hasBeenSubmittedDummy]);

    const localHandleDeletePirate = (id) => {
    handleDeletePirate(id);
    setHasBeenSubmittedDummy(!hasBeenSubmittedDummy);
};

return (
    <>
    <h1>All Crew Memebers</h1>
    {pirates.map((pirate, index) => (
        <div className="form-div" key={index}>
            {" "}
            <Link to={`${pirate._id}`}>{pirate.name}</Link>
            <button onClick={() => localHandleDeletePirate(pirate._id)}>
            Walk the Plank
            </button>
        </div>
    ))}
    </>
    );
};

export default PirateList;