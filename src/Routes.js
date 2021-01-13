import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Homepage from './Homepage';
import Shop from './Shop'

function Routes() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;  