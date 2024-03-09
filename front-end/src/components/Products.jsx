import styled from "styled-components"
import { trendingProducts } from "../data"
import Product from "./Product"
import { smMobile } from "../responsive"

const Container = styled.div`
    margin: 1rem 2rem;
    padding: 0 1.1rem;

    ${smMobile({margin:"1rem 1rem"})}
`

const ProductsWrapper = styled.div`
    padding: 1rem 0.3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    ${smMobile({gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))"})}
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