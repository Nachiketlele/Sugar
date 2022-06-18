import React,{ createContext, useState } from "react";

export const OfferContext = createContext()

export const OfferProvider = ({children})=>{
        
    const offerData = [
        {img:"https://d32baadbbpueqt.cloudfront.net/0bb92e9c-97ca-453c-ad4e-c0ae8c9a0678.jpg",coupon:"GJMMIL"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/479caa48-4f60-42de-84a7-d23b6c244f82.jpg",coupon:"GJNRGG"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/eb7f9151-3f06-452c-bb2d-7ebd336bf603.jpg",coupon:"GJ699"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/4f57f7f3-1af0-4d93-bebf-05fabd36ba0a.jpg",coupon:"GJ1099"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/11e748f5-43a4-43d8-8165-48bc86859441.jpg",coupon:"GJ1499"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/16ec57e3-c0e0-4ac2-8eed-26dc9a2c5aa5.jpg",coupon:"GJ1999"},
        {img:"https://d32baadbbpueqt.cloudfront.net/Promotion/835392ea-a7f1-457c-ab6e-4bf22ca74594.jpg",coupon:"GJ2499"},
        {img:"https://d32baadbbpueqt.cloudfront.net/d88bf139-fc6c-42fc-bb87-36981e06acee.jpg",coupon:"SUGARNEW"}
        ]
    return<OfferContext.Provider value={{offerData}}>{children}</OfferContext.Provider>
}