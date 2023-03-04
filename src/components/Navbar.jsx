import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: #fcf5f5;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  padding: 5px;
`;

const Navbar = () => {
  let navigate = useNavigate();
  function goToHomePage() {
    navigate("/home");
  }
  function goToLoginPage() {
    navigate("/login");
  }
  function goToRegisterPage() {
    navigate("/register");
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={goToHomePage}> TooPin XiTai</Logo>
        </Center>
        <Right>
          <MenuItem onClick={goToRegisterPage}>REGISTER</MenuItem>
          <MenuItem onClick={goToLoginPage}>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
