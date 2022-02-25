import ResumeAbout from '../components/about';
import ResumeExperience from '../components/experience';
import ResumeEducation from '../components/education';
import ResumeCertifications from '../components/certifications';
import ResumeLanguages from '../components/languages';
import ResumeVolunteering from '../components/volunteering';

import about from '../data/about.json';
import education from '../data/education.json';
import experience from '../data/experience.json';
import languages from '../data/languages.json';
import volunteering from '../data/volunteering.json';
import certifications from '../data/certifications.json';

import type { NextPage } from 'next';

const HomePage: NextPage = () => (
  <main className="resume">
    <ResumeAbout about={about} />
    <ResumeExperience experience={experience} />
    <ResumeEducation education={education} />
    <ResumeCertifications certifications={certifications} />
    <ResumeVolunteering volunteering={volunteering} />
    <ResumeLanguages languages={languages} />
  </main>
);

export default HomePage;
