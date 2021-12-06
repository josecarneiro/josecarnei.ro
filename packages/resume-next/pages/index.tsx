import { FunctionComponent } from 'react';
import ResumeAbout from '../components/about';
import ResumeExperience from '../components/experience';
import ResumeEducation from '../components/education';
import ResumeSkills from '../components/skills';
import ResumeCertifications from '../components/certifications';
import ResumeLanguages from '../components/languages';
import ResumeVolunteering from '../components/volunteering';

import about from '../data/about.json';
import education from '../data/education.json';
import experience from '../data/experience.json';
import languages from '../data/languages.json';
import skills from '../data/skills.json';
import volunteering from '../data/volunteering.json';
import certifications from '../data/certifications.json';
// import interests from '../data/interests.json';

const HomePage: FunctionComponent = () => (
  <main className="resume">
    <ResumeAbout about={about} />
    <ResumeExperience experience={experience} />
    <ResumeEducation education={education} />
    <ResumeVolunteering volunteering={volunteering} />
    <ResumeLanguages languages={languages} />
    <ResumeCertifications certifications={certifications} />
    <ResumeSkills skills={skills} />
  </main>
);

export default HomePage;
