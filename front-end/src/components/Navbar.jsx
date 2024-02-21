import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styled from 'styled-components'


    const Container = styled.div`
      height:60px;
    `
    const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
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
      display: flex;
      align-items: center;
      background-color: #f1f1f1;
      padding: 5px 7px;
      border-radius: 10px;
    `

    const Input = styled.input`
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 14px;
      margin-right: 4px;
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
            <Search style={{color:"#4E65FF", cursor:"pointer"}}/>
          </SearchContainer>
        </Middle>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOGIN</MenuItem>
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