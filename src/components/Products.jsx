import {React,  useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import productApi from './../api/productApi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 24;
  text-transform: uppercase;
`;

const Products = () => {
  const location = useLocation();
  const cateId = location.pathname.split("/")[3];
  const cateName = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const params = {
          categoryId: cateId,
        }
        const res = await productApi.getAllProducts(params);
        console.log(res);
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cateId]);

  if (products.length === 0) {
    setProducts(popularProducts);
  }
  return (
    <Container>
      <Title>{cateName}</Title>
      <ProductsContainer>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Products;
