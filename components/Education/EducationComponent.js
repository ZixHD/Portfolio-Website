
import './EducationComponent.css'

export default function EducationComponent() {
    return (
        <div>
            <p className='header'>Education</p>
            <div className="education-container">
                <img className="logo" src="/image/raf.png" alt="raf image"></img>
                 <div className="content-container">
                    <p className='content-text1'>Bachelor of Computer Science</p>
                    <p className='content-text2'>Union University - School of Computing, Belgrade, Serbia</p>
                    <p className='content-text3'>September 2021 - Present</p>
                </div>
            </div>
        </div>
    )
}