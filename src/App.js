import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer.js';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductListContainer';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import Cart from './components/views/Cart/CartContainer';
import Blog from './components/views/Blog/Blog';
import Register from './components/views/Register/Register';
import Login from './components/views/Login/Login';

import Account from './components/views/Account/Account';
import Info from './components/views/Info/Info';
import Orders from './components/views/Orders/Orders';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/account/:pageId'} component={Account} />
          <Route exact path={'/info/:pageId'} component={Info} />
          <Route exact path={'/orders/:pageId'} component={Orders} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
