import styled from "styled-components"
import Category from "./Category"
import { categories } from "../data"
import { mobile, smMobile } from "../responsive"

const Container = styled.div`
    padding: 2.75rem 2rem;

    ${smMobile({padding:"1.5rem 1.3rem"})}
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 3px;
    ${mobile({ padding: "5px", flexDirection:"column" })}
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