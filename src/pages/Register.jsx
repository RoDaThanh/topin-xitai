import React from "react";
import styled from "styled-components";
import image from "../essestial/imgs/áo-thun-Unisex-màu-trắng-in-chữ-unsual-original-1.jpg";

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.img});
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 40%;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
`;

const Register = () => {
  return (
    <Container img={image}>
      <Wrapper>
        <Title>Create an account</Title>

        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email address" />
          <Input placeholder="userName" />
          <Input placeholder="password" />
          <Input placeholder="Confirm password" />
          <Button> Create account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
