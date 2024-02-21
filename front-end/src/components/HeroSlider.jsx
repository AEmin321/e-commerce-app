import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: red;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    right: ${props=>props.direction==='right' && '10px'};
    left: ${props=>props.direction==='left' && '10px'};
`

const HeroSlider = () => {
  return (
    <Container>
        <Arrow direction={'left'}>
            <ArrowBackIos />
        </Arrow>
        <Arrow direction={'right'}>
            <ArrowForwardIos />
        </Arrow>
    </Container>
  )
}

export default HeroSlider