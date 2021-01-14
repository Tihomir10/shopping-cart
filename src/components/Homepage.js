import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='container-fluid'>
      <h1>Fresh Fruit Store</h1>
      <h2>Shop <Link to='/shop'>here</Link></h2>
    </div>
  );
}

export default Homepage;
