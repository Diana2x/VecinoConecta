import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                    <h3>Developed by CodeNinjas</h3>
                    <div className="social">
                    <a href="https://www.facebook.com"><FaFacebook className='icon' /> </a>
                    <a href="https://www.instagram.com"><FaInstagram className='icon'/></a>
                    <a href="https://twitter.com"><FaSquareXTwitter className='icon'/></a>
                    <a href="https://www.pinterest.com"><FaPinterest className='icon'/></a>
                    <a href="https://www.youtube.com"><FaYoutube className='icon'/></a>
                    </div>
            </div>
        </div>
    )
}

export default Footer