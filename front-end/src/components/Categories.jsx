import styled from "styled-components"
import Category from "./Category"
import { categories } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    padding: 3.75rem 2rem;
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
        <Content>{categories.map(category=>(
            <Category key={category.id} category={category}/>
        ))}</Content>
    </Container>
  )
}

export default Categories