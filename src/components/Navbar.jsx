import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">HOME</Link>
        <Link to="/makeup">MAKEUP</Link>
        <Link to="/brushes">BRUSHES</Link>
        <Link to="/skincare">SKINCARE</Link>
        <Link to="/trending">TRENDING</Link>
        <Link to="/offers">OFFERS</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/map'>Map</Link>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to='/single'>SingleItem</Link>

    </div>
  )
}



export default Navbar