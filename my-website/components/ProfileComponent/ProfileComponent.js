"use client"
import { useState } from 'react';
import './ProfileComponent.css'

export default function ProfileComponent() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="profile-container">
                <div className="image-container">
                     <img className="pfp" src="/me.jpeg" alt="A description of the image" />
                </div>
                <h1 className="fullname">Teodor Jakovljevic</h1>
                <h3 className="fullstack">Full Stack Web Developer</h3>
                <div className="location">
                    <img className="pin" src="/pin.png"></img>
                    <p>Belgrade, Serbia 🇷🇸</p>
                    
                </div>
                <p className="sentence">Building Real Products For Real Clients, Not Just More Projects</p>
                <div className="media-links">
                    <div className="resume-container"  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="resume-content">
                            <img className="resume-img" src={isHovered ? '/document-black.png' : '/document.png'} alt="icon" />
                            <p className="resume-text">Resume</p>
                        </div> 
                    </div>
                    <a href="https://github.com/ZixHD" className="info" target='_blank'>
                        <img src='/github.png' />
                    </a>
                    <a href="https://www.instagram.com/" className="info" target='_blank'>
                        <img src='/instagram.png' />
                    </a>
                    <a href="mailto:jakovljevic.teo@gmail.com" className="info" >
                        <img src='/email.png' alt="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}