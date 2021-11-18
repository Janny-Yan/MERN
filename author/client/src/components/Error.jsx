import React from 'react';
import {Link} from '@reacg/router';

const Error = (props)=> {

    return(
        <div>
            <div>
                <p>We're sorry, we could not find what you were looking for. Would you like to add another author to our database?</p>
                <Link to={"/new"}>Add an Author</Link>
            </div>
        </div>
    )
}
export default Error;