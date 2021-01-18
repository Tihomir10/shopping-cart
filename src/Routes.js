import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './components/Homepage';
import Shop from './components/shop/Shop';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/shop/Product';
import { array } from './components/assests/assets'
import './index';

function Routes() {

  const [ cart, setCart ] = useState([]);

  function addItem(event)  {
    const item = array.filter(obj => {
      return obj.id == event.target.id;
    })
    var cartItem = item[0]
    
    for(var i = 0; i < cart.length; i++) {
      if (cart[i].name == cartItem.name) {
        setCart(
          cart.map(
            (item) => (item.name === cartItem.name ? { ...item, qty: item.qty + 1 } : item)
          )
        );
        return
      }
    }

    setCart([...cart, {
      qty: 1,
      name: cartItem.name,
      price: cartItem.price
    }])
  }
  
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
        <Route exact path='/cart' component={Cart} />
        <Route 
          path='/shop/:name'  
          render={(props) => (
            <Product {...props} addItem={addItem} />
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;  