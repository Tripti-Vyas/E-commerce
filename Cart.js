import React from "react";
import { useState, useEffect } from "react";
// import '../style.css';

function Cart({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <>
     <div>
      <h1 className="text-center">YOUR CART</h1>
      <div className="container-fluid mt-5 ">
        <div className="row flex-grid text-center">
          {
            CART?.map((cartitem, cartindex)=>{
              return(
                <>
                <div className="col-10 col-md-4 d-flex mt-5">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    className="image"
                    style={{ height: "10rem", cursor: "pointer", 
                     }}
                    src={cartitem.image}
                    class="card-img-top"
                    alt="..."
                    // onClick={() => {
                    //   handleProduct(product);
                    // }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{cartitem.title}</h5>
                    <p>Rs:{cartitem.price}/-</p>
                    <button
                  className="btn btn-primary "
                  style={{ width: "5rem" }}
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>

                <h3>{cartitem.quantity}</h3>
                <button
                  className="btn btn-primary "
                  style={{ width: "5rem" }}
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
                  </div>
                </div>
              </div>
              </>
              )
            } 
          )
        }
        <hr />
      <div className="container-fluid ml-2">
        <h4>
          Total:
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}{" "}
          /-
        </h4>
      </div>
        </div>
      </div>
    </div>
</>
    )
          };
          
          
export default Cart;




    










//       <h1 className="text-center">Your Cart</h1>
//       {CART?.map((cartitem, cartindex) => {
//         return (
//           <>
//             <div
//               className="row "
//               style={{
//                 border: "2px solid black",
//                 width: "15rem",
//                 justifyContent: "center",
//                 marginLeft: "5rem",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <img src={cartitem.image} style={{ width: "6rem" }} />
//               <div className="d-flex flex-column">{cartitem.price}</div>
//               <div className="d-flex flex-column">{cartitem.title}</div>
//               <div className="d-flex text-center mt-1 mb-3">
//                 <hr />
//                 <button
//                   className="btn btn-primary "
//                   style={{ width: "5rem" }}
//                   onClick={() => {
//                     const _CART = CART.map((item, index) => {
//                       return cartindex === index
//                         ? {
//                             ...item,
//                             quantity: item.quantity > 0 ? item.quantity - 1 : 0,
//                           }
//                         : item;
//                     });
//                     setCART(_CART);
//                   }}
//                 >
//                   -
//                 </button>
//                 <h3>{cartitem.quantity}</h3>
//                 <button
//                   className="btn btn-primary "
//                   style={{ width: "5rem" }}
//                   onClick={() => {
//                     const _CART = CART.map((item, index) => {
//                       return cartindex === index
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item;
//                     });
//                     setCART(_CART);
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </>
//         );
//       })}
//       <hr />
//       <div className="container-fluid ml-2">
//         <h4>
//           Total:
//           {CART.map((item) => item.price * item.quantity).reduce(
//             (total, value) => total + value,
//             0
//           )}{" "}
//           /-
//         </h4>
//       </div>
//     </div>
//   );
// }

