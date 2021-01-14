import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Shop from './components/Shop';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import './index';

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;  