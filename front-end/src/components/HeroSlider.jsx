import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import styled from "styled-components"
import { sliderData } from "../data"
import { useState } from "react"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    color: #1d1d1d;
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
    right: ${props=>props.direction==='next' && '10px'};
    left: ${props=>props.direction==='prev' && '10px'};
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #${props=>props.bg};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 55px;
    align-self: center;
    max-width: 100%;
`

const Minitext = styled.h6`
    margin-bottom: 17px;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 17px;
    letter-spacing: -2px;
`

const Description = styled.p`
    font-size: 13px;
    margin-bottom: 25px;
    letter-spacing: 1px;
`

const Button = styled.button`
    padding: 14px 20px;
    color: white;
    background-color: #43a4e3;
    border: none;
    font-size: 12px;
    cursor: pointer;
`

const HeroSlider = () => {
    const [slideIndex,setSlideIndex] = useState(0)

    const handleSlider = direction => {
        if (direction==='prev'){
            setSlideIndex(prevIndex=>prevIndex=== 0 ? sliderData.length - 1 : prevIndex - 1)
        }
        else if (direction==='next'){
            setSlideIndex(prevIndex=>prevIndex===sliderData.length - 1 ? 0 : prevIndex + 1)
        }
    }

    return (
        <Container>
            <Arrow direction={'prev'} onClick={()=>handleSlider('prev')}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>{sliderData.map(slide=>(
                <Slide key={slide.id} bg={slide.bg}>
                    <InfoContainer>
                        <Minitext>{slide.mini}</Minitext>
                        <Title>{slide.title}</Title>
                        <Description>{slide.description}</Description>
                        <Button>FIND OUT MORE</Button>
                    </InfoContainer>
                    <ImageContainer>
                        <Image src={slide.img} alt="Image of cat with a hat" />
                    </ImageContainer>
            </Slide>
            ))}
            </Wrapper>
            <Arrow direction={'next'} onClick={()=>handleSlider('next')}>
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
}

export default HeroSlider