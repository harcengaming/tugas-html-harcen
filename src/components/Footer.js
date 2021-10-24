import React from 'react'
import '../App.css'
import logoIG from '../images/instagram.png'
import logoFB from '../images/facebook.png'
import logoTW from '../images/twitter.png'
import logoYB from '../images/youtube.png'
import logoGT from '../images/github-sign.png'
import logoWA from '../images/whatsapp.png'
import logoMS from '../images/microsoft.png'

function Footer() {
    return (
        <div className="footer-all">
            <footer>
                &copy; { new Date().getFullYear() } Copyright :  
                <a 
                    href="https://id.reactjs.org/" 
                    rel='noreferrer' 
                    target='_blank'> React JS </a> <br/>

                Created with Visual Studio Code by 
                <a 
                    href="https://www.instagram.com/harcengaming" 
                    rel='noreferrer' 
                    target='_blank'> Bagas Hary Cendekiawan </a>
            </footer>
            <nav>
                <div>
                    <a
                        href="https://www.instagram.com/harcengaming" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoIG}
                        width="50" height="auto"
                        alt="logo instagram"
                        /> 
                    </a> 
                </div>
                <div>
                    <a
                        href="https://www.facebook.com/harcengaming2" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoFB}
                        width="50" height="auto"
                        alt="logo facebook"
                        /> 
                    </a> 
                </div>
                <div>
                    <a
                        href="https://www.twitter.com/harcengaming" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoTW}
                        width="50" height="auto"
                        alt="logo twitter"
                        /> 
                    </a> 
                </div>
                <div>
                    <a
                        href="https://www.youtube.com/c/bagasvergil" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoYB}
                        width="50" height="auto"
                        alt="logo youtube"
                        /> 
                    </a> 
                </div>
                <div>
                    <a
                        href="https://www.github.com/harcengaming" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoGT}
                        width="50" height="auto"
                        alt="logo github"
                        /> 
                    </a> 
                </div>
                <div>
                    <a
                        href="https://wa.me/6285740283454" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoWA}
                        width="50" height="auto"
                        alt="logo whatsapp"
                        /> 
                    </a> 
                </div> 
                <div>
                    <a
                        href="https://docs.microsoft.com/id-id/users/harcengaming/" 
                        rel='noreferrer'
                        target='_blank'>     
                    <img 
                        src={logoMS}
                        width="50" height="auto"
                        alt="logo microsoft"
                        /> 
                    </a> 
                </div>      
            </nav>
        </div>
    )
}

export default Footer