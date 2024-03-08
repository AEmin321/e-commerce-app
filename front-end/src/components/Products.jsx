import styled from "styled-components"
import { trendingProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    margin: 6.9rem 3.4rem;
`

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Products = () => {
  return (
    <Container>
        <ProductsWrapper>{trendingProducts.map(product=>(
            <Product key={product.id} product={product}/>
        ))}</ProductsWrapper>
    </Container>
  )
}

export default Products