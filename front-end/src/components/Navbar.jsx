import { Search, ShoppingCart } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import styled from "styled-components"




const Navbar = () => {
    const Container = styled.div`
      height:60px;
    `
    const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
    `

    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
    `

    const MenuItem = styled.div`
      font-size: 16px;
      font-weight: 500;
      margin: 5px;
    `

    const Middle = styled.div`
      flex: 1;
    `

    const SearchContainer = styled.div`
      border: 1px solid lightgray;
      border-radius: 3px;
      display: flex;
      align-items: center;
      padding: 5px;
    `

    const Input = styled.input`
      border: none;
      outline: none;
      flex: 1;
    `

    const Left = styled.div`
      flex: 1;
    `

    const Logo = styled.h1`
      font-size: 35px;
      font-weight: 800;
    `

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>W.</Logo>
        </Left>
        <Middle>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Middle>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar