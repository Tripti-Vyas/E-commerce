import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
// import './rating.css';

function SingleProduct() {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  

  return (
    <div class="row g-0 text-center">
      <div class="col-sm-6 col-md-8">
        <img src={state?.product?.image} class="card-img-top" style={
          {
          width: '40rem',
    height: '28rem',
    marginTop : '2rem',
    marginBottom: '2rem'
          
          }} alt="..." />
      </div>
      <div class="col-6 col-md-4">
        <div className="card" style={{
          width:'fit-content',
          blockSize:'fit-content',
          height: '31rem',
          marginTop: '2rem',
          
           
            }}>
          {/* <img src={state?.product?.image} class="card-img-top" alt="..." /> */}
          {/* <label>{PRODUCTID}</label> */}
          <div className="card-body">
            
            <h3 class="card-title">{state?.product?.title}</h3>
            <p className="card-text d-flex flex-column">Category: {state?.product?.category}</p>
            <hr/>
             <h4> <sup>Rs</sup> {state?.product?.price}</h4>
            <p>Inclusive of all taxes</p>
            <hr/>
            <p className="card-text d-flex flex-column">{state?.product?.description}</p>
            <p className="card-text "> {state?.product?.rating?.rate} ratings</p>
            
            
          </div>
        </div>
      </div>
    </div>

    // <div class="card" style={{ width: "20rem", margin:'auto' }}>
    //   <img src={state?.product?.image} class="card-img-top" alt="..." />
    //   {/* <label>{PRODUCTID}</label> */}
    //   <div class="card-body">
    //     <h5 class="card-title">{state?.product?.title}</h5>
    //     <p class="card-text">{state?.product?.description}</p>
    //   </div>
    // </div>
  );
}

export default SingleProduct;
