import {
  Facebook,
  LocationOn,
  MailOutline,
  Phone,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const Descr = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3``;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`
const Payment = styled.img`
    
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TooPin XiTai</Logo>
        <Descr>This is description</Descr>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Work</ListItem>
          <ListItem>Thanh Dep Trai</ListItem>
          <ListItem>Thanh Try hard</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{marginRight:"10px"}}/>
           386 Nguyen Van Luong Street, Ward 17, Go Vap District, Ho Chi Minh
          City
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
           +84 363207888
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/>
           thanhdeptrai@gmail.com
        </ContactItem>
        <Payment src=""/>
      </Right>
    </Container>
  );
};

export default Footer;
