import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    margin: 4rem 0;
`

const Info = styled.h5`
    color: #43a4e3;
    margin-bottom: 0.8rem;
`

const Name = styled.h1`
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 2.3rem;
`

const SectionHeading = ({name,info}) => {
  return (
    <Container>
        <Info>{info}</Info>
        <Name>{name}</Name>
    </Container>
  )
}

export default SectionHeading