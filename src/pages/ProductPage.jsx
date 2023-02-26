import React ,{ useState, useEffect }from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {useLocation} from  "react-router-dom";
import { popularProducts } from "../data";
import productApi from './../api/productApi';

const Container = styled.div``;
const Wapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 70vh;
  object-fit: cover;
`;

const InforContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  padding: 15px;
  color: white;
  cursor: pointer;
`;


const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await productApi.getProduct(id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  },[id]);

  //Mock data
  if(Object.is(product, null)){
    setProduct(popularProducts.find(product => product.id === id));
  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wapper>
      
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InforContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
            <Button>BUY NOW</Button>
          </AddContainer>
        </InforContainer>
      </Wapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
