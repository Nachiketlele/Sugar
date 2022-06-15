import React from "react";
import Add from "./additems/Add"
import Style from "./Home.module.css";

const Part1 = () => {
  return (
    <div>
      <p className={Style.Refer}>REFER YOUR FRIENDS</p>
      <div className={Style.imgs}>
        <img
          className={Style.imgs1}
          src="https://d32baadbbpueqt.cloudfront.net/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg"
          alt=""
        />
      </div>
      <br />
      <br />
      <p className={Style.Refer}>AIR KISS POWDER LIPSTICK</p>
      <div className={Style.frame}>
        <iframe
          width="80%"
          height="100%"
          src="https://www.youtube.com/embed/VXMBlOqZJbI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <br />
      <p className={Style.Refer}>BESTSELLERS</p>
      <Add/>
      <p className={Style.Refer}>QUICK BEAUTY TIPS WITH SUGAR</p>
    </div>
  );
};

export default Part1;
