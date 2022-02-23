import ResumeEntry from '../components/ResumeEntry';
import ResumeIntroduction from '../components/ResumeIntroduction';
import ResumeSection from '../components/ResumeSection';

import type { Contact } from '../components/ResumeIntroduction';

const CONTACTS: Contact[] = [
  {
    name: 'Email',
    href: 'mailto:contact@josecarnei.ro',
    value: 'contact@josecarnei.ro'
  },
  { name: 'Website', href: 'https://josecarnei.ro', value: 'josecarnei.ro' },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/josemcarneiro',
    value: 'josemcarneiro'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/josecarneiro',
    value: 'josecarneiro'
  }
];

const HomePage = () => {
  return (
    <main>
      <ResumeIntroduction contacts={CONTACTS} />
      <ResumeSection title="Work">
        <ResumeEntry
          institution={{
            name: 'Mercedes-Benz.io'
          }}
          roles={[
            {
              name: 'Senior Front-end Developer',
              period: 'September 2020 - Present Day'
            }
          ]}
        >
          <p>
            Lead the development of a financing client-facing web application,
            using TypeScript, Vue.js and a micro-frontends architecture,
            following SCRUM framework.
          </p>
          <p>
            Developed a car recommendation application with client-side machine
            learning using TypeScript, React, Brain.js, Next.js, Three.js,
            Node.js and GraphQL.
          </p>
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'Ironhack',
            description: 'Global Tech School'
          }}
          roles={[
            {
              name: 'Lead Instructor, European Remote Campus',
              period: 'Part-time, September 2020 - Present Day'
            },
            {
              name: 'Lead Instructor',
              period: 'July 2019 - August 2020'
            }
          ]}
        >
          <p>
            Instructed the web development bootcamp for over 160 students, with
            over 3.300 teaching hours, and managing over 20 teacher assistants,
            in both in-person full-time format as well as in part-time remote
            format.
          </p>
          <p>
            Covered common mobile-first web development topics with a strong
            focus on modern JavaScript, semantic HTML5, CSS3 and SCSS. Node.js,
            MongoDB, Heroku and Netlify.
          </p>
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'iindie',
            description: 'Ecommerce Startup'
          }}
          roles={[
            {
              name: 'Co-Founder, Lead Developer',
              period: 'September 2018 - December 2019'
            }
          ]}
        >
          <p>
            Built a ecommerce company focused on the sale of digital goods. Used
            Node.js, GraphQL, Vue.js, AWS Lambdas.
          </p>
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'BOLD International',
            description:
              'Information Technology and Telecommunications Consulting Firm'
          }}
          roles={[
            {
              name: 'Full-stack Developer',
              period: 'August 2017 - September 2018'
            }
          ]}
        >
          <p>
            Built a ecommerce company focused on the sale of digital goods. Used
            Node.js, GraphQL, Vue.js, AWS Lambdas.
          </p>
          <ResumeEntry institution={{ name: 'Sapo' }}>
            <p>
              Built client using a micro-front end architecture. Used Parcel,
              TypeScript, JavaScript, Vue.js. Built internal native applications
              using React Native.
            </p>
          </ResumeEntry>
          <ResumeEntry institution={{ name: 'EDP' }}>
            <p>
              Worked on the development of EDP Online, the largest customer
              self-care portal in Portugal, allowing users to manage energy
              consumption, billing and contracting. Worked with Vanilla
              JavaScript, Less, Angular.js, Angular.
            </p>
          </ResumeEntry>
        </ResumeEntry>
        <ResumeEntry
          institution={{ name: 'Independent Consulting' }}
          roles={[
            {
              name: 'Full-stack Developer, Freelancer',
              period: 'June 2012 - July 2017'
            }
          ]}
        >
          <p>
            Built web applications for over 10 clients, with multiple
            technologies. Vue.js, Wordpress, Ghost,
          </p>
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'ANACOM',
            description:
              "Portugal's Regulatory Authority for the communications sector"
          }}
          roles={[{ name: 'Intern', period: 'September 2012 - December 2012' }]}
        >
          <p>
            Processing and validation of financial information regarding telecom
            operators and carriers using SQL, Excel and Access.
          </p>
          <p>
            Verification and comparison of offers promoted by telecom operators
            and the ones loaded into ANACOM’s “Observatório Tarifário”.
          </p>
        </ResumeEntry>
      </ResumeSection>
      <ResumeSection title="Education">
        <ResumeEntry
          institution={{
            name: 'Católica Lisbon School of Business and Economics',
            description:
              '#23 Business School worldwide according to 2021 Financial Times ranking'
          }}
          roles={[{ name: 'Business Management and Administration' }]}
        >
          <p>
            Top Business university in Portugal. Focused on strategy, operations
            management, project management and data modeling.
          </p>
        </ResumeEntry>
      </ResumeSection>
      <ResumeSection title="Certifications">
        <p>Google Certified Mobile Web Specialist</p>
        <p>Cambridge FCE, Grade A</p>
      </ResumeSection>
      <ResumeSection title="Languages">
        <p>
          Portuguese, Native Speaker. English, profecient. Spanish, advanced.
        </p>
      </ResumeSection>
      <ResumeSection title="Volunteering">
        <ResumeEntry
          institution={{
            name: 'Require("lx")',
            description:
              "Lisbon's largest JavaScript developer montly meet up for a group of over 2.200 developers."
          }}
          roles={[{ name: 'Organizer', period: '2018 - Present Day' }]}
        >
          {/* <p>
            Organized Lisbon&#39;s largest JavaScript developer meet up for a
            group of over 2.200 developers.
          </p> */}
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'Vue.js Lisbon',
            description: 'Founder, Organizer'
          }}
          roles={[{ name: 'Organizer', period: '2019 - Present Day' }]}
        >
          <p>
            Founded Lisbon&#39;s only regularly held meetup targeting Vue.js
            developers.
          </p>
        </ResumeEntry>
        <ResumeEntry
          institution={{
            name: 'United Nations Connect For Effect',
            description:
              'Global Hackathon aiming to tackle Sustainable Development Goals'
          }}
          roles={[{ name: 'Organizer', period: '2017' }]}
        />
        <ResumeEntry
          institution={{ name: 'Web Summit' }}
          roles={[{ name: 'Volunteer Organizer', period: '2018 - 2019' }]}
        />
        <ResumeEntry
          institution={{
            name: 'BET - Bring Entrepreneurs Together',
            description:
              'Global Hackathon aiming to tackle Sustainable Development Goals'
          }}
          roles={[{ name: 'Team Member', period: '2012 - 2017' }]}
        />
        <ResumeEntry
          institution={{ name: 'AIESEC' }}
          roles={[{ name: 'Team Member', period: '2012 - 2014' }]}
        />
        <ResumeEntry
          institution={{ name: 'Banco Alimentar, Lisboa' }}
          roles={[{ name: 'Volunteer', period: '2011 - 2015' }]}
        />
      </ResumeSection>
    </main>
  );
};

export default HomePage;
