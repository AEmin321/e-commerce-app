import {Close, FavoriteBorderOutlined, LocalMallOutlined, Person3Outlined, Search} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styled from 'styled-components'
import { mobile, smMobile } from '../responsive'
import { useState } from 'react'


    const Container = styled.div`
    `
    const Wrapper = styled.div`
      height:70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 55px;
      ${mobile({ padding: "10px 7px",height: "50px"})}
    `

    const InputContainer = styled.div`
      height: 49px;
      padding: 10px 55px;
      border-top:1px solid rgba(66, 66, 66, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;

      transition: height 0.5s ease;
    `

    const CloseButton = styled.div`
      cursor: pointer;
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
      text-align: center;
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
      flex: auto;
    `

    const Logo = styled.h1`
      font-size: 25px;
      font-weight: 700;
      ${smMobile({fontSize:"17px"})}
    `

const Navbar = () => {
  const [isSearchOpen,setSearchOpen] = useState(false)

  const handleToggle = () => {
    setSearchOpen(!isSearchOpen)
  }

  const handleClose = () => {
    setSearchOpen(false)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Search onClick={handleToggle} color="action" style={{cursor:"pointer"}}/>
        </Left>
        <Middle>
          <Logo>MEWOW-HATS</Logo>
        </Middle>
        <Right>
          <MenuItem><Person3Outlined color="action"/></MenuItem>
          <MenuItem><FavoriteBorderOutlined color="action"/></MenuItem>
          <MenuItem>
            <Badge badgeContent={9} color="primary">
              <LocalMallOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>{
        isSearchOpen && (
          <InputContainer>
            <Input placeholder="Search"/>
            <CloseButton onClick={handleClose}>
              <Close />
            </CloseButton>
          </InputContainer>
        )
      }
    </Container>
  )
}

export default Navbar