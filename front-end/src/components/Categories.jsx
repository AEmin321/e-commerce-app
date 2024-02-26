import styled from "styled-components"
import Category from "./Category"
import { categories } from "../data"
import SectionHeading from "./SectionHeading"
import { mobile } from "../responsive"

const Container = styled.div`
    /* background-color: red; */
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 3px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
  return (
    <Container>
        <SectionHeading name="CATEGORIES" info="EXPLORE OUR CATEGORIES"/>
        <Content>{categories.map(category=>(
            <Category key={category.id} category={category}/>
        ))}</Content>
    </Container>
  )
}

export default Categories