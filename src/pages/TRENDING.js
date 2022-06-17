import React, { useContext, useEffect, useState } from 'react'
import { Box } from '../context/context';
import styles from './Style.module.css'
import img1 from "./star_filled.png"
import { useDispatch } from 'react-redux';
import img2 from './imq1.gif'
import img3 from "./filterIcon.png"
import { useNavigate } from 'react-router-dom';

const TRENDING = () => {
  const { time, setsortval } = useContext(Box);
  const [love, setlove] = useState(false);
  const dispatch = useDispatch();

  const handle = (e) => {
    setsortval(e.target.value);
  };

  let r = JSON.parse(localStorage.getItem("list1"));
  let favArr = JSON.parse(localStorage.getItem("fav")) || [];
  const [list1, setlist1] = useState(r);
  const thelove = (val) => {
    for (let i = 0; i < list1.length; ++i) {
      if (val === list1[i].id) list1[i].love = !list1[i].love;
    }
    localStorage.setItem("list1", JSON.stringify(list1));
    setlist1(JSON.parse(localStorage.getItem("list1")));

    for (let i = 0; i < list1.length; ++i) {
      if (list1[i].love == true) favArr.push(list1[i]);
    }
    localStorage.setItem("fav", JSON.stringify(favArr));
  };

  time(list1);
  const navigate= useNavigate();

  return (
    <div>
       <div>
      <img className={styles.q10} src={img2} alt='no'></img>
    <img className={styles.q9} src='https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg' alt='no'/>
    <img className={styles.q10} src={img2} alt='no'></img>
    </div>
      <div className={styles.q3}>
        <div className={styles.q4}>
          <div>
          <div style={{display:"flex"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no" onClick={()=>navigate("/")}/><p> / Trending</p></div>
          <br></br>
            <div>Makeup TRENDING - 13 items</div>
          </div>
          <div className={styles.q5}>
          <div style={{display:"flex"}}><img style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/filterIcon.png' id={styles.e1} alt="no" /><p>Filter</p></div>
          <div>
              <select onChange={handle}>
                <option>Sort by</option>
                <option value="1">Name</option>
                <option value="2">Price - High to Low</option>
                <option value="3">Price - Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.q1}>
          {list1.map((e) => {
            e.quantity = 1;
            return (
              <div className={styles.q6} key={e.id}>
                <div className={styles.q2}>
                  {" "}
                  <img src={e.src} alt="no" />{" "}
                  <p className={styles.name}>{e.name}</p>{" "}
                  <p className={styles.price}>₹ {e.price}</p>{" "}
                  <div className={styles.q8}>
                    {" "}
                    <img src={img1} alt="no" id={styles.e1} />{" "}
                    <p className={styles.rating}>{e.rating}</p>{" "}
                    <img
                      id={styles.e1}
                      src={
                        !e.love
                          ? "https://th.bing.com/th/id/R.5365673f66386551fa6df965535bcfa1?rik=UzbBo%2bjcduyTuQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTn%2fXnM%2fKTnXnMAgc.png&ehk=vhGmsnENrQL2IH%2f9jIOSj8tJvVOxXNRhYqiiQMzUQGw%3d&risl=&pid=ImgRaw&r=0"
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                      }
                      alt="no"
                      onClick={() => thelove(e.id)}
                    />
                  </div>
                  <div
                    className={styles.q7}
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: e })
                    }
                  >
                    ADD TO CART{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TRENDING;
