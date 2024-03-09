import { FavoriteBorderOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    cursor: pointer;
`

const Image = styled.img`
    max-width: 100%;
    height: auto;
`

const InfoContainer = styled.div`
    padding: 12px 0;
`

const Title = styled.p`
`

const Price = styled.p`
    margin-top: 7px;
    font-weight: 500;
`

const Icon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
    margin: 7px;

    &:hover {
        color: red;
    }
`

const Product = ({product}) => {
  return (
    <Container>
        <Image src={product.img} alt="popular product image" />
        <InfoContainer>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            <Title>{product.title}</Title>
            <Price>{product.price}$</Price>
        </InfoContainer>
    </Container>
  )
}

export default Product