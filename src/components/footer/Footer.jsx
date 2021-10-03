import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-descriptions'>
                Home | &nbsp; Terms and Conditions | &nbsp; Privacy Policy | &nbsp;  Collection Statement | &nbsp;  Help | &nbsp;  Manage Account 
            </div>
            <div className='copyright-text'>
                Copyright 2016 DEMO Streaming. All Rights Reserved
            </div>
           <div className='img-footer'>

           <div className='social-images'>
               <div className='div-social'>
                    <img style={{ width:'60px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/social/facebook-white.svg" alt="" />
                </div>
               <div className='div-social'>
                    <img style={{ width:'60px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/social/twitter-white.svg" alt="" />
               </div>
               <div className='div-social'>
                    <img style={{ width:'60px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/social/instagram-white.svg" alt="" />
               </div>
           </div>

           <div className='social-images'>
               <div className='div-social'>
                    <img style={{ width:'200px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/store/app-store.svg" alt="" />
               </div>
               <div className='div-social'>
                    <img style={{ width:'200px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/store/play-store.svg" alt="" />
                </div>

                <div className='div-social'>
                    <img style={{ width:'200px', height:'60px'}} src="http://127.0.0.1:5500/src/assets/store/windows-store.svg" alt="" />
                </div>
           </div>
           </div>
           
        </div>
    )
}

export default Footer
