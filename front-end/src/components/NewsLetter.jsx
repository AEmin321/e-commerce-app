import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    margin: 4rem 0;
    height: 65vh;
    color: white;
    background-color: #43a4e3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

const Info = styled.h6`
    margin-bottom: 0.8rem;
`

const Title = styled.h1`
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 2.3rem;
    margin-bottom: 3rem;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    ${mobile({ width:"80%"})}
`

const Input = styled.input`
    flex: 5;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0 16px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #1d1d1d;
    cursor: pointer;
`

const NewsLetter = () => {
  return (
    <Container>
        <Info>NEWSLETTER</Info>
        <Title>SUBSCRIBE TO OUR <br />NEWSLETTER</Title>
        <InputContainer>
            <Input placeholder="Your e-mail address"/>
            <Button>
                <Send style={{ color: 'white' }}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter