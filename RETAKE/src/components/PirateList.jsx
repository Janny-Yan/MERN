import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AllPirates = (props) => {

  const [pirateList, setPirateList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then((response) => {
        console.log(response.data);
        setPirateList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (idFromBelow) => {
    axios.delete('http://localhost:8000/api/pirates/${_id}')
    .then((res)=>{
      console.log(res.data);
      setPirateList(pirateList.filter((pirate)=> pirate._id !== idFromBelow))
    })
    .catch((err=>{
      console.log(err);
    }))
  }

  return (
    <div>
      <h1>All Crew Memebers</h1>
      <Link to="/new"><button>Add new Pirate</button></Link>

      {pirateList?
      
      pirateList.map((pirate, index) => (
        <tr key={index}>
          <td>{pirate.pirateName}</td>
          <td>
          <button onClick={() => deleteHandler(pirate._id)}>
            Walk The Plank
          </button>
          </td>
        </tr>
      ))
      :null
      }
    </div>
  );
};

export default AllPirates;

