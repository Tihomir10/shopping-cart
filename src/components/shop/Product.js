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
        <button id={item[0].id} className='btn btn-primary' onClick={props.addItem}>Add to Cart</button>
        <button className='btn btn-primary'>Copmplete Order</button>
      </div>
    </div>
  )
}

export default Product;