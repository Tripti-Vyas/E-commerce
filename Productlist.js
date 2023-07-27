import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useNavigate } from "react-router-dom";
// import '../style.css';

function Productlist({ products, AddToCartHandler }) {
  const [PRODUCT, setPRODUCT] = useState({});
  const navigate = useNavigate();
  const handleProduct = (value) => {
    setPRODUCT(value);
    navigate("/singleproductpage", { state: { product: value } });
  };

  return (
    <div>
      <h1 className="text-center">Shopsy</h1>
      <div className="container-fluid mt-5 ">
        <div className="row flex-grid text-center">
          {products.map((product, productid) => {
            return (
              <div className="col-10 col-md-4 d-flex mt-5">
                <div class="card" style={{ width: "18rem" }} >
                  <img
                    className="image"
                    style={{ height: "10rem", cursor: "pointer" }}
                    src={product.image}
                    class="card-img-top"
                    alt="..."
                    onClick={() => {
                      handleProduct(product);
                    }}
                  />

                  <label>{productid}</label>

                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p>Rs:{product.price}/-</p>
                    {/* <p class="card-text">{product.description}</p> */}
                    <button
                      class="btn btn-primary"
                      onClick={() => AddToCartHandler(product)}
                    >
                      add to cart
                    </button>
                    <button
                      style={{ marginLeft: "1rem" }}
                      class="btn btn-primary"
                      onClick={() => alert("your order is placed successfully")}
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Productlist;
