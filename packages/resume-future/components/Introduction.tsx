import type { FunctionComponent } from 'react';

const Introduction: FunctionComponent = () => (
  <header>
    <h1>José Maria Carneiro</h1>
    <h3>Full-stack Developer based in Lisbon, Portugal</h3>
    <ul>
      <li>
        <strong>Email:</strong>{' '}
        <a href="mailto:contact@josecarnei.ro">contact@josecarnei.ro</a>
      </li>
      <li>
        <strong>Website:</strong>{' '}
        <a href="https://josecarnei.ro">josecarnei.ro</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{' '}
        <a href="https://linkedin.com/in/josemcarneiro">josemcarneiro</a>
      </li>
      <li>
        <strong>GitHub:</strong>{' '}
        <a href="https://github.com/josecarneiro">josecarneiro</a>
      </li>
    </ul>
  </header>
);

export default Introduction;
