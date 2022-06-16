import React from "react";
import Style from "./Home.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Adds from "./additems/Adds";
import { useContext } from "react";
import { Box } from "../context/context";
import Addss from "./additems/Addss";
import { Box1 } from "../context/prop.context";


//************************************************* */


const Part2 = () => {
  const {slideImages2,slideImages3,slideImages4,sugarbeauty}= useContext(Box)
 const {properties,fadeProperties1} = useContext(Box1)
  return (
    <div>
      <p className={Style.Refer}>HOT DEALS</p>
      <Slide {...properties}>
        {slideImages2.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <p className={Style.Refer}>NEWLY LAUNCHED</p>
      <Slide {...fadeProperties1}>
        {slideImages3.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img}>
              <img className={Style.img1} src={el.image} />
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <div>
      <Adds />
      </div>
      <br />
      <br />
      <p className={Style.Refer}>TOP PICKS OF THE WEEK</p>
      <Slide {...properties}>
        {slideImages4.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <Addss/>
      <br />
      <br />
      <p className={Style.Refer}>SUGAR BEAUTY BLOG</p>
      <Slide {...properties}>
        {sugarbeauty.map((el) => (
          <div className="each-slide" key={el.id}>
            <div className={Style.img2}>
              <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Part2;
