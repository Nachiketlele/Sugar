import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { OfferContext } from '../context/OfferContext'
import styles from "../styles/Offers.module.css"

const Offer = () => {
    const {offerData} = useContext(OfferContext)
    const hand=(val)=>{
        alert(`${val} copied`)
        localStorage.setItem("coupon",val)
    }
 
    
  return (
    <div>
        <div>
            <p className={styles.generalOfferSugar}>General Offers</p>
        </div>
        <div className={styles.generalOffersSugarTemplates} >
            {offerData.map((data)=>(
                <div key={data.id}>
                    <img src={data.img} className={styles.image}/>
                    <div> 
                        <p className={styles.couponDetailsSugar} onClick={()=>hand(data.coupon)}>{data.coupon}</p>
                    </div>
                </div>
            ))} 
        </div>
        <Footer/>
    </div>
  )
}

export default Offer