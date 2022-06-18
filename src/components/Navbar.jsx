import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      {/* upper section navbar */}
      <div className={styles.navbarSugarUpperArea}>
        <img  className={styles.navbarSugarLogoPride} src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="pride logo sugar" />
        <div className={styles.navbarSugarInputSearchContainer}>
          <input className={styles.navbarSugarInputSearchBox} type="text" placeholder='Try "Liquid Lipstick"' />
          <button className={styles.navbarSugarInputSearchButton}>Search</button>
        </div>
        <div className={styles.navbarIconBox}>
          <img className={styles.navbarLoginIcon} src="https://in.sugarcosmetics.com/desc-images/person.png" alt="" />
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
          </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className={styles.setIcons}>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-bag-shopping"></i>
          <img className={styles.setDiscountLogo} src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" />
        </div>

      </div>
      {/* lower section navbar */}
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
    </div>
  )
}



export default Navbar