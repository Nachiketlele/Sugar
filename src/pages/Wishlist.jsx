import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Style.module.css";
import person from './person.png'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import img1 from "./star_filled.png";
// import { useDispatch } from 'react-redux';

const Wishlist = () => {
    const navigate= useNavigate();
   let per= JSON.parse(localStorage.getItem("person"));
   let favlist= JSON.parse(localStorage.getItem("fav"))||[];
    // const dispatch=useDispatch()

  return (
    <div>
        <div style={{display:"flex",marginLeft:"30px"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Account / Wishlist</p></div>
        <div style={{display:"flex",marginLeft:"30px"}}><img style={{marginTop:"3px"}} src={person} id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> Hi, {per.name} !</p></div>
        <div id={styles.v1}>
            <img src={pic1} alt="no" onClick={()=>navigate("/account/orders")}/>
            <img src={pic2} alt="no" onClick={()=>navigate("/account/addresses")}/>
            {/* <img src={pic3} alt="no" /> */}
            {/* <img src={pic4} alt="no" /> */}
        </div>
        <div className={styles.q15}>
          {favlist.map((e) => {
            e.quantity = 1;
            return (
              <div className={styles.q6} key={e.id}>
                <div className={styles.q22}>
                  {" "}
                  <img src={e.src} alt="no" />{" "}
                  <p className={styles.name}>{e.name}</p>{" "}
                  <p className={styles.price}>₹ {e.price}</p>{" "}
                  <div className={styles.q8}>
                    {" "}
                    <img src={img1} alt="no" id={styles.e1} />{" "}
                    <p className={styles.rating}>{e.rating}</p>{" "}
                  </div>
                  <div
                    className={styles.q7}
                    // onClick={() =>
                    //   useDispatch({ type: "SHOP NOW", payload: e })
                    // }
                  >
                    SHOP NOW{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Wishlist