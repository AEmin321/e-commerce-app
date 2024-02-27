import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width:100vw;
    background-color: #43a4e3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 30%;
`

const Title = styled.h1``

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Input = styled.input`
    padding: 7px 22px;
`

const Button = styled.button`
    padding: 7px 22px;
    border: none;
    outline: none;
`

const Link = styled.a`
    font-size: 1rem;
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