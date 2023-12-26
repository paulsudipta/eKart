import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { context } from "../contexts/ProductContext";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { categoryDetails } = useContext(context);
  const { id } = useParams();
  const { addToCart } = useCart();

  const { title, description, image } = categoryDetails;

  const handleAddCart = () => {
    const item = {
      id,
      name: title,
      description: description,
    };
    addToCart(item);
  };

  return (
    <div className="details_body">
      <img src={image} alt="Image" className="details_img" />
      <div className="product_details">
        <div className="text_title"> {title}</div>
        <div className="test_description">{description}</div>
        <Button variant="outlined" size="large" onClick={handleAddCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
