import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session01() {
  const codeBlockStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '12px 16px',
    borderRadius: '6px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    margin: '12px 0 24px 0'
  };

  return (
    <Layout
      title="Session 01 — Introduction to Version Control Systems, Git, and GitHub"
      description="Introduction to Version Control Systems, Git, and GitHub — History, Types of VCS, Installation, and Basic Repository Actions"
    >
      <CustomLayout>
        <article className="session-content">

          <style>{`
            article code:not(pre code) {
              background-color: #f4f4f4;
              color: #d10057;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: Consolas, Monaco, monospace;
              font-size: 0.9em;
            }
          `}</style>

          <h1>Session 01 — Introduction to Version Control Systems, Git, and GitHub</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding Version Control Systems (VCS), the purpose of Git and GitHub,
            installing Git, creating a GitHub account, and performing basic repository actions.
          </p>

          <p>
            <strong>Practical Environment:</strong> Computer with internet + Git installed + GitHub account
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 1 (Introduction to Version Control Systems, Git, and GitHub)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Outline the evolution of Version Control Systems (VCS)</li>
            <li>Classify different types of VCS</li>
            <li>Define Git and GitHub</li>
            <li>Explain the significance of Git and GitHub in version control</li>
            <li>Explain the installation of Git and Git Desktop</li>
            <li>Illustrate how to create a GitHub account</li>
            <li>Explain basic repository actions using Git and GitHub</li>
          </ul>

          <hr />

          <h2>1. Introduction to Version Control Systems (VCS)</h2>

          <p>
            <strong>Version Control</strong>, also known as Source Control, is the practice of monitoring
            and managing changes to software code (or any set of files) over time.
          </p>

          <p>
            Version Control Systems (VCS) are tools that help software teams manage code alterations.
            They allow multiple developers to work on the same project simultaneously without overwriting
            each other’s work, and they keep a complete history of every change.
          </p>

          <h3>Why Do We Need Version Control?</h3>

          <ul>
            <li>Track every change made to the code</li>
            <li>Revert to previous versions when something breaks</li>
            <li>Collaborate with other developers safely</li>
            <li>Maintain a clear history of who changed what and when</li>
            <li>Support parallel development through branches</li>
          </ul>

          <hr />

          <h2>2. Evolution and Types of Version Control Systems</h2>

          <h3>1. Local Version Control Systems</h3>
          <p>
            Early systems kept versions as simple file copies on the local computer
            (for example, folders named <code>project_v1</code>, <code>project_v2</code>).
            This method is error-prone and does not support collaboration.
          </p>

          <h3>2. Centralized Version Control Systems (CVCS)</h3>
          <p>
            A single central server stores all versions. Developers check out files,
            make changes, and commit them back to the server.
          </p>
          <p>
            <strong>Examples:</strong> CVS, Subversion (SVN), Perforce
          </p>
          <p>
            <strong>Limitation:</strong> If the central server goes down, collaboration stops.
          </p>

          <h3>3. Distributed Version Control Systems (DVCS)</h3>
          <p>
            Every developer has a full copy of the entire repository (including history)
            on their local machine. This makes it possible to work offline and is much more resilient.
          </p>
          <p>
            <strong>Examples:</strong> Git, Mercurial, Bazaar
          </p>

          <hr />

          <h2>3. What is Git?</h2>

          <p>
            <strong>Git</strong> is a free and open-source Distributed Version Control System
            created by <strong>Linus Torvalds</strong> in 2005 for the development of the Linux kernel.
          </p>

          <p>
            Key characteristics of Git:
          </p>

          <ul>
            <li>Distributed (every clone is a full backup)</li>
            <li>Extremely fast</li>
            <li>Strong support for non-linear development (branches and merging)</li>
            <li>Data integrity (uses SHA-1 checksums)</li>
            <li>Free and open source</li>
          </ul>

          <hr />

          <h2>4. What is GitHub?</h2>

          <p>
            <strong>GitHub</strong> is a web-based platform that hosts Git repositories.
            It adds collaboration features on top of Git.
          </p>

          <p>
            Main features of GitHub:
          </p>

          <ul>
            <li>Remote hosting of Git repositories</li>
            <li>Pull Requests (code review and discussion)</li>
            <li>Issues and project boards</li>
            <li>Actions (CI/CD)</li>
            <li>Wiki, Releases, Packages</li>
            <li>Social coding (stars, forks, followers)</li>
          </ul>

          <p>
            <strong>Note:</strong> Git is the tool. GitHub is a popular hosting service that uses Git.
            Other alternatives include GitLab, Bitbucket, and Azure DevOps.
          </p>

          <hr />

          <h2>5. Installing Git</h2>

          <h3>Windows</h3>
          <ol>
            <li>Go to <a href="https://git-scm.com" target="_blank" rel="noopener">https://git-scm.com</a></li>
            <li>Download the latest Windows installer</li>
            <li>Run the installer (accept the default options for beginners)</li>
            <li>Open <strong>Git Bash</strong> or Command Prompt and verify:</li>
          </ol>

          <pre style={codeBlockStyle}>
            <code>{`git --version`}</code>
          </pre>

          <h3>macOS</h3>
          <pre style={codeBlockStyle}>
            <code>{`# Using Homebrew (recommended)
brew install git

# Or download from git-scm.com`}</code>
          </pre>

          <h3>Linux (Ubuntu/Debian)</h3>
          <pre style={codeBlockStyle}>
            <code>{`sudo apt update
sudo apt install git`}</code>
          </pre>

          <h3>Git Desktop (Optional GUI)</h3>
          <p>
            GitHub also provides <strong>GitHub Desktop</strong> — a graphical user interface
            for Git. You can download it from <a href="https://desktop.github.com" target="_blank" rel="noopener">https://desktop.github.com</a>.
          </p>

          <hr />

          <h2>6. Creating a GitHub Account</h2>

          <ol>
            <li>Go to <a href="https://github.com" target="_blank" rel="noopener">https://github.com</a></li>
            <li>Click <strong>Sign up</strong></li>
            <li>Enter a username, email address, and password</li>
            <li>Verify your email address</li>
            <li>Complete the personalization steps (optional)</li>
          </ol>

          <p>
            After registration you will have a profile page:
            <code>https://github.com/your-username</code>
          </p>

          <hr />

          <h2>7. Basic Repository Actions</h2>

          <h3>Create a New Repository on GitHub</h3>
          <ol>
            <li>Log in to GitHub</li>
            <li>Click the <strong>+</strong> icon → <strong>New repository</strong></li>
            <li>Enter a repository name (e.g. <code>my-first-repo</code>)</li>
            <li>Choose Public or Private</li>
            <li>Check “Add a README file” (recommended for beginners)</li>
            <li>Click <strong>Create repository</strong></li>
          </ol>

          <h3>Clone a Repository (Download to your computer)</h3>

          <pre style={codeBlockStyle}>
            <code>{`git clone https://github.com/username/repository-name.git`}</code>
          </pre>

          <h3>Check Status</h3>

          <pre style={codeBlockStyle}>
            <code>{`git status`}</code>
          </pre>

          <h3>Configure Your Identity (Important – do this once)</h3>

          <pre style={codeBlockStyle}>
            <code>{`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}</code>
          </pre>

          <h3>Basic Workflow Overview</h3>

          <pre style={codeBlockStyle}>
            <code>{`# 1. Make changes to files
# 2. Stage the changes
git add .

# 3. Commit the changes
git commit -m "Add project files"

# 4. Push to GitHub
git push origin main`}</code>
          </pre>

          <hr />

          <h2>8. Practical Example – Create Your First Repository</h2>

          <p>Follow these steps carefully:</p>

          <ol>
            <li>Create a new repository on GitHub named <code>hello-git</code> and add a README.</li>
            <li>Clone it to your computer using Git Bash / Terminal.</li>
            <li>Open the folder and create a new file called <code>index.html</code>.</li>
            <li>Add some simple HTML content.</li>
            <li>Run the following commands:</li>
          </ol>

          <pre style={codeBlockStyle}>
            <code>{`git status
git add index.html
git commit -m "Add index.html file"
git push origin main`}</code>
          </pre>

          <p>
            Refresh your GitHub repository page — you should now see the new file.
          </p>

          <hr />

          <h2>9. Best Practices</h2>

          <ul>
            <li>Always configure your name and email before making commits</li>
            <li>Write clear and meaningful commit messages</li>
            <li>Never commit sensitive information (passwords, API keys, etc.)</li>
            <li>Use a <code>.gitignore</code> file to exclude unnecessary files</li>
            <li>Pull the latest changes before starting new work (<code>git pull</code>)</li>
          </ul>

          <hr />

          <h2>Session 01 Exercise</h2>

          <p><strong>Task 1 – Installation &amp; Configuration</strong></p>
          <ol>
            <li>Install Git on your computer.</li>
            <li>Verify the installation with <code>git --version</code>.</li>
            <li>Set your global username and email.</li>
          </ol>

          <p><strong>Task 2 – GitHub Account</strong></p>
          <ol>
            <li>Create a GitHub account (if you don’t have one).</li>
            <li>Create a new public repository named <code>my-learning-repo</code>.</li>
            <li>Add a README file while creating it.</li>
          </ol>

          <p><strong>Task 3 – First Clone &amp; Commit</strong></p>
          <ol>
            <li>Clone the repository to your computer.</li>
            <li>Create a file named <code>about.txt</code> with a short introduction about yourself.</li>
            <li>Stage, commit, and push the file to GitHub.</li>
          </ol>

          <p><strong>Task 4 – Explore</strong></p>
          <ol>
            <li>Open your repository on GitHub and explore the interface (Code, Issues, Pull requests tabs).</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Create a repository called <code>student-portfolio</code>.
          </p>
          <ul>
            <li>Add a <code>README.md</code> that describes who you are and what you are learning.</li>
            <li>Add an <code>index.html</code> file with a simple personal page.</li>
            <li>Make at least two separate commits with meaningful messages.</li>
            <li>Push everything to GitHub and share the repository link.</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the main difference between a Centralized and a Distributed VCS?</li>
            <li>Who created Git and in which year?</li>
            <li>What is the difference between Git and GitHub?</li>
            <li>Which command is used to download a repository from GitHub?</li>
            <li>Why should you run <code>git config --global user.name</code> and <code>user.email</code>?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>What Version Control Systems are and why they are important</li>
            <li>The three main types of VCS (Local, Centralized, Distributed)</li>
            <li>What Git is and why it became so popular</li>
            <li>What GitHub offers on top of Git</li>
            <li>How to install Git and create a GitHub account</li>
            <li>Basic repository actions: create, clone, add, commit, and push</li>
          </ul>

          <p>
            In the next session we will dive deeper into <strong>Basic Git Commands and Commit Management</strong>.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
