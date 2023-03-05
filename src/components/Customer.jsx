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
`;

const MenuContainer = styled.div`
  display: flex;
`;
const MenuItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-left: 25px;
  padding: 5px;
`;
const WrapperContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  width: 40%;
`;
const Form = styled.form`
 padding: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;
const Input = styled.input`
  flex: 8;
  min-width: 60%;
  height: 20px;
`;

const Label = styled.span`
  flex: 6;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  width: 50%;
`;
const Customer = () => {
  return (
    <Container img={image}>
      <MenuContainer>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Order</MenuItem>
      </MenuContainer>
      <WrapperContainer>
        <Wrapper>
          <Form>
            <InputContainer>
              <Label>User name</Label>
              <Input placeholder="userName" />
            </InputContainer>
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
              <Label>Phone Number</Label>
              <Input placeholder="Phone number" />
            </InputContainer>
            <InputContainer>
              <Label>Address</Label>
              <Input placeholder="address" />
            </InputContainer>
            <InputContainer>
              <Button>Update</Button>
            </InputContainer>
          </Form>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
};

export default Customer;
