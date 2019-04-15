'use strict';

/* globals ReactDOM */

function App() {
  return (
    <div>
      <header role='header'>
        <h1>Sally Student Resume</h1>
      </header>

      <main>
        <section role='region'>
          <address role='contact-info'>
            <p>Name: </p>
            <p>Email: </p>
            <p>Phone Number: </p>
            <p>Address: </p>
          </address>
        </section>

        <section role='region'>
          <h2>Employment History</h2>
          <ul>
            <li>
              <p>Google, Inc</p>
              <p>Software Engineer</p>
              <p>2014-Present</p>
              <p>Did a lot of computer things</p>
            </li>
            <li>
              <p>In and Out Burger</p>
              <p>Line Cook</p>
              <p>1999-2013</p>
              <p>Made amazing hamburgers and stuff</p>
            </li>
          </ul>
        </section>

        <section role='region'>
          <h2>Education</h2>
          <ul>
            <li>
              <p>University of California</p>
              <p>Bachelors of Computer Science</p>
              <p>1999-2003</p>
              <p>GPA: 2.78</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);