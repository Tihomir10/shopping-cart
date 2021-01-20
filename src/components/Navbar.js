import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul>
        <li class="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/shop'>Shop</Link>
        </li>
        <li class="nav-item">
          <Link to='/cart'>
            <div>
              <i class="fas fa-shopping-cart"></i>
              <span>{props.totalQty}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;