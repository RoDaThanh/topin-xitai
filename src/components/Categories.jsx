import React from 'react'
import { categories } from './../data';
import Category from './Category';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from './../api/categoryApi';

const Container = styled.div`
  display: flex ;
  align-items: center;
`;

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await categoryApi.getAllCategories();
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