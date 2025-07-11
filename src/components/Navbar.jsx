import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-center gap-5 bg-gray-200 cursor-pointer items-center'>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/cart">Cart</Link>
  </li>
</ul>

    </div>
  )
}

export default Navbar
