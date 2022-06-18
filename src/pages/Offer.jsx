import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import { OfferContext } from '../context/OfferContext'
import styles from "../styles/Offers.module.css"

const Offer = () => {
    const {offerData} = useContext(OfferContext)
    
  return (
    <div>
        <div>
            <p className={styles.generalOfferSugar}>General Offers</p>
        </div>
        <div className={styles.generalOffersSugarTemplates}>
            {offerData.map((data)=>(
                <div>
                    <img src={data.img} />
                    <div> 
                        <p className={styles.couponDetailsSugar}>{data.coupon}</p>
                    </div>
                </div>
            ))} 
        </div>
        <Footer/>
    </div>
  )
}

export default Offer