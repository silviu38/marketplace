import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Grid, Rating, Divider, Label, Button, Icon } from "semantic-ui-react";
import ReactLoading from 'react-loading';
import { ContainerLoading } from "../components/Products.style";
import "./ProductDetail.css";

function ProductDetail () {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(id) {
            setLoading(true);
            fetch('https://fakestoreapi.com/products/' + id)
                .then(res => res.json())
                .then(product => {
                    setProduct(product)
                    setLoading(false);
                    });
        }
    }, [id])

    return (
        <Container style= {{ marginTop: "100px" }}>
            {loading || !product ? (
                <ContainerLoading>
                    <ReactLoading 
                        type={"spinningBubbles"} 
                        color={"black"} 
                        height={'100px'} 
                        width={'100px'} />
                </ContainerLoading>  
            ) : (
                <>
                <Grid columns='equal'>
                    <Grid.Column>
                    <Image 
                        src= {product.image} 
                        alt= "" 
                        size="large"
                        style={{padding: "40px"}}
                        bordered />
                    </Grid.Column>
                    <Grid.Column>
                        <h1>{product.title}</h1>
                        <p className='price-display'>$ {product.price}</p>
                        <Label color='blue' size='medium' >
                            Category:
                            <Label.Detail>{product.category}</Label.Detail>
                        </Label>
                        <Divider/>
                        <Rating icon='star' defaultRating={product.rating.rate} maxRating={5} />
                        <p>Reviews: {product.rating.count}</p>
                        <Divider/>
                        <p>{product.description}</p>
                        <Button animated='fade' color='google plus' size='large'>
                            <Button.Content visible><Icon name='shop'/></Button.Content>
                            <Button.Content hidden>${product.price}</Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>
                </>
            ) }
        </Container>
    );
}

export default ProductDetail;