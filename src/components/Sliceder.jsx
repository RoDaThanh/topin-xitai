import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { slicederItems } from "../data";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #dadada;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  opacity: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  position: absolute;
  margin-right: 30px;
  z-index: 2;
  transition: all 0.5s ease;

  &:hover {
    background-color: #c7eeee;
    transform: scale(1.1);
  }
`;

const Wapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.index * -100}vw);
`;
const Slice = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
 
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 500;
    margin: 50px 0px;
`;
const Button = styled.button`
  border: transparent;
  padding:10px;
  font-size: 20px;
  cursor: pointer;
 
`;

const Sliceder = () => {
    const [sliceIndex, setSliceIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSliceIndex(sliceIndex > 0 ? sliceIndex - 1 : 2);
            console.log(sliceIndex);
        } else {
            setSliceIndex(sliceIndex < 2 ? sliceIndex + 1 : 0);
            console.log(sliceIndex);
        }
    
    }
   

  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowLeft style={{fontSize:"40px"}}/>
      </Arrow>
      <Wapper index={sliceIndex}>
        {slicederItems.map((item) => ( 
          <Slice bg={item.bg}>
            <ImageContainer>
              <Image src={item.img}></Image>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slice>
        ))}
      </Wapper>

      <Arrow direction="right" onClick={()=> handleClick("left")}>
        <ArrowRight style={{fontSize:"40px"}} />
      </Arrow>
    </Container>
  );
};

export default Sliceder;
