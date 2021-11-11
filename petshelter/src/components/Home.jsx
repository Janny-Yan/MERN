import React from 'react';
import { Link } from "@reach/router";

const Home = (props) => {
    return (
        <div>
            <h4>{props.pets.name}</h4>
            <p>Type: {props.pets.type}</p>
            <p>Description: {props.pets.description}</p>
            <p>Skills: {props.pets.skillOne} | {props.pets.skillTwo} | {props.pets.skillThree}</p>
            
            <div>
                <Link to={"/update/" + props.pets._id} >Edit</Link>
                <Link to={"/" + props.pets._id}>Details</Link>
            </div>
        </div>
    );
}
export default Home;