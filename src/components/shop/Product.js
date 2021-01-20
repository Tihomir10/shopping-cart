import { Link } from 'react-router-dom'

import { array } from '../assests/assets';

function Product(props) {
  
  const item = array.filter(obj => {
    return obj.name == props.match.params.name
  })

  return (
    <div id='product'>
      <div id='div-img'>
        <img src={item[0].link} />
      </div>
      <div id='product-info'>
        <h3>{item[0].name}</h3>
        <h5>{item[0].price}$</h5>
        <div className='order-btns'>
          <button id={item[0].id} className='btn btn-primary' onClick={props.addItem}>Add to Cart</button>
          <Link to='/cart'>
            <button className='btn btn-primary'>Complete Order</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product;