
import { array } from '../assests/assets';

function Product({match}) {
  
  const item = array.filter(obj => {
    return obj.name == match.params.name
  })

  console.log(item[0])

  return (
    <div id='product'>
      <div id='div-img'>
        <img src={item[0].link} />
      </div>
      <div id='product-info'>
        <h3>{item[0].name}</h3>
        <h5>{item[0].price}$</h5>
        <button className='btn btn-primary'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;