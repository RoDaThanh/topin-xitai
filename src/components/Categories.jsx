import React from 'react'
import { categories } from './../data';
import Category from './Category';
import styled from 'styled-components';
import { useState } from 'react';
import axios  from 'axios';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex ;
  align-items: center;
`;

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8080/product-service/api/categories");
        console.log(res);
        setCategoryList(res.data);
      } catch (error) {}
    };
    getCategories()
  },[]);

  if(categoryList.length === 0){
    setCategoryList(categories);
  }

  return (
    <Container>
        {categoryList.map((item) => 
        <Category item={item} key={item.id}/>
        )}
    </Container>
  )
}

export default Categories