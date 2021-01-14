import {Link} from 'react-router-dom';

function NavBar() {
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
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;