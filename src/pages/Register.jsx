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
const InputContainer = styled.div`
  flex: 1;
  min-width: 50%;
  margin-bottom: 20px;
`;
const Input = styled.input`
 display: flex;
 min-width: 50%;
 height: 20px;
`;

const Label = styled.span``;

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
          <InputContainer>
            <Label>First name</Label>
            <Input placeholder="First Name" />
          </InputContainer>
          <InputContainer>
            <Label>Last name</Label>
            <Input placeholder="Last Name" />
          </InputContainer>
          <InputContainer>
            <Label>Email addres</Label>
            <Input placeholder="Email address" />
          </InputContainer>
          <InputContainer>
            <Label>User name</Label>
            <Input placeholder="userName" />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input placeholder="password" />
          </InputContainer>
          <InputContainer>
            <Label>Confirm password</Label>
            <Input placeholder="Confirm password" />
          </InputContainer>

          <Button> Create account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
