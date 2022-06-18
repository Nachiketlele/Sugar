import React, { useState } from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
    
  return (
    <div className= {styles.sugarFooterMainDiv}>
        <div className={styles.sugarLogoFooterHead}>
            <img className={styles.sugarLogoImageSet} src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" alt="sugar-cosmetics-logo" />
        </div>
        <div className={styles.iconsSocialMediaDiv}>
           <a href="https://www.facebook.com/trySUGAR/" target={"blank"}> <img className={styles.sugarSocialMediaIconsSet} src="https://in.sugarcosmetics.com/desc-images/facebook.svg" alt="facebook" /></a>
           <a href="https://www.instagram.com/trysugar/?hl=en"> <img className={styles.sugarSocialMediaIconsSet} src="https://in.sugarcosmetics.com/desc-images/Instagram.svg" alt="instagram" /> </a>
           <a href="https://in.pinterest.com/sugarcosmetics/"> <img className={styles.sugarSocialMediaIconsSet} src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg" alt="pinterest" /></a>
           <a href="https://sugarcosmetics-blog.tumblr.com/"> <img className={styles.sugarSocialMediaIconsSet} src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg" alt="tumblr" /></a>
           <a href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g"> <img className={styles.sugarSocialMediaIconsSet} src="https://in.sugarcosmetics.com/desc-images/Youtube.svg" alt="youtube" /></a>
           <a href="https://twitter.com/trySUGAR"> <img className={styles.sugarSocialMediaIconsSet} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCRG5eyDo_DKf0wIOsUMaHPWGEonT2Gk_2GESa_24v85-aVO9_iJpyZTAlgY-L8BVqpg&usqp=CAU" alt="twitter" /></a>
        </div>
        <div className={styles.sugarNewsLetterAndSugarApp}>
            <div className={styles.sugarNewsLetter}>
                <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                <input className={styles.newsLetterInput} type="email" placeholder='Your email address' />
                <button className ={styles.signUpButton} >SIGN UP</button>
            </div>
            <div className={styles.sugarAppNew}>
                <h4>GET THE NEW SUGAR APP TODAY.</h4>
                <div className={styles.sugarAppNewInnerDiv}>
                    <p style={{marginTop:"-2px",color:"grey"}}>Tap into a better <br></br>shopping experience.</p>
                    <a href="https://sugarcosmetics.app.link/WebFApp" target={"blank"}><img className={styles.sugarAppPlayStoreAppleStore} src="https://in.sugarcosmetics.com/playstore.png" alt="" /> </a>
                    <a href="https://sugarcosmetics.app.link/WebFApp" target={"blank"}><img className={styles.sugarAppPlayStoreAppleStore} src="https://in.sugarcosmetics.com/apple-store.png" alt=""/></a>
                </div>
            </div>
        </div>
        <div className={styles.sugarInformation}>
            <h4 style={{letterSpacing:"1px"}}>INFORMATION</h4>
            <div className={styles.sugarInformationInnerInfo}>
                <a href="https://in.sugarcosmetics.com/stores" style={{textDecoration:"none",color:"grey"}} target={"blank"}><p>Stores</p></a>
                <a href="https://in.sugarcosmetics.com/pages/terms-conditions" style={{textDecoration:"none",color:"grey"}} target={"blank"}><p>Terms & Conditions</p></a>
                <a href="https://in.sugarcosmetics.com/pages/returns-refunds" style={{textDecoration:"none",color:"grey"}} target={"blank"}><p>Return</p></a>
                <a href="https://in.sugarcosmetics.com/pages/faqs" style={{textDecoration:"none",color:"grey"}} target={"blank"}><p>FAQ's</p></a>
                <a href="https://in.sugarcosmetics.com/pages/about-us" style={{textDecoration:"none",color:"grey"}} target={"blank"}><p>About Us</p></a>
            </div>
        </div>
        <div className={styles.sugarGetInTouch}>
            <h4 style={{letterSpacing:"1px"}} >GET IN TOUCH</h4>
            <div className={styles.sugarGetInTouchInnerInfo}>
                <div>
                    <h4 style={{letterSpacing:"1px"}}>Call us at</h4>
                    <p className={styles.sugarConnectInfo}>1800-209-9933</p>
                    <p style={{fontSize:"13px",color:"grey"}}>Monday to Friday: 9 AM to 7 PM</p>
                </div>
                <div>
                    <h4 style={{letterSpacing:"1px"}}>Support</h4>
                    <a href="https://mail.google.com/mail/u/0/" target={"blank"} style={{textDecoration:"none"}}>
                        <p className={styles.sugarConnectInfo}>hello@sugarcosmetics.com</p>
                    </a>
                </div>
                <div>
                    <h4 style={{letterSpacing:"1px"}}>Careers</h4>
                    <a href="https://in.sugarcosmetics.com/careers" target={"blank"} style={{textDecoration:"none"}}>
                        <p className={styles.sugarConnectInfo}>We're hiring!</p>
                    </a>
                </div>
                <div>
                    <h4 style={{letterSpacing:"1px"}}>PRESS & MEDIA</h4>
                    <a href="https://mail.google.com/mail/u/0/" target={"blank"} style={{textDecoration:"none"}}>
                        <p className={styles.sugarConnectInfo}>pr@sugarcosmetics.com</p>
                    </a>
                </div>
                <div>
                    <h4 style={{letterSpacing:"1px"}}>INFLUENCER COLLAB</h4>
                    <a href="https://blog.sugarcosmetics.com/collab" target={"blank"} style={{textDecoration:"none"}}>
                        <p className={styles.sugarConnectInfo}>JOIN US</p>
                    </a>
                </div>
            </div>
        </div>
        <hr className={styles.sugarFooterEndLine} style={{backgroundColor:"#6d8b99"}} />
        <h4 style={{color:"#fff7d6",margin:"auto",textAlign:"center",marginTop:"30px"}}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</h4>
    </div>
  )
}

export default Footer