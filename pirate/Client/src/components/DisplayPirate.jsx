import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayPirate = (props) => {
    const { _id, handleDeletePirate } = props;
    const [pirateInfo, setPirateInfo] = useState({});
        useEffect(() => {
    axios
        .get(`http://localhost:8000/api/pirates/${_id}`)
        .then((response) => {
        console.log(response.data);
        setPirateInfo(response.data);
    })
        .catch((err) => console.log(err));
    }, [_id]);
return (
    <div>
        <h2>{pirateInfo.name}</h2>
        <button onClick={() => handleDeletePirate(pirateInfo._id)}>
        Walk the Plank
        </button>
    </div>
    );
};

export default DisplayPirate;