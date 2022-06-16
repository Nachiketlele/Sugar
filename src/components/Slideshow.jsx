import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./Home.module.css";
import Part1 from "./Part1";
import Part2 from "./Part2";
import { useContext } from "react";
import { Box1 } from "../context/prop.context";
import { Navigate, useNavigate } from "react-router-dom";

const slideImages = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
      id:1
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg",
      id:2
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
      id:3
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/309d5880-c650-4773-9cb9-5b8efc593ac0.jpg",
      id:4
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg",
      id:5
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg",
      id:6
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
      id:7
  },
];
//**************************************************************************** */

const slideImages1 = [
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg",
      id:1
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg",
      id:2
  },
  {
    image:
      "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg",
      id:3
  },
];



const Slideshow = () => {
  const navigates = useNavigate()

 const {fadeProperties1,fadeProperties} = useContext(Box1)
  return (
    <div>
      <div>
        <Slide {...fadeProperties}>
          {slideImages.map((el) => (
            <div className="each-slide" key={el.id}>
              <div className={Style.img}>
                <img className={Style.img1} src={el.image} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <br />
      <br />
      <div>
        <Part1 />
      </div>

      <Slide {...fadeProperties1}>
        {slideImages1.map((el) => (
          <div className="each-slide"  key={el.id} >
            <div className={Style.img}>
              <img className={Style.img1} src={el.image} />
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <br />
      <div>
        <Part2 />
      </div>
      
    </div>
  );
};

export default Slideshow;
