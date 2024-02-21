import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background: linear-gradient(45deg, hsla(232, 100%, 65%, 1) 0%, hsla(188, 96%, 78%, 1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
`

const Announcement = () => {
  return (
    <Container>Welcome to Hat Meow! Purr-fect Hats for Fabulous Felines! Shop Now and Let Your Cats Style Shine!</Container>
  )
}

export default Announcement