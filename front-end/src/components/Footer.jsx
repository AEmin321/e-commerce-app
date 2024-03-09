import styled from "styled-components"
import { mobile, smMobile } from "../responsive"

const Container = styled.div`
    padding: 2rem 4.3rem;
    ${mobile({padding:"1rem 2rem"})}
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BrandInfo = styled.div`
    flex: 2;
`

const Logo = styled.div`
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 800;

    ${smMobile({fontSize:"1.6rem"})}
`

const Title = styled.h5`
    margin-bottom: 17px;
`

const Email = styled.p`
    margin: 5px 0;
    font-size: 1.3rem;
`

const Categories = styled.div`
    flex: 1;
    ${mobile({ margin:"0 10px"})}
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
`

const ListItem = styled.li`
    margin: 10px 0;
`

const About = styled.div`
    flex: 1;
`

// const News = styled.div`
//     flex: 1;
//     ${mobile({ display:"none"})}
// `

const LinksContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;
`

const Text = styled.p`
    padding: 7px;
    font-size: 14px;
    color: #353535;
`

const TermsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Footer = () => {
  return (
    <Container>
        <InfoContainer>
            <BrandInfo>
                <Logo>MEWOW-HATS</Logo>
                <Title>EMAIL</Title>
                <Email>HAmini@me-wow.com</Email>
            </BrandInfo>
            <Categories>
                <Title>CATEGORIES</Title>
                <List>
                    <ListItem>Sun Hats</ListItem>
                    <ListItem>Winter Hats</ListItem>
                    <ListItem>Fedoras</ListItem>
                    <ListItem>More</ListItem>
                </List>
            </Categories>
            <About>
                <Title>ABOUT</Title>
                <List>
                    <ListItem>Mission</ListItem>
                    <ListItem>History</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </About>
            {/* <News>
                <Title>NEWS</Title>
                <List>
                    <ListItem>New Products</ListItem>
                    <ListItem>Promotions and Sales</ListItem>
                    <ListItem>Events and Exibitions</ListItem>
                    <ListItem>Trending Products</ListItem>
                </List>
            </News> */}
        </InfoContainer>
        <LinksContainer>
            <Text>©2024 HAmini</Text>
            <TermsContainer>
                <Text>Terms of use</Text>
                <Text>Privacy Policy</Text>
            </TermsContainer>
        </LinksContainer>
    </Container>
  )
}

export default Footer