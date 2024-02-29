import { LocationCityOutlined, Mail, SupportAgent } from "@mui/icons-material"
import styled from "styled-components"
import { mobile, smMobile } from "../responsive"

const Container = styled.div`
    padding: 2rem 4.3rem;
    color: #353535;
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

const News = styled.div`
    flex: 1;
    ${mobile({ display:"none"})}
`

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

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${smMobile({display:"none"})}
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 0 7px;
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
                <Logo>W.</Logo>
                <Title>EMAIL</Title>
                <Email>HAmini@me-wow.com</Email>
            </BrandInfo>
            <Categories>
                <Title>CATEGORIES</Title>
                <List>
                    <ListItem>Sun Hats</ListItem>
                    <ListItem>Winter Hats</ListItem>
                    <ListItem>Fedoras</ListItem>
                    <ListItem>firstone</ListItem>
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
            <News>
                <Title>NEWS</Title>
                <List>
                    <ListItem>New Products</ListItem>
                    <ListItem>Promotions and Sales</ListItem>
                    <ListItem>Events and Exibitions</ListItem>
                    <ListItem>thirdone</ListItem>
                </List>
            </News>
        </InfoContainer>
        <LinksContainer>
            <Text>©2024 HAmini</Text>
            <SocialIcons>
                <Icon>
                    <Mail style={{marginRight:"10px", color:"#353535"}}/>HAmini@me-wow.com
                </Icon>
                <Icon>
                    <SupportAgent style={{marginRight:"10px", color:"#353535"}}/>23234.234234.32
                </Icon>
                <Icon>
                    <LocationCityOutlined style={{marginRight:"10px", color:"#353535"}}/> unknown
                </Icon>
            </SocialIcons>
            <TermsContainer>
                <Text>Terms of use</Text>
                <Text>Privacy Policy</Text>
            </TermsContainer>
        </LinksContainer>
    </Container>
  )
}

export default Footer