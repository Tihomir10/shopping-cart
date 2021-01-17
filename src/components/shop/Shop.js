import { Link } from 'react-router-dom';

import { array } from '../assests/assets';

function Shop() {
  return (
    <div id='products'>
      {array.map(el => {
        return (
          <div className='product-list'>
            <Link to={`/shop/${el.name}`}>
              <img src={el.link} />
              <h3>{el.name}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Shop;