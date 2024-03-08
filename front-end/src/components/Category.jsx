import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex: 1;
    margin: 3px 1.4rem;
    height: 90vh;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "45vh" })}
`

const InfoContainer = styled.div`
`

const Title = styled.h1`
    margin: 20px 0 10px 0;
    font-weight: 600;
    font-size: 1.25rem;
`

const Description = styled.p`
    color: #2e2e2e;
    line-height: 22px;
`

const Button = styled.button`
    margin-top: 1rem;
    font-size: 1rem;
    border: none;
    margin-left: 0;
    padding-left: 0;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    transition: color 0.3s;

    &::before {
        content: '';
        position: absolute;
        width: 90%;
        height: 1px;
        background-color: black;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
    }

    &:hover::before {
        width: 0;
    }
`

const Category = ({category}) => {
  return (
    <Container>
        <Image src={category.img} alt="category image" />
        <InfoContainer>
            <Title>{category.name}</Title>
            <Description>{category.description}</Description>
            <Button>Explore</Button>
        </InfoContainer>
    </Container>
  )
}

export default Category