import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <h2>FOODIE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi tempore asperiores non et incidunt sapiente at nulla! Provident odit dolorem earum vero incidunt molestiae fugiat accusamus! Repellat consequatur natus, eligendi commodi, maiores vel at voluptas ullam officiis itaque impedit deserunt.</p>

            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook icon" />
                <img src={assets.twitter_icon} alt="twitter icon" />
                <img src={assets.linkedin_icon} alt="linkdin icon" />
            </div>
        </div>
        <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-212-321-9182</li>
                <li>contact@foodie.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 &copy; Foodie - All Right Reserved.  
      </p>
    </div>
  )
}

export default Footer
