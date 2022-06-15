import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./Add.module.css"
import { useContext } from "react";
import { Box } from "../../context/context";
import Styles from "../../pages/Style.module.css"



const Add = () => {
  const {addItems}=useContext(Box)
  const properties1 = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    indicators: true,
    transitionDuration: 100,
  };


  return <div>
          <Slide id={Style.na} {...properties1}>
        {addItems.map((el) => (
          <div className="each-slide" id={Style.w1}>
                <div className={Styles.q2} id={Style.t}>
                   <img src={el.image}/>
                   <p className={Style.h1}>{el.name}</p>
                   <p>{el.price}</p>
                   <button>ADD TO CART</button>
                </div>
            </div>
        ))}
      </Slide>
  </div>;
};

export default Add;
