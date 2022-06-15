import React, { useContext } from 'react'
import { Box } from '../context/context';
import styles from './Style.module.css'


const TRENDING = () => {
  const {list1,time,setsortval}=useContext(Box);
const handle=(e)=>{
setsortval(e.target.value);
}



time(list1)



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
          <div className={styles.q6}>
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
        {list1.map(e=>(<div className={styles.q2}>    <img src={e.src} alt="no"/>  <p>{e.name}</p>  <p>Rs:{e.price}</p>  </div>))}
    </div>
    </div>
  )
}

export default TRENDING