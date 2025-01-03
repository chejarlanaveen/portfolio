import RespnsiveAppBar from './AppBar.js';
import  ResponsiveGrid from './skills.js';
import ProfileContainer from './profile.js';
import ProjectsSection from './project.js';
import EducationSection from './education.js';
import CertificationsSection from './certfication.js';
import ExperienceSection from './experience.js';
import ContactUsSection from './contactus.js';
import './App.css'
function App(){
  return(
    <div className='div'>
    <RespnsiveAppBar/>
    <ProfileContainer/>
    <EducationSection />
    < ResponsiveGrid/>
    <ProjectsSection/>
    <CertificationsSection/>
    <ExperienceSection/>
    <ContactUsSection/>
    </div>
   
  )
}

export default App;

