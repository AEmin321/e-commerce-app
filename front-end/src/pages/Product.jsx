import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px 50px 0 50px;
`

const ImageContainer = styled.div`
  flex: 1;
`

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 42px;
`

const Description = styled.p`
  margin: 25px 0;
  letter-spacing: 1.7px;
  font-size: 14px;
`

const Price = styled.span`
  font-weight: 300;
  font-size: 45px;
`

const PrefsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`

const Pref = styled.div`
  display:flex;
  margin: 11px 0;
  align-items: center;
`

const PrefTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const PrefColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color};
  cursor: pointer;
  margin: 0 7px;

  &:active {
    outline: 1px solid blue;
  }
`

const SizeSelect = styled.select`
  margin-left: 10px;
  padding: 5px ;
`

const PrefSize = styled.option``

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 12px 0;
`

const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #43a4e3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 7px;
`

const Button = styled.button`
  padding: 16px 28px;
  margin-top: 10px;
  background-color: #43a4e3;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border: none;

  &:hover{
    border: 2px solid #43a4e3;
    background-color: white;
    color: #43a4e3;
  }
`



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Img src="https://cdn.leonardo.ai/users/22c10e36-2d54-496e-9e6d-134b62eeef09/generations/23e84df4-804b-4b85-9817-dd1cc09b1ff6/Default_A_unique_and_visually_descriptive_prompt_that_showcase_2.jpg" alt="product image" />
        </ImageContainer>
        <InfoContainer>
          <Title>WhiskerWonder Bowler Hat</Title>
          <Description>Introducing our WhiskerWonder Bowler Hat, the epitome of feline elegance and sophistication! Crafted with the finest materials and designed with your cat's comfort in mind, this charming bowler hat will make your furry friend the talk of the town. Whether attending a formal event or simply lounging at home, your cat will exude style and charm with every whisker twitch. Treat your beloved pet to a touch of class with our WhiskerWonder Bowler Hat today!</Description>
          <Price>$20</Price>
          <PrefsContainer>
            <Pref>
              <PrefTitle>Select Color</PrefTitle>
              <PrefColor color="red"/>
              <PrefColor color="blue"/>
              <PrefColor color="white"/>
            </Pref>
            <Pref>
              <PrefTitle>Select Size</PrefTitle>
              <SizeSelect>
                <PrefSize>L</PrefSize>
                <PrefSize>XL</PrefSize>
                <PrefSize>M</PrefSize>
                <PrefSize>S</PrefSize>
              </SizeSelect>
            </Pref>
            <AddContainer>
              <QuantityContainer>
                <Add />
                <Quantity>1</Quantity>
                <Remove />
              </QuantityContainer>
              <Button>Add To Cart</Button>
            </AddContainer>
          </PrefsContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product