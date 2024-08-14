import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const productsData = await fetch(`https://fakestoreapi.com/products`);
    let responseProducts = await productsData.json();
    setProducts(responseProducts);
  };



  return (
    <>
      {products.length > 0 ? (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3">
                <Link to={`/product/${product.id}`}style={{ textDecoration: 'none' }}>
                  <div className="card my-2 products_parent">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top products_img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h4 className="card-text">{product.category}</h4>
                      <h2 className="card-text">${product.price}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
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

export default Products;