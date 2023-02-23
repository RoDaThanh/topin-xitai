import React from 'react'
import { categories } from './../data';
import Category from './Category';
import styled from 'styled-components';

const Container = styled.div`
  display: flex ;
  align-items: center;
`;

const Categories = () => {

  return (
    <Container>
        {categories.map((item) => 
        <Category item={item} key={item.id}/>
        )}
    </Container>
  )
}

export default Categories