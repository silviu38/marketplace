import { Card, Checkbox } from 'semantic-ui-react';

function CategoriesFilter({categories}) {
    return(
        <Card 
            color='blue' 
            style={{
                position:"absolute", 
                top:"14px", left:"-185px", 
                maxWidth:"180px",
            }}>
            <Card.Content>
                <Card.Header>Filtru Categorii</Card.Header>
            </Card.Content>
            <Card.Content>
                {categories.map((category, index) => {
                    return(
                        <Checkbox label={category.name} key={index} />
                    )
                })}
            </Card.Content>
        </Card>
    );
}

export default CategoriesFilter;