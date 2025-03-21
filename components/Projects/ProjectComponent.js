import './ProjectComponent.css'

export default function ProjectComponent() {
    return (
        <div className="big-project-container">
            <p className="header">Projects</p>
            <div className="border-container">
                <div className="project-container">
                    <p className="content-text1">ClassyUML: UML Designing Tool </p>
                    <ul className="project-info-container">
                        <li className="project-info">Developed an application in Java that produces UML class diagrams as the final product.</li>
                        <li className="project-info">The project was implemented following varius design patterns such as Singleton, Composite, State, 
                            Observer, Command etc. </li>
                    </ul>
                    <div className="chips">
                        <p className="chip">Java</p>  
                        <p className="chip">UML</p>   
                    </div>
                    <div className="github-container">
                        <a className="github-container" href="https://github.com/ZixHD/ClassyUML" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img className="github-img" src="image/github.png" alt="githib" />
                            <p className="github-text">View Code</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-container">
                <div className="project-container">
                    <p className="content-text1">Weza: Weather Forecast Website</p>
                    <ul className="project-info-container">
                        <li className="project-info">Designed and developed a weather forecast website, leveraging the OpenWeather API to provide real-time weather data to users.</li>
                        <li className="project-info">Built a responsive, user-friendly interface using HTML, CSS, and JavaScript, ensuring a seamless experience across devices.</li>
                        <li className="project-info">Integrated the OpenWeather API to retrieve and display current weather, forecast data, and weather alerts. </li>
                    </ul>
                    <div className="chips">
                        <p className="chip">React.js</p>  
                        <p className="chip">JavaScript</p>  
                        <p className="chip">Html</p>  
                        <p className="chip">CSS</p>  
                    </div>
                    <div className="github-container">
                    <a className="github-container" href="https://github.com/ZixHD/React-Weather-Website" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img className="github-img" src="image/github.png" alt="githib" />
                            <p className="github-text">View Code</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-container">
                <div className="project-container">
                    <p className="content-text1">Tourist Organization Blog</p>
                    <ul className="project-info-container">
                        <li className="project-info">Developed a full-stack application in Java, enabling users to post and read comments. </li>
                        <li className="project-info">Utilized Restful APIs for the backend, providing secure and efficient data handling. </li>
                        <li className="project-info">Designed a friendly user interface with Vue.js, ensuring seamless user interaction and real-time updates.</li>
                    </ul>
                    <div className="chips">
                        <p className="chip">Vue.js</p>  
                        <p className="chip">Java</p>  
                        <p className="chip">Rest.js</p>  
                        <p className="chip">MySQL</p> 
                        <p className="chip">REST API</p> 
                    </div>
                    <div className="github-container">
                    <a className="github-container" href="https://github.com/ZixHD/Web_project" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img className="github-img" src="image/github.png" alt="githib" />
                            <p className="github-text">View Code</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-container">
                <div className="project-container">
                    <p className="content-text1">Pancake shop</p>
                    <ul className="project-info-container">
                        <li className="project-info">Developed a microservices-based application to support an online pancake shop, including user authentication, menu management, and order processing. </li>
                        <li className="project-info">Built a secure authentication server to handle user sign-up, login, and authorization, ensuring a safe and personalized user experience for every customer.</li>
                        <li className="project-info">Designed and implemented a front-end service that interacts with the backend, providing an intuitive user interface for seamless ordering, menu browsing, and account management.</li>
                    </ul>
                    <div className="chips">
                        <p className="chip">Vue.js</p>  
                        <p className="chip">Javascript</p>  
                        <p className="chip">HTML</p>  
                        <p className="chip">CSS</p>  
                    </div>
                    <div className="github-container">
                        <a  className="github-container" href="https://github.com/ZixHD/Pancake-shop" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img className="github-img" src="image/github.png" alt="githib" />
                            <p className="github-text">View Code</p>
                        </a>
                    </div>
                </div>
            </div>
         </div>
    )
}