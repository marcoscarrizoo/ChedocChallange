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
                    <img className='images-social' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/social/facebook-white.svg" alt="facebook" />
                </div>
               <div className='div-social'>
                    <img className='images-social' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/social/instagram-white.svg" alt="twitter" />
               </div>
               <div className='div-social'>
                    <img className='images-social' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/social/twitter-white.svg" alt="instagram" />
               </div>
           </div>

           <div className='social-images'>
               <div className='div-social'>
                    <img className='images-store' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/store/app-store.svg" alt="app store" />
               </div>
               <div className='div-social'>
                    <img className='images-store' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/store/play-store.svg" alt="play store" />
                </div>

                <div className='div-social'>
                    <img className='images-store' src="https://raw.githubusercontent.com/chedoc/prueba-tecnica-react-developer/b20e16bd684c36711a93702649f478c43f421d64/assets/store/windows-store.svg" alt="windows store" />
                </div>
           </div>
           </div>
           
        </div>
    )
}

export default Footer
