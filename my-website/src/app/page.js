import '../../styles/globals.css'
import './page.css'
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import AboutMe from '../../components/AboutMe/AboutMe';
import SkillsComponent from '../../components/Skills/SkillsComponent';

//TODO: Add a custom slider
export default function Home() {
  return (
    <div className="container">
      <ProfileComponent />
      <div className="slider-container">
        <div className="content">
          <AboutMe />
          <SkillsComponent />
         </div>
        </div>
    </div>
  )
}