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
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaSquareXTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
            </div>
        </div>
    )
}

export default Footer