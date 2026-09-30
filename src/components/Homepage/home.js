import React from "react";
import Link from "@docusaurus/Link";

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <h1>Git &amp; GitHub Course Guide</h1>

        <p>
          Welcome to the <strong>Git &amp; GitHub Course</strong>.
        </p>

        <p>
          This course takes you from the fundamentals of Version Control Systems
          to advanced Git techniques, including branching, merging, conflict
          resolution, GitHub collaboration, AI integration, and Continuous
          Integration / Continuous Deployment (CI/CD).
        </p>

        {/* Course Levels */}
        <section>
          <h2>Course Levels</h2>

          <h3>Beginner</h3>
          <ul>
            <li>Introduction to Version Control Systems, Git, and GitHub</li>
            <li>Basic Git Commands and Commit Management</li>
          </ul>

          <h3>Intermediate</h3>
          <ul>
            <li>Branching, Merging, and Conflict Resolution</li>
            <li>Advanced Git Commands and Operations</li>
          </ul>

          <h3>Advanced</h3>
          <ul>
            <li>AI Integration with GitHub</li>
            <li>Continuous Integration / Continuous Deployment (CI/CD)</li>
          </ul>
        </section>

        {/* Course Structure */}
        <section>
          <h2>Course Structure</h2>
          <p>
            The course contains <strong>6 sessions</strong>, with each session
            lasting approximately <strong>2 hours</strong>.
          </p>
          <p>
            These guides are prepared according to the official Aptech book so
            that students can follow both the book and practical examples easily.
          </p>
        </section>

        {/* Student Expectations */}
        <section>
          <h2>Student Expectations</h2>
          <p>Students are expected to:</p>
          <ol>
            <li>Read the lesson material carefully.</li>
            <li>Practice all Git commands themselves in the terminal.</li>
            <li>Complete the exercises and challenges.</li>
            <li>Create and manage repositories on GitHub.</li>
            <li>Practice outside the classroom regularly.</li>
          </ol>
        </section>

        <hr />

        {/* Sessions */}
        <section>
          <h2>Sessions</h2>
          <p>Start with:</p>
          <ul>
            <li>
              <Link to="/sessions/session-01">
                Session 01 — Introduction to Version Control Systems, Git, and GitHub
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-02">
                Session 02 — Basic Git Commands and Commit Management
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-03">
                Session 03 — Branching, Merging, and Conflict Resolution
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-04">
                Session 04 — Advanced Git Commands and Operations
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-05">
                Session 05 — AI Integration with GitHub
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-06">
                Session 06 — Continuous Integration / Continuous Deployment
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
