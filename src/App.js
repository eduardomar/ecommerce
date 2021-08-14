import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

const Products = lazy(() => import('./views/products/Products'));
const Product = lazy(() => import('./views/products/Product'));
const ShoppingCarts = lazy(() => import('./views/shoppingCarts/ShoppingCarts'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const App = () => (
  <HashRouter>
    <Suspense fallback={loading}>
      <Switch>
        <Route
          path="/products"
          exact
          name="Products"
          render={(props) => <Products {...props} />}
        />
        <Route
          path="/products/:id"
          exact
          name="Product"
          render={(props) => <Product {...props} />}
        />

        <Redirect from="/" to="/products" />
      </Switch>

      <ShoppingCarts />
    </Suspense>
  </HashRouter>
);

export default App;
