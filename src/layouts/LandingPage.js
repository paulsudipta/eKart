import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { context } from "../contexts/ProductContext";
import BannerImage from "../assets/images/bannerImage.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  const { categoryList, categoryItem, setParameter, getItemDetails } =
    useContext(context);

  const navigate = useNavigate();

  useEffect(() => {}, [setParameter]);

  const handleItemClick = (itemId) => {
    getItemDetails(itemId);
    navigate("product");
  };

  return (
    <React.Fragment>
      <img src={BannerImage} alt="image" width="100%" height="400px" />
      <div className="title_div">High range of products</div>
      <div className="category_section">
        {categoryList.map((element, index) => (
          <Button
            variant="outlined"
            size="large"
            key={index}
            onClick={() => setParameter(element)}
          >
            {element}
          </Button>
        ))}
      </div>
      <div className="category_section">
        {categoryItem.map((element, i) => (
          <div
            onClick={() => {
              handleItemClick(element.id);
            }}
            key={i}
            className="item_list"
          >
            <img src={element.image} className="item_img" />
            <Typography>{element.title}</Typography>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
