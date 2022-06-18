import React, { useState } from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
    
  return (
    <div className= {styles.sugarFooterMainDiv}>
        <div className={styles.sugarLogoFooterHead}>
            <img className={styles.sugarLogoImageSet} src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" alt="sugar-cosmetics-logo" />
        </div>
        <div className={styles.iconsSocialMediaDiv}>
            <div className={styles.as} >
           <a  className={styles.sugarSocialMediaIconsSet} href="https://www.facebook.com/trySUGAR/" target={"blank"}> <img className={styles.im} src="https://in.sugarcosmetics.com/desc-images/facebook.svg" alt="facebook" /></a>
           <a className={styles.sugarSocialMediaIconsSet} href="https://www.instagram.com/trysugar/?hl=en"> <img className={styles.im} src="https://in.sugarcosmetics.com/desc-images/Instagram.svg" alt="instagram" /> </a>
           <a className={styles.sugarSocialMediaIconsSet} href="https://in.pinterest.com/sugarcosmetics/"> <img className={styles.im} src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg" alt="pinterest" /></a>
           <a className={styles.sugarSocialMediaIconsSet} href="https://sugarcosmetics-blog.tumblr.com/"> <img className={styles.im} src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg" alt="tumblr" /></a>
           <a className={styles.sugarSocialMediaIconsSet} href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g"> <img className={styles.im} src="https://in.sugarcosmetics.com/desc-images/Youtube.svg" alt="youtube" /></a>
           <a className={styles.sugarSocialMediaIconsSet} href="https://twitter.com/trySUGAR"> <img className={styles.im} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCRG5eyDo_DKf0wIOsUMaHPWGEonT2Gk_2GESa_24v85-aVO9_iJpyZTAlgY-L8BVqpg&usqp=CAU" alt="twitter" /></a>
           </div>
        </div>
        <div className={styles.sugarNewsLetterAndSugarApp}>
            <div className={styles.sugarNewsLetter}>
                <h6 className={styles.h4}>SUBSCRIBE TO OUR NEWSLETTER</h6>
                <div className={styles.in}>
                <input className={styles.newsLetterInput} type="email" placeholder='Your email address' />
                <button className ={styles.signUpButton} >SIGN UP</button>
                </div>
            </div>
            <div className={styles.sugarAppNew}>
                <h6 className={styles.h4}>GET THE NEW SUGAR APP TODAY.</h6>
                <div className={styles.sugarAppNewInnerDiv}>
                    <div className={styles.p}>
                    <p style={{color:"grey", backgroundColor:"black"}}>Tap into a better shopping experience.</p>
                    </div>
                    <div className={styles.play}>
                    <a className={styles.sugarAppPlayStoreAppleStore} href="https://sugarcosmetics.app.link/WebFApp" target={"blank"}><img className={styles.sugarAppPlayStoreAppleStore} src="https://in.sugarcosmetics.com/playstore.png" alt="" /> </a>
                    <a className={styles.sugarAppPlayStoreAppleStore} href="https://sugarcosmetics.app.link/WebFApp" target={"blank"}><img className={styles.sugarAppPlayStoreAppleStore} src="https://in.sugarcosmetics.com/apple-store.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.sugarInformation}>
            <h6 className={styles.h4}>INFORMATION</h6>
            <div className={styles.sugarInformationInnerInfo}>
                <a href="https://in.sugarcosmetics.com/stores" style={{textDecoration:"none",color:"grey", backgroundColor:"black"}} target={"blank"} ><p className={styles.ps}>Stores</p></a>
                <a href="https://in.sugarcosmetics.com/pages/terms-conditions" style={{textDecoration:"none",color:"grey",backgroundColor:"black"}} target={"blank"} ><p className={styles.ps}>Terms & Conditions</p></a>
                <a href="https://in.sugarcosmetics.com/pages/returns-refunds" style={{textDecoration:"none",color:"grey",backgroundColor:"black"}} target={"blank"} ><p className={styles.ps}>Return</p></a>
                <a href="https://in.sugarcosmetics.com/pages/faqs" style={{textDecoration:"none",color:"grey",backgroundColor:"black"}} target={"blank"} ><p className={styles.ps}>FAQ's</p></a>
                <a href="https://in.sugarcosmetics.com/pages/about-us" style={{textDecoration:"none",color:"grey",backgroundColor:"black"}} target={"blank"} ><p className={styles.ps}>About Us</p></a>
            </div>
        </div>
        <div className={styles.sugarGetInTouch}>
            <h6 className={styles.h4}  style={{letterSpacing:"1px"}} >GET IN TOUCH</h6>
            <div className={styles.sugarGetInTouchInnerInfo}>
                <div className={styles.div}>
                    <p className={styles.pss} style={{letterSpacing:"1px"}}>Call us at</p>
                    <p className={styles.sugarConnectInfo} style={{backgroundColor:"black"}}>1800-209-9933</p>
                    <p style={{fontSize:"13px",color:"grey", backgroundColor:"black"}}>Monday to Friday: 9 AM to 7 PM</p>
                </div>
                <div className={styles.div}>
                    <p className={styles.pss}  style={{letterSpacing:"1px"}}>Support</p>
                    <a href="https://mail.google.com/mail/u/0/" target={"blank"} style={{textDecoration:"none",backgroundColor:"black"}}>
                        <p className={styles.sugarConnectInfo}>hello@sugarcosmetics.com</p>
                    </a>
                </div>
                <div className={styles.div}>
                    <p className={styles.pss}  style={{letterSpacing:"1px"}}>Careers</p>
                    <a href="https://in.sugarcosmetics.com/careers" target={"blank"} style={{textDecoration:"none",backgroundColor:"black"}}>
                        <p className={styles.sugarConnectInfo}>We're hiring!</p>
                    </a>
                </div>
                <div className={styles.div}>
                    <p className={styles.pss}  style={{letterSpacing:"1px"}}>PRESS & MEDIA</p>
                    <a href="https://mail.google.com/mail/u/0/" target={"blank"} style={{textDecoration:"none",backgroundColor:"black"}}>
                        <p className={styles.sugarConnectInfo}>pr@sugarcosmetics.com</p>
                    </a>
                </div>
                <div className={styles.div}>
                    <p className={styles.pss}  style={{letterSpacing:"1px"}}>INFLUENCER COLLAB</p>
                    <a href="https://blog.sugarcosmetics.com/collab" target={"blank"} style={{textDecoration:"none",backgroundColor:"black"}}>
                        <p className={styles.sugarConnectInfo}>JOIN US</p>
                    </a>
                </div>
            </div>
        </div>
        <hr className={styles.sugarFooterEndLine} style={{backgroundColor:"white"}} />
        <h6 style={{color:"white",margin:"auto",textAlign:"center",marginTop:"30px",backgroundColor:"black"}}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</h6>
    </div>
  )
}

export default Footer