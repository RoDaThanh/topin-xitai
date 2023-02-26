import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const location = useLocation();
  const cateId = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/product-service/api/products?categoryId=${cateId}`);
        console.log(res);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  },[cateId]);

  if(products.length === 0){
    setProducts(popularProducts);
  }
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
