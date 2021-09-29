import { Link } from "react-router-dom";

function Home () {

    return (
        <div>
            <Link to= '/products'>
                <h1>Spre pagina de produse</h1>
            </Link>
            
        </div>
    );
}

export default Home;