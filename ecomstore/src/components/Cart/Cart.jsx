import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { remoeFromCart } from "../../redux/productAction/ProductAction";

const Cart = () => {
  const cart_data = useSelector((state) => state.productData.cartData);
  //   console.log(cart_data);

  const dispatch = useDispatch();

  const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
    return prevsValue + currentValue.price;
  }, 0);

  return (
    <>
      <h2 className="text-center">Cart Page</h2>
      {cart_data && cart_data.length > 0 && (
        <div>
          <p className="text-center">Total Price: ${totalPrice}</p>
        </div>
      )}
      
      {cart_data && cart_data.length > 0 ? (
        cart_data.map((product) => (
          <div className="row border ">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid  cart_img"
                alt="img"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-3">{product.title}</h4>
              <h4 className="pt-3">{product.category}</h4>
              <p className="pt-3"><h4>Description:</h4>
              {product.description}</p>
            </div>
            <div className="col-md-2">
              <div className=""> Price: ${product.price}</div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(remoeFromCart(product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center">Cart is empty</h2>
      )}
    </>
  );
};

export default Cart;