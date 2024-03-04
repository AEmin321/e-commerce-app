import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mdMobile, smMobile } from "../responsive"


const Container = styled.div`
`

const CartWrapper = styled.div`
  padding: 17px;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;

  ${smMobile({display:"none"})}
`

const Button = styled.button`
  padding: 12px 22px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;
`

const Title = styled.h1`
`

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mdMobile({flexDirection:"column"})}
`

const Products = styled.div`
  flex: 3;
  margin: 0 12px;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0;

  ${smMobile({flexDirection:"column"})}
`

const Hr = styled.hr``

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`

const Img = styled.img`
  width: 200px;
`

const Info = styled.div`
  padding: 10px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color};
`

const ProductSize = styled.p``

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${smMobile({flexDirection:"row",justifyContent:"space-between"})}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${smMobile({alignItems:"center",marginBottom:"0"})}
`

const Amount = styled.span`
  font-size: 24px;
  margin: 7px;
`

const Price = styled.div`
  font-size: 35px;
  font-weight: 200;
`

const Summary = styled.div`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 22px;
  height: 52vh;
  margin: 15px;
`

const SummaryTitle = styled.h4`
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 32px;
  text-align: center;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 22px 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const CheckoutBtn = styled.button`
  padding: 15px 22px;
  width: 100%;
  border: none;
  background-color: #43a4e3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <CartWrapper>
          <HeadingContainer>
            <Button>Continue shopping</Button>
            <Title>SHOPPING CART</Title>
            <Button>Go to Payment</Button>
          </HeadingContainer>
          <ProductsContainer>
            <Products>
              <Product>
                <ProductDetails>
                  <Img src="https://cdn.leonardo.ai/users/22c10e36-2d54-496e-9e6d-134b62eeef09/generations/23e84df4-804b-4b85-9817-dd1cc09b1ff6/Default_A_unique_and_visually_descriptive_prompt_that_showcase_2.jpg" />
                  <Info>
                    <ProductName><b>Product:</b> this is the product name</ProductName>
                    <ProductId><b>Id:</b> sample id number</ProductId>
                    <ProductSize><b>Size:</b>33.342</ProductSize>
                    <ProductColor color="orange" />
                  </Info>
                </ProductDetails>
                <PriceDetails>
                  <AmountContainer>
                    <Add />
                    <Amount>2</Amount>
                    <Remove />
                  </AmountContainer>
                  <Price>$80</Price>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetails>
                  <Img src="https://cdn.leonardo.ai/users/22c10e36-2d54-496e-9e6d-134b62eeef09/generations/0aa03166-7b4f-4c85-a98b-a7654e0a3d29/Default_A_unique_and_visually_descriptive_prompt_that_showcase_3.jpg" />
                  <Info>
                    <ProductName><b>Product:</b> this is the product name</ProductName>
                    <ProductId><b>Id:</b> sample id number</ProductId>
                    <ProductSize><b>Size:</b>33.342</ProductSize>
                    <ProductColor color="orange" />
                  </Info>
                </ProductDetails>
                <PriceDetails>
                  <AmountContainer>
                    <Add />
                    <Amount>2</Amount>
                    <Remove />
                  </AmountContainer>
                  <Price>$80</Price>
                </PriceDetails>
              </Product>
              <Hr/>
              <Product>
                <ProductDetails>
                  <Img src="https://cdn.leonardo.ai/users/22c10e36-2d54-496e-9e6d-134b62eeef09/generations/23e84df4-804b-4b85-9817-dd1cc09b1ff6/Default_A_unique_and_visually_descriptive_prompt_that_showcase_2.jpg" />
                  <Info>
                    <ProductName><b>Product:</b> this is the product name</ProductName>
                    <ProductId><b>Id:</b> sample id number</ProductId>
                    <ProductSize><b>Size:</b>33.342</ProductSize>
                    <ProductColor color="orange" />
                  </Info>
                </ProductDetails>
                <PriceDetails>
                  <AmountContainer>
                    <Add />
                    <Amount>2</Amount>
                    <Remove />
                  </AmountContainer>
                  <Price>$80</Price>
                </PriceDetails>
              </Product>
            </Products>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$8</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>- $8</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <CheckoutBtn>CHECKOUT NOW</CheckoutBtn>
            </Summary>
          </ProductsContainer>
        </CartWrapper>
        <Footer />
    </Container>
  )
}

export default Cart