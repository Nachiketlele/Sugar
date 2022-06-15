import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Style from "./Add.module.css"
let addItems = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
      name: "AIR KISS POWDER LIPSTICK",
      price: "RS 499",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
      name: "LIP ZIP MATTE TOPPER",
      price: "RS 499",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
      name: "METTLE PRIMING BALM",
      price: "RS 1099",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
      name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
      price: "RS 599",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
      name: "Set The Tone Tinted Powder",
      price: "RS 699",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
      name: "MATTE AS HELL CRAYON LIPSTICK",
      price: "RS 799",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
      name: "Goddess Of Flawless SPF30+ BB Cream",
      price: "RS 699",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
      name: "Kohl Of Honour Intense Kajals",
      price: "RS 249",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
      name: "Blend The Rules Eyeshadow Palette",
      price: "RS 1199",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
      name: "Base Of Glory Pore Minimizing Primer",
      price: "RS 799",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
      name: "Contour De Force Face Palette",
      price: "RS 799",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
      name: "ACE OF FACE FOUNDATION STICK",
      price: "RS 999",
    }
  ];






const Add = () => {
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
          <div className="each-slide" >
                <div className={Style.box}>
                   <img className={Style.img3} src={el.image}/>
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
