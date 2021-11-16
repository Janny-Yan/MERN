import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const AllProducts = (props=>{
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <div>
            <header>
                <h1>All Products here!</h1>
                <Link to={"/new"}> Add new Product </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Title:</th>
                            <th>Price:</th>
                            <th>Description:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList?
                            productList.map((product, index)=>(
                                <tr key={index}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))
                            :null
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
})
export default AllProducts;
