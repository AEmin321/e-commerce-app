import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 75vh;
    position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 2.5rem;
`

const Button = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    background-color: white;
`

const Category = ({category}) => {
  return (
    <Container>
        <Image src={category.img} alt="category image" />
        <InfoContainer>
            <Title>{category.name}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}

export default Category