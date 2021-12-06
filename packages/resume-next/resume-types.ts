interface Date {
  day?: number;
  month?: string;
  year: number;
}

export interface About {
  name: {
    first: string;
    last: string;
    full?: string;
  };
  birthDate: Date;
  nationality: string;
  location: {
    city: string;
    country: string;
  };
  contact: {
    email: string;
    website: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
}

interface Certification {
  title: string;
  issuer: string;
  description: string;
  date: Date;
}

export type Certifications = Certification[];

export type Education = EducationItem[];

export interface EducationItem {
  school: string;
  degree: string;
  description?: string;
  dateStart: Date;
  dateEnd?: Date;
  highlights: string[];
}

export type Experience = ExperienceItem[];

export interface ExperienceItem {
  company: string;
  position: string;
  description?: string;
  dateStart: Date;
  dateEnd?: Date;
  highlights: string[];
}

export type InterestItem = string;
export type Interests = InterestItem[];

export interface LanguageCertification {
  name: string;
  issuer: string;
  grade: string;
  date: Date;
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

export type VolunteeringItem = string;

export type Volunteering = VolunteeringItem[];
