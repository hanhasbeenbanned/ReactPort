const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Dev Resume</h1>
        <p>Utah | Full-Stack Dev | hannahbry05@gmail.com</p>
        <p>
          <a href="/Contact" target="_blank" rel="noopener noreferrer">Contact</a> | 
          <a href="https://linkedin.com/in/hannah-bryant-18a77024b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>

      <section className="objective">
        <h2>Objective</h2>
        <p>
          Motivated and creative Full Stack Web Development bootcamp student nearing graduation, 
          eager to leverage skills in front-end and back-end technologies to build impactful, 
          user-focused web solutions.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <p>
            <strong>Full Stack Web Development Bootcamp</strong><br />
            U of U, edX Full Stack Bootcamp - <em>Expected Graduation: April 2025</em><br />
            Intensive training in HTML, CSS, JavaScript, Typescript, React, Node.js, Express, MongoDB, and more.<br />
            Hands-on experience building responsive, dynamic web applications.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, TypeScript, React, Responsive Design</li>
          <li><strong>Back-End:</strong> Node.js, Express, Python, TypeScript, RESTful APIs</li>
          <li><strong>Database:</strong> MongoDB, SQL, GraphQL</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Figma, Canva, Procreate</li>
          <li><strong>Attributes:</strong> Problem-solving, teamwork, attention to detail, creativity</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li><strong>Best in Show, Web Design</strong> – Utah Digital Media Arts Festival, 2023</li>
          <li>Awarded for outstanding creativity, usability, and technical execution.</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p>
          See more details on the <a href="/Portfolio">Portfoilo page</a>.
        </p>
      </section>
    </div>
  );
};

export default Resume;