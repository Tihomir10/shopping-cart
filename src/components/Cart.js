function Cart(props) {
  if (props.cart[0]) {
    const sum = props.cart.reduce((a, {total}) => a + total, 0)
    console.log(sum)
    return (
      <div>
        <div className='container'>
          {props.cart.map(obj => {
            return (
              <div className='cart-product-info'>
                <h4>{obj.name} x {obj.qty} - {obj.total}$</h4>
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