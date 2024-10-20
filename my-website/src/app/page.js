import '../../styles/globals.css'
import './page.css'
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import AboutMe from '../../components/AboutMe/AboutMe';

export default function Home() {
  return (
    <div className="container">
      <ProfileComponent />
      <div className="content">
        <AboutMe />
      </div>
    </div>
  )
}