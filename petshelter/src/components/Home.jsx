import React from 'react';
import { Link } from "@reach/router";

const Home = (props) => {
    return (
        <div>
            <h4>{props.pet.name}</h4>
            <p>Type: {props.pet.type}</p>
            <p>Description: {props.pet.description}</p>
            <p>Skills: {props.pet.skillOne} | {props.pet.skillTwo} | {props.pet.skillThree}</p>
            
            <div>
                <Link to={"/update/" + props.pet._id} >Edit</Link>
                <Link to={"/" + props.pet._id}>Details</Link>
            </div>
        </div>
    );
}
export default Home;