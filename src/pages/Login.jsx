import React from 'react'
import image from "../essestial/imgs/áo-thun-Unisex-màu-trắng-in-chữ-unsual-original-1.jpg";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.img});

    background-size: cover;
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
  width: 25%;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: teal;
  color: white;
  border: none;
  width: 40%;
`;

const Login = () => {
    let navigate = useNavigate();
    function doLogin() {
        sessionStorage.setItem("isLogin",true);
        navigate("/");
    }

  return (
    <Container img={image}>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="userName" />
          <Input placeholder="password" />
          <Button onClick={doLogin}>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login