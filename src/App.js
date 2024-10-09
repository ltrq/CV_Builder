import './App.css';
import GeneralInfo from './GeneralInfo';
import Template from './Template';
import Education from './Education';
import WorkExperience from './WorkExperience';
import { useState } from 'react';

function App() {
  const initialProfile = {
    name: "Harry Potter",
    email: "harry.potter@hogwarts.com",
    phone: "9876543210",
    address: "4 Privet Drive, Little Whinging, Surrey"
  };

  const initialEducation = {
    school: ["Hogwarts School of Witchcraft and Wizardry"],
    degree: ["Wizarding Education"],
    startDate: ["1991"],
    endDate: ["1998"],
    gpa: ["N/A"],
    location: ["Scotland"],
    description: ["Graduated with honors, specializing in Defense Against the Dark Arts."],
    isHidden: [false]
  };

  const initialWorkExperience = {
    company: ["Ministry of Magic"],
    position: ["Auror"],
    startDate: ["1998"],
    endDate: ["Present"],
    location: ["London"],
    description: ["Working to protect the wizarding world from dark forces."],
    isHidden: [false]
  };

  const blankProfile = {
    name: "",
    email: "",
    phone: "",
    address: ""
  };

  const blankEducation = {
    school: [],
    degree: [],
    startDate: [],
    endDate: [],
    gpa: [],
    location: [],
    description: [],
    isHidden: [false]
  };

  const blankWorkExperience = {
    company: [],
    position: [],
    startDate: [],
    endDate: [],
    location: [],
    description: [],
    isHidden: [false]
  };

  const [profile, setProfile] = useState(initialProfile);
  const [education, setEducation] = useState(initialEducation);
  const [workExperience, setWorkExperience] = useState(initialWorkExperience);

  // General function to update profile fields
  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  // General function to update education fields
  const updateEducation = (field, value) => {
    setEducation(prev => ({ ...prev, [field]: value }));
  };

  // General function to update work experience fields
  const updateWorkExperience = (field, value) => {
    setWorkExperience(prev => ({ ...prev, [field]: value }));
  };

  const loadExampleCV = () => {
    setProfile(initialProfile);
    setEducation(initialEducation);
    setWorkExperience(initialWorkExperience);
  };

  const ResetCV = () => {
    setProfile(blankProfile);
    setEducation(blankEducation);
    setWorkExperience(blankWorkExperience);
  };

  return (
    <div className="container App">
      <div className='sidebar-container'>
        
        <div className="sidebar">
        <div className="button-container">
            <button onClick={loadExampleCV}>Load Example</button>
            <button onClick={ResetCV}>Reset CV</button>
          </div>
          <GeneralInfo profile={profile} updateProfile={updateProfile} />
          <Education education={education} updateEducation={updateEducation} />
          <WorkExperience workExperience={workExperience} updateWorkExperience={updateWorkExperience} />
        </div>
        </div>
        <div className="main-content">
          <Template profile={profile} education={education} workExperience={workExperience} />
        </div>
      
    </div>
  );
}

export default App;