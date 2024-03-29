import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-shadow: 3em;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: 600;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <a href={`/products/${item.name}/${item.id}`}>
        <Image src={item.img} />
        <InfoContainer>
          <Title>{item.name}</Title>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </a>
    </Container>
  );
};

export default Category;
