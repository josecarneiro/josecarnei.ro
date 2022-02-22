// import Button from '../components/button.js';
// import Header from '../components/header';

import Introduction from '../components/Introduction';

const HomePage = () => {
  return (
    <main>
      <Introduction />
      <section>
        <h2>Work</h2>
        <article>
          <h3>Mercedes-Benz.io</h3>
          <h5>Senior Front-end Developer</h5>
          <p>
            Lead the development of a financing client-facing web application,
            using TypeScript, Vue.js and a micro-frontends architecture.
          </p>
          <p>
            Developed a car recommendation application with client-side machine
            learning using React.js, Brain.js, Next.js and Three.js.
          </p>
        </article>
        <article>
          <h3>Ironhack</h3>
          <h5>
            Lead Instructor <em>- Full-time, August 2019 to September 2020</em>
          </h5>
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
        </article>
        <article>
          <h3>iindie</h3>
          <h5>Co-Founder, Lead Developer</h5>
          <p>
            Built a ecommerce company focused on the sale of digital goods. Used
            Node.js, GraphQL, Vue.js, AWS Lambdas.
          </p>
        </article>
        <article>
          <h3>BOLD International</h3>
          <h5>Full-stack Developer, Consultant</h5>
          <p>Worked as a consultant.</p>
          <article>
            <h4>Sapo</h4>
            <p>
              Built client using a micro-front end architecture. Used Parcel,
              TypeScript, JavaScript, Vue.js. Built internal native applications
              using React Native.
            </p>
          </article>
          <article>
            <h4>EDP</h4>
            <p>
              Worked on the development of EDP Online, the largest customer
              self-care portal in Portugal, allowing users to manage energy
              consumption, billing and contracting. Worked with Vanilla
              JavaScript, Less, Angular.js, Angular.
            </p>
          </article>
        </article>
        <article>
          <h3>Independent Work</h3>
          <h5>Full-stack Developer, Freelancer</h5>
          <p>
            Built web applications for over 10 clients, with multiple
            technologies. Vue.js, Wordpress, Ghost,
          </p>
        </article>
      </section>
      <section>
        <h2>Education</h2>
        <article>
          <h3>Católica Lisbon School of Business and Economics</h3>
          <h5>Business Management and Administration Graduate</h5>
          <p>
            Top Business university in Portugal. Focused on strategy, operations
            management, project management and data modeling.
          </p>
        </article>
      </section>
      <section>
        <h2>Certifications</h2>
        <p>Google Certified Mobile Web Specialist</p>
        <p>Cambridge FCE, Grade A</p>
      </section>
      <section>
        <h2>Volunteering</h2>
        <h3>Require(&#39;lx&#39;)</h3>
        <h5>Organizer</h5>
        <p>
          Organized Lisbon&#39;s largest JavaScript developer meet up for a
          group of over 2.200 developers.
        </p>
        <h3>Vue.js Lisbon</h3>
        <h5>Founder, Organizer</h5>
        <p>
          Founded Lisbon&#39;s only regularly held meetup targeting Vue.js
          developers.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
