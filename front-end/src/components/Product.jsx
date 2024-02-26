import { FavoriteBorderOutlined, ReadMoreOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Links = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    align-items: center;
    background-color: rgba(0, 110, 255, 0.2);
    z-index: 3;
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    min-width: 280px;
    /* height: 300px; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${Links}{
        opacity: 1;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
`

const Icon = styled.div`
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
    margin: 7px;

    &:hover {
        background-color: #ffffff;
        transform: scale(1.1);
    }
`

const Product = ({product}) => {
  return (
    <Container>
        <Image src={product.img} alt="popular product image" />
        <Links>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            <Icon>
                <ReadMoreOutlined />
            </Icon>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
        </Links>
    </Container>
  )
}

export default Product