
import './ExperienceComponent.css'

export default function ExperienceComponent() {
    return (
        <div>
            <p className="header">Experience</p>
            <div className="experience-container">
                <div className="internship-container">
                    <img className="logo" src='/ppnt.jpg' alt="logo"></img>
                    <div className="content-container">
                        <p className='content-text1'>Software Development Intern</p>
                        <p className='content-text2'>PlusPlusNT, Belgrade, Serbia</p>
                        <p className='content-text4'>September 2024 - October 2024</p>
                    </div>
                </div>
                <ul className="experience-list">
                    <li className='experience-item'>Demonstrated proficiency in Angular 4, React, .NET, and microservices.</li>
                    <li className='experience-item'>Developed effective solutions to complex issues and debugged code efficiently.</li>
                    <li className='experience-item'>Adapted to fast-paced development environments and worked with both legacy and modern technologies.</li>
                    <li className='experience-item'>Collaborated with cross-functional teams, enhancing communication and teamwork skills.</li>
                </ul>
                <div className="chips">
                    <p className="chip">Next.js</p>  
                    <p className="chip">Docker</p>  
                    <p className="chip">Nginx</p>  
                </div>
            </div>
        </div>
    )
}