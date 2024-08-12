import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/productAction/ProductAction";

const Product = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  // console.log(id);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await data.json();
    setProduct(res);
  };

  return (
    <>
      <h2 className="text-center">Product</h2>
      {Object.keys(product).length ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-2 border">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-2 border">
              <h2 className="pt-3 border">Title:{product.title}</h2>
              <div className="mt-3">
                <span className="bg-info text-light p-2">
                  Price:${product.price}
                </span>
                <p className="mt-3"><h4>Description:</h4>{product.description}</p>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-info px-3 py-2"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Product;

/*

useParams hook will returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
*/