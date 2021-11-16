import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductList = (props) => {
  const {} = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

const deletefilter = (idFromBelow) =>{
  axios.delete('http://localhost:800/api/products/${idFromBelow}')
    .then((res=>{
      console.log(res.data);
      const newList = productList.filter((product, index)=> product._id !== idFromBelow);
      setProductList(newList);
  })
  .catch((err)=>{
    console.log(err);
  })
);

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product, index) => (

        <div className="form-div" key={index}>
          {" "}
          <Link to={`${product._id}`}>{product.title}</Link>
          <Link to={'/product/edit'}>Edit</Link>
          <buttin onClick={() => deletefilter(product._id)}>Delete</buttin>
        </div>
      ))
      }
    </div>
  );
};

export default ProductList;
