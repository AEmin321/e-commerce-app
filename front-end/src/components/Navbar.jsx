import { AccountCircleOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styled from 'styled-components'
import { mobile } from '../responsive'


    const Container = styled.div`
      height:70px;
      ${mobile({ height: "50px" })}
    `
    const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 55px;
      ${mobile({ padding: "10px 0px" })}
    `

    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `

    const MenuItem = styled.div`
      font-size: 1rem;
      font-weight: 300;
      margin: 5px 10px;
      cursor: pointer;
      ${mobile({ fontSize: "14px"})}
    `

    const Middle = styled.div`
      flex: 1;
    `

    const SearchContainer = styled.div`
      display: flex;
      align-items: center;
      background-color: #fcf9f9;
      padding: 5px 7px;
      /* ${mobile({ width: "50px" })} */
    `

    const Input = styled.input`
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 14px;
      margin-right: 4px;
      flex: 1;
      ${mobile({ width: "85px" })}
    `

    const Left = styled.div`
      flex: 1;
    `

    const Logo = styled.h1`
      font-size: 25px;
      font-weight: 600;
    `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>W.</Logo>
        </Left>
        <Middle>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"#4E65FF", cursor:"pointer"}}/>
          </SearchContainer>
        </Middle>
        <Right>
          <MenuItem><AccountCircleOutlined color="action"/></MenuItem>
          <MenuItem><FavoriteBorderOutlined color="action"/></MenuItem>
          <MenuItem>
            <Badge badgeContent={99} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar