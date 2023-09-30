import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Product.style.scss";
import image from "../../Images/81xvE1EG6dL.jpeg";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProduct(id);
      if (json.error !== null) {
        setMessage(json.error);
        return;
      }

      setProduct(json.data.product);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="product-page">
        {message && <p>{message}</p>}
        {product && (
          <>
            <div className="product-page__product">
              <div className="product-page__img">
                <img src = {image}></img>
              </div>
              
              <h3>Title: {product.title}</h3>
              <p>ID: {id} </p>
              <p>Description: {"Loren Ispum Loren Ispum Loren Ispum Loren Ispum Loren Ispum Loren Ispum Loren Ispum Loren Ispum"}</p>
            </div>
            <Link to={`/checkout/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </>
        )}
      </div>
    </Page>
  );
}

export default Product;
