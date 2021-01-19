function Cart(props) {
  if (props.cart[0]) {
    const sum = props.cart.reduce((a, {total}) => a + total, 0)
    return (
      <div>
        <div className='container'>
          {props.cart.map(obj => {
            return (
              <div className='cart-product-info'>
                <h4>{obj.name} x {obj.qty} - {obj.total}$</h4>
                <button id={obj.name} onClick={props.deleteItem} className='btn btn-danger'>Remove from Cart</button>
              </div>
            )
          })}
        </div>
        <h3>Total: {sum}$</h3>
      </div>
    )
  }

  return (
    <h2>Cart is EMPTY</h2>
  )
}

export default Cart;