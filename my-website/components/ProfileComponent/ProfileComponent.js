import './ProfileComponent.css'

export default function ProfileComponent() {

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
                    <div className="resume-container">
                        <div className="resume-content">
                            {/* resume */}
                            <img src=""></img>
                            <p>Resume</p>
                        </div> 
                    </div>
                    <a href="https://github.com/ZixHD" className="info" target='_blank'>
                        <img src='/github.png' />
                    </a>
                    <img className="info" src='/instagram.png' />
                    {/* //mail */}
                    <img></img>
                    
                </div>
            </div>
        </div>
    )
}