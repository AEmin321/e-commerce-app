import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background: linear-gradient(45deg, hsla(232, 100%, 65%, 1) 0%, hsla(188, 96%, 78%, 1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const Announcement = () => {
  return (
    <Container>* This will be the text on announcment bar above</Container>
    
  )
}

export default Announcement