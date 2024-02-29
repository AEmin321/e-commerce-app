import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import styled from "styled-components"
import SectionHeading from "../components/SectionHeading"
import { mobile } from "../responsive"

const Container = styled.div``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 7px;
    ${mobile({ display: "flex", flexDirection: "column"})}
`

const FilterTitle = styled.h5`
    margin-bottom: 5px;
`

const Select = styled.select`
    padding: 5px 12px;
    margin-right: 5px;
`

const Option = styled.option`
    padding: 5px 12px;
`

const ProductsList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <SectionHeading name="PRODUCTS" info="WHAT PEOPLE ARE BUYING"/>
        <FilterContainer>
            <Filter>
                <FilterTitle>Filter Products</FilterTitle>
                <Select>
                    <Option selected disabled>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                <Select>
                    <Option selected disabled>Color</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterTitle>Sort Products</FilterTitle>
                <Select>
                    <Option selected>All</Option>
                    <Option>New</Option>
                    <Option>Price (Asc)</Option>
                    <Option>Price (Desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductsList