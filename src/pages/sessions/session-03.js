import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
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
      title="Session 03 — Branching, Merging, and Conflict Resolution"
      description="Branching, Merging, and Conflict Resolution in Git — Creating branches, merging strategies, and resolving conflicts"
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

          <h1>Session 03 — Branching, Merging, and Conflict Resolution</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding how to create and manage branches, merge changes,
            and resolve merge conflicts in Git.
          </p>

          <p>
            <strong>Practical Environment:</strong> Git Bash / Terminal + GitHub account
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 3 (Branching, Merging, and Conflict Resolution)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain and illustrate how to integrate separate branches</li>
            <li>Define both simple and complex merging scenarios</li>
            <li>Identify and understand the causes of merge conflicts</li>
            <li>Illustrate the process to resolve merge conflicts efficiently</li>
          </ul>

          <hr />

          <h2>1. Why Do We Need Branches?</h2>

          <p>
            A <strong>branch</strong> is an independent line of development.
            Branches allow you to work on new features, bug fixes, or experiments
            without affecting the main (stable) code.
          </p>

          <p>
            Benefits of using branches:
          </p>

          <ul>
            <li>Work on multiple features at the same time</li>
            <li>Keep the main branch stable and clean</li>
            <li>Experiment safely</li>
            <li>Collaborate with other developers easily</li>
            <li>Make code reviews easier through Pull Requests</li>
          </ul>

          <hr />

          <h2>2. Basic Branch Commands</h2>

          <h3>View All Branches</h3>
          <pre style={codeBlockStyle}>
            <code>{`git branch`}</code>
          </pre>

          <h3>Create a New Branch</h3>
          <pre style={codeBlockStyle}>
            <code>{`git branch feature-login`}</code>
          </pre>

          <h3>Switch to a Branch</h3>
          <pre style={codeBlockStyle}>
            <code>{`git checkout feature-login

# Modern way (Git 2.23+)
git switch feature-login`}</code>
          </pre>

          <h3>Create and Switch in One Command</h3>
          <pre style={codeBlockStyle}>
            <code>{`git checkout -b feature-login

# or
git switch -c feature-login`}</code>
          </pre>

          <h3>Rename a Branch</h3>
          <pre style={codeBlockStyle}>
            <code>{`git branch -m old-name new-name`}</code>
          </pre>

          <h3>Delete a Branch</h3>
          <pre style={codeBlockStyle}>
            <code>{`# Delete a merged branch
git branch -d feature-login

# Force delete (even if not merged)
git branch -D feature-login`}</code>
          </pre>

          <hr />

          <h2>3. Branching Versus Merging</h2>

          <p>
            It is crucial to understand the roles of branching and merging in Git.
          </p>

          <ul>
            <li><strong>Branching</strong> → creates a separate line of work</li>
            <li><strong>Merging</strong> → brings the changes from one branch into another</li>
          </ul>

          <p>
            Typical workflow:
          </p>

          <ol>
            <li>Create a new branch from <code>main</code></li>
            <li>Do your work and make commits on the new branch</li>
            <li>Switch back to <code>main</code></li>
            <li>Merge the feature branch into <code>main</code></li>
            <li>Delete the feature branch (optional)</li>
          </ol>

          <hr />

          <h2>4. Merging Branches</h2>

          <h3>Fast-Forward Merge</h3>
          <p>
            Happens when the target branch has no new commits since the feature branch was created.
            Git simply moves the pointer forward.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`git checkout main
git merge feature-login`}</code>
          </pre>

          <h3>Three-Way Merge (Recursive)</h3>
          <p>
            Happens when both branches have new commits.
            Git creates a new merge commit.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`git checkout main
git merge feature-login`}</code>
          </pre>

          <h3>Abort a Merge</h3>
          <pre style={codeBlockStyle}>
            <code>{`git merge --abort`}</code>
          </pre>

          <hr />

          <h2>5. Understanding Merge Conflicts</h2>

          <p>
            A <strong>merge conflict</strong> occurs when Git cannot automatically combine changes
            from two branches. This usually happens when the same lines of a file were modified
            in both branches.
          </p>

          <h3>Common Causes of Conflicts</h3>
          <ul>
            <li>Two developers edited the same lines of a file</li>
            <li>One developer deleted a file while another modified it</li>
            <li>Complex changes happened on both branches</li>
          </ul>

          <hr />

          <h2>6. How to Resolve Merge Conflicts</h2>

          <p>Follow these steps carefully:</p>

          <ol>
            <li>Start the merge:
              <pre style={codeBlockStyle}><code>{`git checkout main
git merge feature-login`}</code></pre>
            </li>
            <li>Git will tell you which files have conflicts.</li>
            <li>Open the conflicted file(s). You will see markers like this:</li>
          </ol>

          <pre style={codeBlockStyle}>
            <code>{`<<<<<<< HEAD
This is the content from the main branch
=======
This is the content from the feature branch
>>>>>>> feature-login`}</code>
          </pre>

          <ol start="4">
            <li>Edit the file and decide what the final content should be. Remove the conflict markers.</li>
            <li>Stage the resolved file:
              <pre style={codeBlockStyle}><code>{`git add conflicted-file.txt`}</code></pre>
            </li>
            <li>Complete the merge with a commit:
              <pre style={codeBlockStyle}><code>{`git commit`}</code></pre>
            </li>
          </ol>

          <hr />

          <h2>7. Practical Example – Create, Merge, and Resolve Conflict</h2>

          <p>Try this complete example:</p>

          <pre style={codeBlockStyle}>
            <code>{`# 1. Start on main and create a file
git checkout main
echo "Version from main" > message.txt
git add message.txt
git commit -m "Add message.txt on main"

# 2. Create a feature branch and change the file
git checkout -b feature-update
echo "Version from feature branch" > message.txt
git add message.txt
git commit -m "Update message.txt on feature branch"

# 3. Go back to main and also change the same file
git checkout main
echo "New version from main" > message.txt
git add message.txt
git commit -m "Update message.txt on main"

# 4. Try to merge (this will cause a conflict)
git merge feature-update

# 5. Open message.txt, resolve the conflict, then:
git add message.txt
git commit -m "Resolve merge conflict in message.txt"`}</code>
          </pre>

          <hr />

          <h2>8. Useful Branching Commands Summary</h2>

          <pre style={codeBlockStyle}>
            <code>{`git branch                        # List branches
git branch feature-name           # Create branch
git checkout feature-name         # Switch branch
git switch feature-name           # Modern switch
git checkout -b feature-name      # Create + switch
git merge feature-name            # Merge into current branch
git branch -d feature-name        # Delete branch
git log --oneline --graph --all   # Visualize branches`}</code>
          </pre>

          <hr />

          <h2>9. Best Practices for Branching</h2>

          <ul>
            <li>Keep branch names short and descriptive (<code>feature/login</code>, <code>bugfix/header</code>, <code>hotfix/payment</code>)</li>
            <li>Never commit directly to <code>main</code> in team projects (use feature branches)</li>
            <li>Pull the latest <code>main</code> before creating a new branch</li>
            <li>Merge often to avoid large, difficult conflicts</li>
            <li>Delete branches after they are successfully merged</li>
            <li>Use Pull Requests on GitHub for code review</li>
          </ul>

          <hr />

          <h2>Session 03 Exercise</h2>

          <p><strong>Task 1 – Create and Switch Branches</strong></p>
          <ol>
            <li>Create a new branch called <code>feature-about</code>.</li>
            <li>Switch to it and create a file named <code>about.txt</code>.</li>
            <li>Commit the file on the feature branch.</li>
          </ol>

          <p><strong>Task 2 – Merge a Branch</strong></p>
          <ol>
            <li>Switch back to <code>main</code>.</li>
            <li>Merge <code>feature-about</code> into <code>main</code>.</li>
            <li>Verify that the file is now present on <code>main</code>.</li>
          </ol>

          <p><strong>Task 3 – Create a Conflict</strong></p>
          <ol>
            <li>Create a branch called <code>feature-contact</code>.</li>
            <li>On both <code>main</code> and <code>feature-contact</code>, modify the same lines of a file.</li>
            <li>Try to merge and observe the conflict.</li>
          </ol>

          <p><strong>Task 4 – Resolve the Conflict</strong></p>
          <ol>
            <li>Open the conflicted file and resolve it manually.</li>
            <li>Stage the file and complete the merge commit.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Simulate a real team workflow:
          </p>

          <ol>
            <li>Create a repository with a <code>main</code> branch.</li>
            <li>Create two feature branches: <code>feature-header</code> and <code>feature-footer</code>.</li>
            <li>Make different changes on each branch (including at least one conflicting change).</li>
            <li>Merge both branches into <code>main</code> one by one.</li>
            <li>Resolve any conflicts that appear.</li>
            <li>Push the final result to GitHub.</li>
          </ol>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the purpose of creating a branch?</li>
            <li>Which command creates a new branch and switches to it immediately?</li>
            <li>What is a fast-forward merge?</li>
            <li>When does a merge conflict usually occur?</li>
            <li>What are the conflict markers you see inside a file?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>Why branches are important in Git</li>
            <li>How to create, switch, rename, and delete branches</li>
            <li>How to merge branches (fast-forward and three-way merge)</li>
            <li>What causes merge conflicts</li>
            <li>How to resolve merge conflicts step by step</li>
            <li>Best practices for working with branches</li>
          </ul>

          <p>
            In the next session we will explore <strong>Advanced Git Commands and Operations</strong>.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
