import styled from "styled-components"
import { smMobile, mdMobile } from "../responsive"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #43a4e3;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    background-color: white;
    width: 30%;
    padding: 37px;
    ${smMobile({width:"70%"})}
    ${mdMobile({width:"65%"})}
`

const Title = styled.h1`
    margin-bottom: 25px;
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.p`
    font-size: 12px;
    margin: 12px 0;
`

const Button = styled.button`
    padding: 10px 22px;
    width: 100%;
    border: none;
    outline: none;
    background-color: #1d1d1d;
    color: white;
    cursor: pointer;
`

const SignUp = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create New Account</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Name" />
                <Input placeholder="Lastname" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />
                <Agreement>By creating an account, I consent to the processing of my personal
            data in accordance with the <a href="#">PRIVACY POLICY</a></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignUp