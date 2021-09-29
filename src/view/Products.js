import { useEffect, useState } from "react";
import {Container, Grid} from "semantic-ui-react";
import Product from "../components/Product";
import ReactLoading from 'react-loading';
import { ContainerLoading } from "../components/Products.style";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    return (
        <Container style={{marginTop:"100px"}}>
            {loading ? (
                <ContainerLoading>
                    <ReactLoading 
                        type={"spinningBubbles"} 
                        color={"black"} 
                        height={'100px'} 
                        width={'100px'} />
                </ContainerLoading>  
                ) : ( 
                <Grid columns= {4}>
                    {products.map((product, index) => {
                        return( 
                            <Grid.Column key={index}> 
                            <Product product={product} /> 
                            </Grid.Column>
                        );
                    })}
                </Grid>
                )}
        </Container>
    );
}

export default Products;