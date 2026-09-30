import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
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
      title="Session 02 — Basic Git Commands and Commit Management"
      description="Basic Git Commands and Commit Management — init, clone, status, add, commit, log, and remote synchronization"
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

          <h1>Session 02 — Basic Git Commands and Commit Management</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Learning essential Git commands for initializing repositories,
            checking status, staging files, committing changes, viewing history, and synchronizing
            with remote repositories.
          </p>

          <p>
            <strong>Practical Environment:</strong> Git Bash / Terminal + GitHub account
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 2 (Basic Git Commands and Commit Management)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>List and describe basic Git commands</li>
            <li>Explain branch management (introduction)</li>
            <li>Outline synchronization between local and remote repositories</li>
          </ul>

          <hr />

          <h2>1. Basic Git Commands Overview</h2>

          <p>
            Git is a powerful Version Control System that helps developers manage their codebases.
            The following are the essential commands every developer should know.
          </p>

          <hr />

          <h2>2. Initializing a Repository – <code>git init</code></h2>

          <p>
            The <code>git init</code> command creates a new Git repository in the current directory.
            It creates a hidden <code>.git</code> folder that stores all the version history.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Navigate to your project folder
cd my-project

# Initialize a new Git repository
git init`}</code>
          </pre>

          <p>
            After running this command, Git starts tracking the folder.
          </p>

          <hr />

          <h2>3. Cloning a Repository – <code>git clone</code></h2>

          <p>
            Use <code>git clone</code> to download an existing repository from GitHub (or any remote)
            to your local machine.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`git clone https://github.com/username/repository-name.git

# Clone into a specific folder name
git clone https://github.com/username/repository-name.git my-folder`}</code>
          </pre>

          <hr />

          <h2>4. Checking Status – <code>git status</code></h2>

          <p>
            This is one of the most frequently used commands. It shows the current state of your working directory.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`git status`}</code>
          </pre>

          <p>It tells you:</p>
          <ul>
            <li>Which files are modified</li>
            <li>Which files are staged (ready to commit)</li>
            <li>Which files are untracked</li>
            <li>The current branch name</li>
          </ul>

          <hr />

          <h2>5. Staging Files – <code>git add</code></h2>

          <p>
            Before committing, you must stage the files you want to include in the next commit.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Stage a specific file
git add index.html

# Stage multiple files
git add index.html style.css

# Stage all changes in the current directory
git add .

