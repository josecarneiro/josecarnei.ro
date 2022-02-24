import { FunctionComponent } from 'react';
import { Skills } from '../resume-types';

interface ResumeSkillsProps {
  skills: Skills;
}

const ResumeSkills: FunctionComponent<ResumeSkillsProps> = ({ skills }) => (
  <section className="resume__section--skills">
    <h2>Skills</h2>
    <p>
      {skills.map(({ category, list }) => (
        <span key={category}>
          <strong>{category}</strong>
          {list.map(({ name, value }) => (
            <>
              <em>{name}</em>
              <span>{value}</span>
            </>
          ))}
        </span>
      ))}
    </p>
  </section>
);

export default ResumeSkills;
