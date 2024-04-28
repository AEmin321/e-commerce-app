import { FavoriteBorderOutlined } from "@mui/icons-material"
import styled from "styled-components"
import LazyLoad from "react-lazy-load"

const Container = styled.div`
    position: relative;
    cursor: pointer;
`
const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
`

const Image = styled.img`
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
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
        <ImageContainer>
            <LazyLoad>
                <Image src={product.img} alt="popular product image" />
            </LazyLoad>
        </ImageContainer>
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