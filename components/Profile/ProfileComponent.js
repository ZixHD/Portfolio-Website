"use client"
import { useState } from 'react';
import './ProfileComponent.css'

export default function ProfileComponent() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="profile-container">
                <div className="image-container">
                     <img className="pfp" src="image/me.jpeg" alt="A description of the image" />
                </div>
                <h1 className="fullname">Teodor Jakovljevic</h1>
                <h3 className="fullstack">Full Stack Web Developer</h3>
                <div className="location">
                    <img className="pin" src="image/pin.png"></img>
                    <p>Belgrade, Serbia 🇷🇸</p>
                    
                </div>
                <p className="sentence">Building Real Products For Real Clients, Not Just More Projects</p>
                <div className="media-links">
                    <div className="resume-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <a href="pdf/Teodor_JakovljevicCV.pdf" download style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="resume-content">
                                <img className="resume-img" src={isHovered ? 'image/document-black.png' : 'image/document.png'} alt="icon" />
                                <p className="resume-text">Resume</p>
                            </div> 
                       </a>
                    </div>
                    <a href="https://github.com/ZixHD" className="info git" target='_blank'>
                        <img src='image/github.png' />
                    </a>
                     <a href="https://www.linkedin.com/in/teodor-jakovljević-499293296" className="info link" target='_blank'>
                        <img src='image/linkedin1.png' />
                    </a>
                    <a href="https://www.instagram.com/" className="info ig" target='_blank'>
                        <img src='image/instagram.png' />
                    </a>
                    <a href="mailto:jakovljevic.teo@gmail.com" className="info mail" >
                        <img src='image/email.png' alt="icon" />
                    </a>
                     
                </div>
            </div>
        </div>
    )
}