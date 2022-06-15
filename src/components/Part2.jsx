import React from 'react'
import Style from "./Home.module.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages2 = [
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/6d99e54c-1213-4184-a8f8-0aca166a298f.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg",
    },
  ];
  //************************************************* */
  const slideImages3 = [
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg",
    },
    {
      image:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    }
  ];

const Part2 = () => {
    const properties = {
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        indicators: true,
        transitionDuration: 300,
      };
      const fadeProperties1 = {
        duration: 2000,
        pauseOnHover: true,
        transitionDuration: 300,
        indicators: true,
      };
  return (
    <div>
        <p className={Style.Refer}>HOT DEALS</p>
        <Slide {...properties}>
        {slideImages2.map((el) => (
          <div className="each-slide">
            <div className={Style.img2}>
                <div className={Style.box}>
                <img className={Style.img3} src={el.image} />
                </div>
            </div>
          </div>
        ))}
      </Slide>
      <br />
      <p className={Style.Refer}>NEWLY LAUNCHED</p>
      <Slide {...fadeProperties1}>
        {slideImages3.map((el) => (
          <div className="each-slide">
            <div className={Style.img}>
              <img className={Style.img1} src={el.image} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Part2