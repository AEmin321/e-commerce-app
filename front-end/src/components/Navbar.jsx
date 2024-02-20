import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import styled from "styled-components"


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
      justify-content: flex-end;
    `

    const MenuItem = styled.div`
      font-size: 1rem;
      font-weight: 300;
      margin: 5px 10px;
      cursor: pointer;
    `

    const Middle = styled.div`
      flex: 1;
    `

    const SearchContainer = styled.div`
      border: 1px solid lightgray;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 6px;
    `

    const Input = styled.input`
      border: none;
      outline: none;
      background-color: transparent;
      flex: 1;
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
            <Input />
            <Search style={{color:"gray" , cursor:"pointer"}}/>
          </SearchContainer>
        </Middle>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={99} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar