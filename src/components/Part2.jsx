import React from "react";
import Style from "./Home.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Adds from "./additems/Adds";
import { useContext } from "react";
import { Box } from "../context/context";
import Addss from "./additems/Addss";
import { Box1 } from "../context/prop.context";
import ReactPlayer from "react-player";
import girl1 from "./1.mp4";
import girl2 from "./2.mp4";
import girl3 from "./3.mp4";
import girl4 from "./4.mp4";
import girl5 from "./5.mp4";
import girl6 from "./6.mp4";
import girl7 from "./7.mp4";
import girl8 from "./8.mp4";
import girl9 from "./9.mp4";
import girl10 from "./10.mp4";

//************************************************* */

const Part2 = () => {
  const { slideImages2, slideImages3, slideImages4, sugarbeauty } =
    useContext(Box);
  const { properties, fadeProperties1 } = useContext(Box1);
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

      <p className={Style.Refer}>SUGAR STREAMING</p>
      <div className={Style.frame2}>
        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl1}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl2}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl3}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl4}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl5}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl6}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={Style.frame1}>
          <iframe
            width="100%"
            height="100%"
            src={girl7}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
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
      <Addss />
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
