import React, { useContext, useEffect, useState } from 'react'
import { Box } from '../context/context';
import styles from './Style.module.css'
import img1 from "./star_filled.png"
import { useDispatch } from 'react-redux';
import img2 from './imq1.gif'
import img3 from "./filterIcon.png"
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

const MAKEUP = () => {
  const { time, setsortval } = useContext(Box);
  const [love, setlove] = useState(false);
  const dispatch = useDispatch();

  const handle = (e) => {
    setsortval(e.target.value);
  };

  let r = JSON.parse(localStorage.getItem("list2"));
  let favArr = JSON.parse(localStorage.getItem("fav")) || [];
  const [list2, setlist2] = useState(r);


  let qwer = JSON.parse(localStorage.getItem("list2"));
 


  const handle1 = (e) => {
    let r=e.target.value;
    if(r==='1')
    {let qwer = JSON.parse(localStorage.getItem("list2"));
      setlist2(qwer.filter(e=>e.name.includes("Lipstick")))
    }
    else if(r==='2')
    { let qwer = JSON.parse(localStorage.getItem("list2"));
      setlist2(qwer.filter(e=>e.name.includes("Contour")))
    }
    else if(r==='3')
    {
      let qwer = JSON.parse(localStorage.getItem("list2"));
      setlist2(qwer.filter(e=>e.name.includes("Kajal")))
    }
    else
    {
      let qwer = JSON.parse(localStorage.getItem("list2"));
      setlist2(qwer)
    }
  };




  const thelove = (val) => {
    for (let i = 0; i < list2.length; ++i) {
      if (val === list2[i].id) list2[i].love = !list2[i].love;
    }
    localStorage.setItem("list2", JSON.stringify(list2));
    setlist2(JSON.parse(localStorage.getItem("list2")));
let flag100=false;
let flag200;
for (let i = 0; i < list2.length; ++i)
{
  if(list2[i].id===val)
  {
    if(list2[i].love===false)
    flag200=false
    else
    flag200=true
  }
}
if(flag200===true)
   { if(favArr.length===0)
    {favArr.push(list2[val-13-1]);
      localStorage.setItem("fav", JSON.stringify(favArr));}
    else
    {for (let i1 = 0; i1 < favArr.length; ++i1) {
      if (favArr[i1].id === val)
      {
        flag100=true;
      }
    }
    if(flag100===false)
    {favArr.push(list2[val-13-1]);
    localStorage.setItem("fav", JSON.stringify(favArr));}
  }}

  else if(flag200===false){
    let deleted=favArr.filter(e=>e.id!==val)
    localStorage.setItem("fav", JSON.stringify(deleted));
  }



  };


  time(list2);
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
        <div style={{display:"flex"}}><img onClick={()=>navigate("/")} style={{marginTop:"3px"}} src='https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg' id={styles.e1} alt="no"/><p> / Makeup</p></div>
          <br></br>
          <div>Makeup - 16 items</div>
        </div>
        <div className={styles.q5}>
        <div style={{marginLeft:"-100px"}}>
              <select style={{border:"0px"}} onChange={handle1}>
                <option>Filter by</option>
                <option value="1">Lipstick</option>
                <option value="2">Kajal</option>
                <option value="3">Contour</option>
                <option value="4">Remove filters</option>
              </select>
            </div>
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
    <br/>
      <div className={styles.q1}>
        {list2.map((e) => {
          e.quantity = 1;
          return (
            <div className={styles.q6} key={e.id}>
              <div className={styles.q2}>
                {" "}
                <img src={e.src} alt="no" /> <p>{e.name}</p> <p>Rs:{e.price}</p>{" "}
                <div className={styles.q8}>
                  {" "}
                  <img src={img1} alt="no" id={styles.e1} /> <p>{e.rating}</p>{" "}
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
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: e })}
                >
                  ADD TO CART{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
     <Footer/>
    </div>
  );
};

export default MAKEUP;
