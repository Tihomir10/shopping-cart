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
    var cartItem = item[0];

    
    for(var i = 0; i < cart.length; i++) {
      if (cart[i].name == cartItem.name) {
        addQuantity(cartItem);
        return
      }
    }
    
    updateCart(cartItem);
  }

  const updateCart = (obj) => {
    setCart([...cart, {
      qty: 1,
      name: obj.name,
      price: obj.price,
      total: obj.price
    }])
  }

  const addQuantity = (obj) => {
    setCart(
      cart.map(
        (item) => (item.name === obj.name ? { ...item, qty: item.qty + 1, total: item.total + item.price } : item)
      )
    )
  }

  const deleteItem = (event) => {
    setCart(cart.filter((item) => item.name !== event.target.id));
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
        <Route exact path='/cart'>
          <Cart cart={cart} deleteItem={deleteItem} />
        </Route>
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