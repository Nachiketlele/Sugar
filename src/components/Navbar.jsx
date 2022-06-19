
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import styles from "../styles/Navbar.module.css"
const Navbar = () => {

  const navigate = useNavigate()
  let cat = [
    {
      id: 1,
      title: "MAKEUP",
      path: "/makeup",
      sub: {
        a: "LIPS",
        p1: "/",
        b: "FACE",
        p2: "/",
        c: "EYES",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 2,
      title: "BRUSHES",
      path: "/brushes",
      sub: {
        a: "FACE BRUSHES",
        p1: "/",
        b: "EYES BRUSHES",
        p2: "/",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
    {
      id: 3,
      title: "SKINCARE",
      path: "/skincare",
      sub: {
        a: "MOISTURIZERS",
        p1: "/",
        b: "SUNSCREEN",
        p2: "/",
        c: "SETTING MISTS",
        p3: "/",
        d: "COFFEE CULTURE RANGE",
        p4: "/",
        e: "SHEET MASK COMBO",
        p5: "/",
        f: "CITRUS GOT REAL RANGE",
        p6: "/",
        g: "MASKS",
        p7: "/",
        h: "AQUAHOLIC RANGE",
        p8: "/",
      },
    },{
      id: 4,
      title: "TRENDING",
      path: "/trending",
      sub: {
        a: "SUGAR MERCH STATION",
        p1: "/",
        b: "MAKEUP KITS",
        p2: "/",
        c: "BESTSELLERS",
        p3: "/",
        d: "SUGAR SETS",
        p4: "/",
        e:"VALUE SETS",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },{
      id: 5,
      title: "BLOG",
      path: "/",
      sub: {
        a: "FEATURED",
        p1: "/",
        b: "MAKEUP",
        p2: "/",
        c: "SKINCARE",
        p3: "/",
        p4: "/",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
  ];

  const handleLogin = ()=>{
    navigate("/login")
  }
  const handleWishlist=()=>{
    navigate("/wishlist")
  }
  const handleCart=()=>{
    navigate("/cart")
  }
  const goToHome=()=>{
    navigate("/")
  }
  const goToOffers=()=>{
    navigate("/offers")
  }

  return (
  <div>
    <div>
      {/* upper section navbar */}
      <div className={styles.navbarSugarUpperArea}>
        <img onClick={goToHome}  className={styles.navbarSugarLogoPride} src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="pride logo sugar" />
        <div className={styles.navbarSugarInputSearchContainer}>
          <input className={styles.navbarSugarInputSearchBox} type="text" placeholder='Try "Liquid Lipstick"' />
          <button className={styles.navbarSugarInputSearchButton}>Search</button>
        </div>
        <div className={styles.navbarIconBox}>
          <img className={styles.navbarLoginIcon} src="https://in.sugarcosmetics.com/desc-images/person.png" alt="" />
          <button onClick={handleLogin} id={styles.loginRegisterBtn} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Login/Register
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
          <i style={{cursor:"pointer"}} onClick={handleWishlist} class="fa-solid fa-heart"></i>
          <i style={{cursor:"pointer"}} onClick={handleCart} class="fa-solid fa-bag-shopping"></i>
          <img onClick={goToOffers} className={styles.setDiscountLogo} src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" />
        </div>

      </div>
      {/* lower section navbar */}  
    </div>


    <div className="upperBox">
      {cat.map((el) => (
        <div className="main_menu" key={el.id}>
          <Link  className="menu-btn" to={el.path}>
            {el.title}
          </Link>

          <div className="xyz">
            <div className="b">
              <div className="div">
                <ul>
                  <li>
                    <Link className="p" to={el.sub.p1}>
                      {el.sub.a}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p2}>
                      {el.sub.b}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p3}>
                      {el.sub.c}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p4}>
                      {el.sub.d}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p5}>
                      {el.sub.e}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p6}>
                      {el.sub.f}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p7}>
                      {el.sub.g}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p8}>
                      {el.sub.h}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Link className="grow" to="/offers">
        OFFERS
      </Link>
      <Link className="grow" to="/">
        STORES
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
