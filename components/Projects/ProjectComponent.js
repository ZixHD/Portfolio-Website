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
                    <p className="content-text1">Banking Software Platform</p>
                    <ul className="project-info-container">
                        <li className="project-info">Contributed to the development of a full-featured banking platform as part of a 20-person team, supporting core services such as currency exchange, money transfers, account management, and actuarial processing.</li>
                        <li className="project-info">Worked on both backend and frontend: implemented RESTful APIs in Java Spring, and built responsive UI components using React.</li>
                        <li className="project-info">Containerized services using Docker and deployed them on a Kubernetes (K8s) cluster for high availability and scalability. </li>
                        <li className="project-info">Ensured secure and efficient communication between microservices, following best practices in API design and software architecture.</li>
                    </ul>
                    <div className="chips">
                        <p className="chip">React.js</p>  
                        <p className="chip">Java</p>  
                        <p className="chip">Docker</p>  
                        <p className="chip">PostgreSQL</p>  
                    </div>
                    <div className="github-container">
                    <a className="github-container" href="https://github.com/ZixHD/Banka-1-Frontend" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
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