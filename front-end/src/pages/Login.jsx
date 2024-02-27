import styled from "styled-components"
import { footer } from "../responsive"

const Container = styled.div`
    height: 100vh;
    width:100vw;
    background-color: #43a4e3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 27%;
    padding: 36px;
    background-color: white;
    ${footer({width:"70%"})}
`

const Title = styled.h1`
    margin-bottom: 25px;
    font-weight: 500;
`

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px 22px;
    margin: 10px 0;
`

const Button = styled.button`
    padding: 10px 22px;
    border: none;
    outline: none;
    background-color: #1d1d1d;
    color: white;
    margin: 10px 0;
    cursor: pointer;
`

const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    margin-bottom: 10px;
    font-weight: 500;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <LoginForm>
                <Input type="text" placeHolder="Username"/>
                <Input type="text" placeHolder="Password"/>
                <Button>Login</Button>
                <Link>Forgot Your Password ?</Link>
                <Link>Create New Account</Link>
            </LoginForm>
        </Wrapper>
    </Container>
  )
}

export default Login