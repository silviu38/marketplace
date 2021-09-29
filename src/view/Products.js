import { useEffect, useState } from "react";
import {Container, Grid} from "semantic-ui-react";
import Product from "../components/Product";
import ReactLoading from 'react-loading';
import { ContainerLoading } from "../components/Products.style";
import CategoriesFilter from "../components/CategoriesFilter/CategoriesFilter";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([]);
    const [loadingCat, setLoadingCat] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });

        setLoadingCat(true);
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                const processedCategories = data.map((category) => {
                    return  {name: category, checked: false};
                });
                setCategories(processedCategories);
                setLoadingCat(false);
            });
    }, []);


    const handleCheckedCategory = (categoryProp) => {
        const newCategories = categories.map((category) =>{
            if (category.name === categoryProp.name) {
                return {
                    name: categoryProp.name, 
                    checked: !categoryProp.checked,
                };  
            } else {
                return category;
            }
        });
        setCategories(newCategories);
    }


    return (
        <Container style={{marginTop:"100px", position: "relative"}}>
            {loadingCat ? (
                <ReactLoading 
                    type={"cubes"} 
                    color={"blue"} 
                    height={'30px'} 
                    width={'30px'} 
                />
            ) : (
                <CategoriesFilter 
                    categories={categories}
                    handleCheckedCategory={handleCheckedCategory}
                />
            )}
            
            {loading ? (
                <ContainerLoading>
                    <ReactLoading 
                        type={"spinningBubbles"} 
                        color={"black"} 
                        height={'100px'} 
                        width={'100px'} 
                    />
                </ContainerLoading>  
                ) : ( 
                <Grid columns= {4}>
                    {products.filter((product)=>{
                        let isChecked = false;
                        let selectedCategories = 0;

                        categories.forEach((category)=>{
                            if (product.category === category.name && category.checked === true) {
                                isChecked = true;
                            }
                            if (category.checked === true) {
                                selectedCategories++;
                            }
                        });

                        if (selectedCategories >= 1) {
                            return isChecked;
                        } else {
                            return true;
                        }
                    }).map((product, index) => {
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