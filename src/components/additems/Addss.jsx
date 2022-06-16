import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Styles from "../../pages/Style.module.css"
import Style from "./Add.module.css"
import { useContext } from 'react';
import { Box } from '../../context/context';
import { Box1 } from '../../context/prop.context';



const Addss = () => {
    const {addss,addsss} =useContext(Box)
    const {properties1} = useContext(Box1)
  return (
    <div>
       <p className={Style.Refer}>GIFTING</p>
       <Slide id={Style.na} {...properties1}>
        {addss.map((el) => (
          <div className="each-slide" id={Style.w1} key={el.id}>
                <div className={Styles.q2} id={Style.t}>
                   <img src={el.image}/>
                   <p className={Style.h1}>{el.name}</p>
                   <div className={Style.ad}>
                   <p className={Style.strike}>₹ {el.offer}</p>
                   <p className={Style.pr}>₹ {el.price}</p>
                   <p className={Style.red}>{el.discount}</p>
                   </div>
                   <button>ADD TO CART</button>
                </div>
            </div>
        ))}
      </Slide>
      <br />
      <br />
      <p className={Style.Refer}>THIS OR THAT</p>
      <div className={Style.divs}>
         <div className={Style.divs1}><img className={Style.divs2} src="https://d32baadbbpueqt.cloudfront.net/87e180d8-98a5-44d4-88f2-4af24327cd7c.jpg" alt="" /></div>
         <div className={Style.divs1}><img className={Style.divs2} src="https://d32baadbbpueqt.cloudfront.net/38a305ba-a808-4ade-ba72-fc55f5bc6183.jpg" alt="" /></div>
      </div>
      <br />
      <br />
      <br />
      <p className={Style.Refer}>JUST-IN</p>
      <Slide id={Style.na} {...properties1}>
        {addsss.map((el) => (
          <div className="each-slide" id={Style.w1} key={el.id}>
                <div className={Styles.q2} id={Style.t}>
                   <img src={el.image}/>
                   <p className={Style.h1}>{el.name}</p>
                   <div className={Style.ad}>
                   <p className={Style.strike}>{el.offer}</p>
                   <p className={Style.pr}>₹ {el.price}</p>
                   <p className={Style.red}>{el.discount}</p>
                   </div>
                   <button>ADD TO CART</button>
                </div>
            </div>
        ))}
      </Slide>
      

    </div>
  )
}

export default Addss