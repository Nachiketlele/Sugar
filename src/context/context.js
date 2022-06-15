import { createContext, useState } from "react";

const l1=[{id:1,name:"Blend Trend Face Brush - 003 Contour",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",price:699},
{id:2,name:"Blend Trend Eyeshadow Brush - 043 Round Xl",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",price:499},
{id:3,name:"Blend Trend Eyeshadow Brush - 042 Round",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",price:799},
{id:4,name:"EYES & FACE Combo",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",price:999},
{id:5,name:"Blend Trend Face Brush - 006 Highlighter",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",price:499},
{id:6,name:"Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",price:249},
{id:7,name:"Blend Trend Eyeshadow Brush - 041 Flat",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",price:499},
{id:8,name:"Blend Trend Face Brush - 007 Powder",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",price:799},
{id:9,name:"Blend Trend Foundation Brush - 052 Kabuki",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",price:499},
{id:10,name:"Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",price:119},
{id:11,name:"Blend Trend Dual Face Brush - 075 Powder + Foundation",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",price:349},
{id:12,name:"Blend Trend Face Brush - 001 Blush",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",price:999},
{id:13,name:"Face Essentials Combo",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",price:499},
];

const l2=[{id:14,name:"Matte Attack Transferproof Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",price:699},
{id:15,name:"Air Kiss Powder Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",price:499},
{id:16,name:"Matte As Hell Crayon Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",price:799},
{id:17,name:"Ace Of Face Foundation Stick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",price:999},
{id:18,name:"Nothing Else Matter Longwear Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",price:499},
{id:19,name:"Kohl Of Honour Intense Kajal - 01 Black Out (Black)",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",price:249},
{id:20,name:"Smudge Me Not Liquid Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",price:499},
{id:21,name:"Contour De Force Face Palette",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",price:799},
{id:22,name:"Bling Leader Illuminating Moisturizer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",price:499},
{id:23,name:"Contour De Force Mini Bronzer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",price:399},
{id:24,name:"Blend The Rules Eyeshadow Palette",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",price:1199},
{id:25,name:"Contour De Force Mini Blush",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",price:349},
{id:26,name:"Mettle Satin Lipstick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",price:999},
{id:27,name:"Dream Cover SPF15 Mattifying Compact",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",price:499},
{id:28,name:"Arch Arrival Brow Definer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",price:499},
{id:29,name:"Gloss Boss 24HR Eyeliner - 01 Back In Black (Black)",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594",price:499},
{id:30,name:"Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",price:499},
{id:31,name:"Goddess Of Flawless SPF30+ BB Cream",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",price:699},
{id:32,name:"Base Of Glory Pore Minimizing Primer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",price:799},
{id:33,name:"Set The Tone Tinted Powder",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",price:699},
];

const l3=[{id:34,name:"Citrus Got Real Cooling Stick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",price:399},
{id:35,name:"Cheat Sheet Clarifying Mask",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",price:99},
{id:36,name:"Citrus Got Real Daily Moisturizer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",price:499},
{id:37,name:"Aquaholic Instant Pore Cleansing Mask",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",price:499},
{id:38,name:"Bling Leader Illuminating Sunscreen SPF35 PA+++",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",price:599},
{id:39,name:"Cheat Sheet Anti-Aging Mask",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",price:99},
{id:40,name:"Citrus Got Real SPF30 Sunscreen",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",price:399},
{id:41,name:"Citrus Got Real Brightening Peel",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646235720",price:599},
{id:42,name:"Charcoal Patrol Bubble Mask",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",price:149},
{id:43,name:"Coffee Culture Eye Firming Cream",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",price:399},
{id:44,name:"Aquaholic Hydrating Primer",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",price:699},
{id:45,name:"Citrus Got Real Retinol Brightening Serum",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",price:499},
{id:46,name:"Aquaholic Clarifying Spot Gel",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",price:399},
{id:47,name:"Bling Leader Illuminating Sunscreen SPF35 PA+++ - 01 Gold Diggin 50g",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_547e9188-e44c-4cf7-a32e-fc0f410e8062.jpg?v=1651852720",price:599},
{id:48,name:"Bling Leader Illuminating Sunscreen SPF35 PA+++ - 02 Pink Trippin 50g",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e5df3bb8-4439-4980-ada2-aa90b126ada3.jpg?v=1651852746",price:599},
{id:49,name:"Power Clay Mask Stick",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",price:699},
{id:50,name:"Coffee Culture Pore Purifying Mask",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",price:499},
{id:51,name:"Citrus Got Real Refreshing Mist",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",price:499},
{id:52,name:"Aquaholic Hyaluronic Serum",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730",price:499},
{id:53,name:"Acne Combo (Pack of 6)",src:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",price:559},
]

let addItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    name: "AIR KISS POWDER LIPSTICK",
    price: 499,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
    name: "LIP ZIP MATTE TOPPER",
    price: 499,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
    name: "METTLE PRIMING BALM",
    price: 1099,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
    price: 599,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
    name: "Set The Tone Tinted Powder",
    price: 699,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    name: "MATTE AS HELL CRAYON LIPSTICK",
    price: 799,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
    name: "Goddess Of Flawless SPF30+ BB Cream",
    price: 699,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
    name: "Kohl Of Honour Intense Kajals",
    price: 249,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    name: "Blend The Rules Eyeshadow Palette",
    price: 1199,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
    name: "Base Of Glory Pore Minimizing Primer",
    price: 799,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    name: "Contour De Force Face Palette",
    price: 799,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    name: "ACE OF FACE FOUNDATION STICK",
    price: 999,
  }
];


export const Box=createContext()
export const BoxProvider=({children})=>{

const [list1, setlist1] = useState(l1)
const [list2, setlist2] = useState(l2)
const [list3, setlist3] = useState(l3)

const [sortval, setsortval] = useState(0)
const time=(l)=>{
    if(sortval==="3")
      l.sort(function(a,b){return a.price-b.price;})
     
    else if(sortval==="2")
      l.sort(function(a,b){return b.price-a.price;    })
  
    else if(sortval==="1")
      {      l.sort(function(a,b){
             let fa = a.name.toLowerCase(),
              fb = b.name.toLowerCase();
      
          if (fa < fb) 
              return -1;
          if (fa > fb) 
              return 1;
  
          return 0;
        })
      }
       
    }

    
return <Box.Provider value={{list1,list2,list3,setlist1,setlist2,setlist3,time,setsortval,addItems}}>{children}</Box.Provider>
}