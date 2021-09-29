import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import Home from "./view/Home";
import Products from "./view/Products";
import Navigation from './components/Navigation/Navigation';
import ProductDetail from './view/ProductDetail';

function App() {
  return (
    <>
      <Router>
      <Navigation />
        <Switch>
          <Route path= "/product-detail/:id">
            <ProductDetail  />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">Pagina Inexistenta</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
