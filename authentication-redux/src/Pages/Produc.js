import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product() {

  const navigate = useNavigate()
  const {tokan} = useSelector((state)=> state.authentication)

  useEffect(()=>{
    if(!tokan){
      navigate('/')
    }
  },[tokan])

  return (
    <div className="container">
    <h2>Our product is here</h2>
      <table className="table table-dark my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Samsung</td>
            <td>2</td>
            <td>15000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>micromax</td>
            <td>4</td>
            <td>20000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Realme</td>
            <td>5</td>
            <td>25000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
