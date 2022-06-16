import React, { useContext, useEffect, useState } from 'react'
import { Box } from '../context/context';
import styles from './Style.module.css'
import img1 from "./star_filled.png"
import { useDispatch } from 'react-redux';


const SKINCARE = () => {
const {time,setsortval}=useContext(Box);
const [love, setlove] = useState(false)
const dispatch=useDispatch()

const handle=(e)=>{
setsortval(e.target.value);
}

let r=JSON.parse(localStorage.getItem("list3"))
let favArr=JSON.parse(localStorage.getItem("fav"))||[];
const [list3, setlist3] = useState(r)
const thelove=(val)=>{
  for(let i=0;i<list3.length;++i)
  {
    if(val===list3[i].id)
    list3[i].love=!list3[i].love;
  }
  localStorage.setItem("list3",JSON.stringify(list3))
  setlist3(JSON.parse(localStorage.getItem("list3")))

  for(let i=0;i<list3.length;++i)
  {
    if(list3[i].love===true)
    favArr.push(list3[i])
  }
  localStorage.setItem("fav",JSON.stringify(favArr))
}

  time(list3)

  const handleadd=(id)=>{
      dispatch({ type: "ADD_TO_CART", payload:id })
  }

 


  return (
    <div className={styles.q3}>
    <div className={styles.q4}>
        <div>
          <div>sgdsfg</div>
          <br></br>
          <div>dsfgdgdfg</div>
        </div>
        <div className={styles.q5}>
          <div>Filters</div>
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
        {list3.map(e=>(
        <div className={styles.q6} key={e.id}>
        <div className={styles.q2}>    <img src={e.src} alt="no"/>  <p>{e.name}</p>  <p>Rs:{e.price}</p> <div className={styles.q8} >  <img src={img1} alt='no' id={styles.e1}/>   <p>{e.rating}</p>  <img id={styles.e1} src={!e.love?"https://th.bing.com/th/id/R.5365673f66386551fa6df965535bcfa1?rik=UzbBo%2bjcduyTuQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTn%2fXnM%2fKTnXnMAgc.png&ehk=vhGmsnENrQL2IH%2f9jIOSj8tJvVOxXNRhYqiiQMzUQGw%3d&risl=&pid=ImgRaw&r=0":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"} alt='no' onClick={()=>thelove(e.id)}/></div> 
        <div className={styles.q7} onClick={()=>handleadd(e.id)}>ADD TO CART </div>
        </div>
        </div>))}
    </div>
    </div>
  )
}

export default SKINCARE