export interface ResumeDate {
  day?: number;
  month?: string;
  year: number;
}

export interface About {
  name: {
    first: string;
    last: string;
  };
  highlights: {
    name: string;
    value: string;
    href?: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  date: ResumeDate;
}

export type Certifications = Certification[];

export type Education = EducationItem[];

export interface EducationItem {
  school: string;
  degree: string;
  description?: string;
  dateStart: ResumeDate;
  dateEnd?: ResumeDate;
  highlights: string[];
}

export type Experience = ExperienceItem[];

export interface ExperienceItem {
  company: string;
  position: string;
  description?: string;
  dateStart: ResumeDate;
  dateEnd?: ResumeDate;
  highlights: string[];
}

export type InterestItem = string;
export type Interests = InterestItem[];

export interface LanguageCertification {
  name: string;
  issuer: string;
  grade: string;
  date: ResumeDate;
}

export interface LanguageItem {
  name: string;
  native?: boolean;
  orality?: string;
  comprehension?: string;
  writing?: string;
  certifications?: LanguageCertification[];
}

export type Languages = LanguageItem[];

export interface IndividualSkill {
  name: string;
  value: string;
}

export interface SkillItem {
  category: string;
  list: IndividualSkill[];
}

export type Skills = SkillItem[];

export type LegacyVolunteeringItem = string;

export type LegacyVolunteering = LegacyVolunteeringItem[];

export interface VolunteeringItem {
  cause: string;
  description?: string;
  role: string;
  dateStart: ResumeDate;
  dateEnd?: ResumeDate;
  highlights?: string[];
}

export type Volunteering = VolunteeringItem[];
