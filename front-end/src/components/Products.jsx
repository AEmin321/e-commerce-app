import styled from "styled-components"
import { trendingProducts } from "../data"
import SectionHeading from "./SectionHeading"
import Product from "./Product"

const Container = styled.div`
    
`

const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 3px;
    flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
        <SectionHeading name="TRENDING NOW" info="WHAT PEOPLE ARE BUYING"/>
        <ProductsWrapper>{trendingProducts.map(product=>(
            <Product key={product.id} product={product}/>
        ))}</ProductsWrapper>
    </Container>
  )
}

export default Products