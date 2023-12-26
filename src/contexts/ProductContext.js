import React, { createContext, useEffect, useState } from "react";

export const context = createContext();
const categoryUrl = "https://fakestoreapi.com/products/categories";

const ProductContext = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [parameter, setParameter] = useState("electronics");

  const categoryListData = async () => {
    try {
      const data = await fetch(categoryUrl);
      const fetchData = await data.json();
      setCategoryList(fetchData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    categoryListData();
  }, []);

  useEffect(() => {
    const categoryItemList = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${parameter}`
        );
        const data = await response.json();
        setCategoryItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    categoryItemList();
  }, [parameter]);

  const getItemDetails = async (itemId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${itemId}`
      );
      const data = await response.json();
      setCategoryDetails(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const contextValue = {
    categoryList,
    categoryItem,
    setParameter,
    categoryDetails,
    getItemDetails,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ProductContext;
