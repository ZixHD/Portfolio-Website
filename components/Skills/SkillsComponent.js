import './SkillsComponent.css'


export default function SkillsComponent() {
    return (
        <div>
            <p className="header">Skills</p>
            <div className="headers">
                <p className="header-text">Languages</p>
                <div className="chips">
                    <p className="chip-language">Java</p>  
                    <p className="chip-language">JavaScript</p>
                    <p className="chip-language">HTML</p>  
                    <p className="chip-language">CSS</p>     
                </div>
            </div>
            <div className="headers">
                <p className="header-text">Frameworks</p>
                <div className="chips">
                    <p className="chip-framework">Next.js</p>  
                    <p className="chip-framework">React.js</p>
                    <p className="chip-framework">ExpressJS</p>  
                    <p className="chip-framework">VueJS</p>     
                </div>
            </div>
            <div className="headers">
                <p className="header-text">Backend</p>
                <div className="chips">
                    <p className="chip-backend">Node.js</p>  
                    <p className="chip-backend">REST APIs</p>
                    <p className="chip-backend">Microservices</p>  
                </div>
            </div>
            <div className="headers">
                <p className="header-text">Database</p>
                <div className="chips">
                    <p className="chip-database">MySQL</p>
                    <p className="chip-database">PostgreSQL</p> 
                    <p className="chip-database">MongoDB</p>    
                </div>
            </div>
            <div className="headers">
                <p className="header-text">Practises</p>
                <div className="chips">
                    <p className="chip-practises">Git</p>  
                    <p className="chip-practises">Docker</p>
                    <p className="chip-practises">Microservices</p>  
                </div>
            </div>
            
        </div>
    )
}