import styled from "styled-components";
import { smMobile } from "../responsive";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

const Container = styled.div`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroInfo = styled.div`
  position: absolute;
  color: white;
  /* width: 700px; */
  bottom: 0;
  left: 0;
  padding: 3.75rem;

  ${smMobile({
    bottom: "1rem",
    left: "1rem",
    padding: "1.5rem",
    // width: "500px",
  })}
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;

const Description = styled.p`
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  padding: 1.2rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const HeroSection = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <HeroWrapper>
        <Img
          src="https://cdn.leonardo.ai/users/7bc1faa4-27be-45aa-a3c6-99ceb897b624/generations/b2560b1f-a0f2-4994-bc4d-85601a758f61/Default_A_sleek_and_sophisticated_cat_in_a_hat_rendered_in_a_m_1.jpg"
          alit="image of a cat bg"
        />
        <HeroInfo>
          <Title>Hats That Make Your Cat Say Me-Wow!</Title>
          <Description>
            <em>
              Meow-tastic hats for cats who love to stand out! Explore our
              selection and <br />
              let your furry friend express their inner fashionista!
            </em>
          </Description>
          <Button>FIND OUT MORE</Button>
        </HeroInfo>
      </HeroWrapper>
    </Container>
  );
};

export default HeroSection;
