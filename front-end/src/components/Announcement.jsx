import styled from 'styled-components'

const Container = styled.div`
    min-height: 30px;
    background: #1d1d1d;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 11px;
    text-align: center;
`

const Announcement = () => {
  return (
    <Container>Welcome to Hat Meow! Purr-fect Hats for Fabulous Felines! Shop Now and Let Your Cats Style Shine!</Container>
  )
}

export default Announcement