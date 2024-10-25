import '../../styles/globals.css'
import './page.css'
import ProfileComponent from "../../components/Profile/ProfileComponent";
import AboutMe from '../../components/AboutMe/AboutMe';
import SkillsComponent from '../../components/Skills/SkillsComponent';
import ExperienceComponent from '../../components/Experience/ExperienceComponent';
import EducationComponent from '../../components/Education/EducationComponent';
import ProjectComponent from '../../components/Projects/ProjectComponent';

//TODO: Add a custom slider
export default function Home() {
  return (
    <div className="container">
      <ProfileComponent />
      <div className="slider-container">
        <div className="content">
          <AboutMe />
          <SkillsComponent />
          <ExperienceComponent />
          <EducationComponent />
          <ProjectComponent />
         </div>
        </div>
    </div>
  )
}