# Stage all changes (including deletions)
git add -A`}</code>
          </pre>

          <hr />

          <h2>6. Committing Changes – <code>git commit</code></h2>

          <p>
            A commit is a snapshot of your staged changes. Always write a clear and meaningful message.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Commit with a message
git commit -m "Add homepage layout"

# Commit and open the default editor for a longer message
git commit`}</code>
          </pre>

          <h3>Good Commit Message Examples</h3>
          <ul>
            <li><code>Add navigation bar to homepage</code></li>
            <li><code>Fix login form validation bug</code></li>
            <li><code>Update README with installation steps</code></li>
            <li><code>Remove unused CSS files</code></li>
          </ul>

          <h3>Bad Commit Messages (Avoid these)</h3>
          <ul>
            <li><code>update</code></li>
            <li><code>changes</code></li>
            <li><code>fix</code></li>
            <li><code>asdf</code></li>
          </ul>

          <hr />

          <h2>7. Viewing Commit History – <code>git log</code></h2>

          <pre style={codeBlockStyle}>
            <code>{`# Full history
git log

# One line per commit (cleaner)
git log --oneline

# Show last 5 commits
git log -5 --oneline

# Show graph of branches
git log --oneline --graph --all`}</code>
          </pre>

          <hr />

          <h2>8. Working with Remote Repositories</h2>

          <h3>Check Remote</h3>
          <pre style={codeBlockStyle}>
            <code>{`git remote -v`}</code>
          </pre>

          <h3>Add a Remote</h3>
          <pre style={codeBlockStyle}>
            <code>{`git remote add origin https://github.com/username/repository-name.git`}</code>
          </pre>

          <h3>Push Changes to GitHub</h3>
          <pre style={codeBlockStyle}>
            <code>{`# First time pushing a branch
git push -u origin main

# Later pushes
git push`}</code>
          </pre>

          <h3>Pull Latest Changes</h3>
          <pre style={codeBlockStyle}>
            <code>{`git pull origin main`}</code>
          </pre>

          <h3>Fetch (Download without merging)</h3>
          <pre style={codeBlockStyle}>
            <code>{`git fetch origin`}</code>
          </pre>

          <hr />

          <h2>9. Complete Basic Workflow</h2>

          <p>Here is the typical daily workflow:</p>

          <pre style={codeBlockStyle}>
            <code>{`# 1. Check current status
git status

# 2. Stage the files you want to commit
git add .

# 3. Commit with a clear message
git commit -m "Describe what you changed"

# 4. Push to GitHub
git push origin main

# 5. (Optional) Pull latest changes from others
git pull origin main`}</code>
          </pre>

          <hr />

          <h2>10. Useful Extra Commands</h2>

          <pre style={codeBlockStyle}>
            <code>{`# See the difference of unstaged changes
git diff

# See the difference of staged changes
git diff --staged

# Remove a file from staging (unstage)
git restore --staged filename

# Discard local changes in a file
git restore filename

# Rename a file (Git will detect it)
git mv oldname.txt newname.txt`}</code>
          </pre>

          <hr />

          <h2>11. Practical Example – Full Cycle</h2>

          <p>Follow these steps in order:</p>

          <ol>
            <li>Create a new folder called <code>git-practice</code></li>
            <li>Initialize a Git repository</li>
            <li>Create a file named <code>hello.txt</code> and write some text</li>
            <li>Check status → stage the file → commit it</li>
            <li>Create a repository on GitHub</li>
            <li>Connect the local repository to GitHub and push</li>
          </ol>

          <pre style={codeBlockStyle}>
            <code>{`mkdir git-practice
cd git-practice
git init
echo "Hello Git!" > hello.txt
git status
git add hello.txt
git commit -m "Add hello.txt file"
git branch -M main
git remote add origin https://github.com/your-username/git-practice.git
git push -u origin main`}</code>
          </pre>

          <hr />

          <h2>12. Best Practices</h2>

          <ul>
            <li>Commit often with small, logical changes</li>
            <li>Write clear and descriptive commit messages</li>
            <li>Always run <code>git status</code> before adding and committing</li>
            <li>Pull before you push when working with others</li>
            <li>Never commit sensitive data (passwords, API keys, .env files)</li>
            <li>Use a <code>.gitignore</code> file from the beginning of the project</li>
          </ul>

          <hr />

          <h2>Session 02 Exercise</h2>

          <p><strong>Task 1 – Initialize &amp; First Commit</strong></p>
          <ol>
            <li>Create a folder named <code>my-git-lab</code>.</li>
            <li>Initialize a Git repository inside it.</li>
            <li>Create two files: <code>index.html</code> and <code>style.css</code>.</li>
            <li>Stage both files and make your first commit.</li>
          </ol>

          <p><strong>Task 2 – View History</strong></p>
          <ol>
            <li>Make two more changes to the files and create two additional commits.</li>
            <li>View the commit history using <code>git log --oneline</code>.</li>
          </ol>

          <p><strong>Task 3 – Connect to GitHub</strong></p>
          <ol>
            <li>Create a new repository on GitHub.</li>
            <li>Add the remote origin and push your local commits.</li>
          </ol>

          <p><strong>Task 4 – Status &amp; Diff Practice</strong></p>
          <ol>
            <li>Modify a file but do not stage it.</li>
            <li>Run <code>git status</code> and <code>git diff</code> and observe the output.</li>
            <li>Stage the file and run <code>git diff --staged</code>.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Create a small project called <code>personal-notes</code>:
          </p>

          <ul>
            <li>Initialize Git</li>
            <li>Add a <code>README.md</code> explaining the project</li>
            <li>Add at least 3 text or markdown files</li>
            <li>Make at least 4 meaningful commits</li>
            <li>Push the complete project to GitHub</li>
            <li>Share the repository link</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the difference between <code>git init</code> and <code>git clone</code>?</li>
            <li>Which command shows the current state of your working directory?</li>
            <li>What does <code>git add .</code> do?</li>
            <li>Why should commit messages be clear and descriptive?</li>
            <li>What is the purpose of <code>git push -u origin main</code>?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to initialize a new repository with <code>git init</code></li>
            <li>How to clone an existing repository</li>
            <li>How to check status, stage files, and create commits</li>
            <li>How to view commit history</li>
            <li>How to connect a local repository to GitHub and push/pull changes</li>
            <li>The standard daily Git workflow</li>
          </ul>

          <p>
            In the next session we will learn about <strong>Branching, Merging, and Conflict Resolution</strong> —
            one of the most powerful features of Git.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
