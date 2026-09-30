import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session04() {
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
      title="Session 04 — Advanced Git Commands and Operations"
      description="Advanced Git Commands and Operations — stash, reset, revert, rebase, cherry-pick, tags, and more"
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

          <h1>Session 04 — Advanced Git Commands and Operations</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Learning powerful Git commands such as stash, reset, revert,
            rebase, cherry-pick, tagging, and other advanced operations used in real projects.
          </p>

          <p>
            <strong>Practical Environment:</strong> Git Bash / Terminal + GitHub account
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 4 (Advanced Git Commands and Operations)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Use <code>git stash</code> to temporarily save work</li>
            <li>Understand the difference between <code>reset</code>, <code>revert</code>, and <code>rebase</code></li>
            <li>Apply <code>cherry-pick</code> to select specific commits</li>
            <li>Create and manage tags</li>
            <li>Use advanced inspection and cleanup commands</li>
          </ul>

          <hr />

          <h2>1. Stashing Changes – <code>git stash</code></h2>

          <p>
            Sometimes you need to switch branches but you have uncommitted changes.
            <code>git stash</code> temporarily shelves your work so you can come back to it later.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Save current changes
git stash

# Save with a message
git stash push -m "Work in progress on login form"

# List all stashes
git stash list

# Apply the latest stash and keep it in the list
git stash apply

# Apply the latest stash and remove it from the list
git stash pop

# Apply a specific stash
git stash apply stash@{2}

# Delete a stash
git stash drop stash@{1}

# Delete all stashes
git stash clear`}</code>
          </pre>

          <hr />

          <h2>2. Undoing Changes</h2>

          <h3>Discard Local Changes (Unstaged)</h3>
          <pre style={codeBlockStyle}>
            <code>{`# Discard changes in a specific file
git restore filename.txt

# Discard all local changes
git restore .`}</code>
          </pre>

          <h3>Unstage Files</h3>
          <pre style={codeBlockStyle}>
            <code>{`git restore --staged filename.txt
git restore --staged .`}</code>
          </pre>

          <hr />

          <h2>3. Resetting Commits – <code>git reset</code></h2>

          <p>
            <code>git reset</code> moves the current branch pointer to a different commit.
            Be careful — it can rewrite history.
          </p>

          <h3>Three Modes of Reset</h3>

          <table>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Command</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Soft</strong></td>
                <td><code>git reset --soft HEAD~1</code></td>
                <td>Moves HEAD, keeps changes staged</td>
              </tr>
              <tr>
                <td><strong>Mixed</strong> (default)</td>
                <td><code>git reset HEAD~1</code></td>
                <td>Moves HEAD, keeps changes unstaged</td>
              </tr>
              <tr>
                <td><strong>Hard</strong></td>
                <td><code>git reset --hard HEAD~1</code></td>
                <td>Moves HEAD and discards all changes</td>
              </tr>
            </tbody>
          </table>

          <pre style={codeBlockStyle}>
            <code>{`# Undo the last commit but keep the changes
git reset --soft HEAD~1

# Undo the last commit and unstage the changes
git reset HEAD~1

# Completely remove the last commit and its changes (dangerous)
git reset --hard HEAD~1`}</code>
          </pre>

          <p><strong>Warning:</strong> Never use <code>git reset --hard</code> on commits that have already been pushed to a shared repository.</p>

          <hr />

          <h2>4. Reverting Commits – <code>git revert</code></h2>

          <p>
            <code>git revert</code> creates a <strong>new commit</strong> that undoes the changes of a previous commit.
            This is the safe way to undo changes that have already been pushed.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Revert the latest commit
git revert HEAD

# Revert a specific commit
git revert abc1234

# Revert without opening the editor
git revert HEAD --no-edit`}</code>
          </pre>

          <hr />

          <h2>5. Rebase – <code>git rebase</code></h2>

          <p>
            Rebase moves or combines a sequence of commits to a new base commit.
            It is often used to keep a clean, linear history.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Rebase current branch onto main
git checkout feature-branch
git rebase main

# Interactive rebase (edit, squash, reorder commits)
git rebase -i HEAD~3`}</code>
          </pre>

          <h3>Common Interactive Rebase Commands</h3>
          <ul>
            <li><code>pick</code> – keep the commit</li>
            <li><code>reword</code> – change the commit message</li>
            <li><code>squash</code> / <code>s</code> – combine with previous commit</li>
            <li><code>drop</code> – remove the commit</li>
          </ul>

          <p><strong>Note:</strong> Do not rebase public/shared branches.</p>

          <hr />

          <h2>6. Cherry-Pick – <code>git cherry-pick</code></h2>

          <p>
            Cherry-pick allows you to apply a specific commit from one branch onto another.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Apply a single commit
git cherry-pick abc1234

# Apply multiple commits
git cherry-pick abc1234 def5678`}</code>
          </pre>

          <hr />

          <h2>7. Tagging</h2>

          <p>
            Tags are used to mark important points in history (usually releases).
          </p>

          <pre style={codeBlockStyle}>
            <code>{`# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag (recommended)
git tag -a v1.0.0 -m "First stable release"

# List tags
git tag

# Show tag details
git show v1.0.0

# Push tags to remote
git push origin v1.0.0
git push origin --tags

# Delete a local tag
git tag -d v1.0.0

# Delete a remote tag
git push origin --delete v1.0.0`}</code>
          </pre>

          <hr />

          <h2>8. Other Useful Advanced Commands</h2>

          <pre style={codeBlockStyle}>
            <code>{`# Show who changed each line of a file
git blame filename.txt

# Search for a string in commit history
git log -S "functionName"

# Clean untracked files (dry run first)
git clean -n
git clean -f

# Show a compact summary of changes
git shortlog -sn

# Amend the previous commit (change message or add files)
git commit --amend -m "New message"
git add forgotten-file.txt
git commit --amend --no-edit`}</code>
          </pre>

          <hr />

          <h2>9. Practical Example – Clean Up History with Interactive Rebase</h2>

          <pre style={codeBlockStyle}>
            <code>{`# Make several small commits
git commit -m "Add header"
git commit -m "Fix typo"
git commit -m "Add footer"
git commit -m "Update styles"

# Start interactive rebase for the last 4 commits
git rebase -i HEAD~4

# In the editor, change "pick" to "squash" for the commits
# you want to combine, save and close.

# Edit the final commit message, then save.`}</code>
          </pre>

          <hr />

          <h2>10. Best Practices</h2>

          <ul>
            <li>Prefer <code>git revert</code> over <code>git reset</code> for published commits</li>
            <li>Use <code>git stash</code> when you need to quickly switch context</li>
            <li>Keep commit history clean with interactive rebase before merging a feature branch</li>
            <li>Always create annotated tags for releases</li>
            <li>Never force-push (<code>git push --force</code>) to the main branch</li>
            <li>Use <code>git commit --amend</code> only for the most recent unpushed commit</li>
          </ul>

          <hr />

          <h2>Session 04 Exercise</h2>

          <p><strong>Task 1 – Stash Practice</strong></p>
          <ol>
            <li>Make some changes to files without committing.</li>
            <li>Stash the changes with a message.</li>
            <li>Switch to another branch, then come back and apply the stash.</li>
          </ol>

          <p><strong>Task 2 – Reset vs Revert</strong></p>
          <ol>
            <li>Create three commits.</li>
            <li>Use <code>git reset --soft</code> to undo the last commit and observe the result.</li>
            <li>Create another commit and then use <code>git revert</code> on it.</li>
          </ol>

          <p><strong>Task 3 – Cherry-Pick</strong></p>
          <ol>
            <li>Create a feature branch and make two commits.</li>
            <li>Switch to <code>main</code> and cherry-pick only one of those commits.</li>
          </ol>

          <p><strong>Task 4 – Tagging</strong></p>
          <ol>
            <li>Create an annotated tag named <code>v1.0.0</code>.</li>
            <li>Push the tag to GitHub.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Create a small project and practice the following:
          </p>

          <ul>
            <li>Make 5–6 commits with messy messages</li>
            <li>Use interactive rebase to squash and reword them into 2–3 clean commits</li>
            <li>Create a release tag</li>
            <li>Push everything to GitHub</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>When should you use <code>git stash</code>?</li>
            <li>What is the difference between <code>git reset --hard</code> and <code>git revert</code>?</li>
            <li>What does interactive rebase allow you to do?</li>
            <li>Why are annotated tags preferred over lightweight tags?</li>
            <li>Is it safe to rebase a branch that has already been pushed and shared with others?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to temporarily save work with <code>git stash</code></li>
            <li>How to undo changes safely using <code>reset</code> and <code>revert</code></li>
            <li>How to clean up history with <code>rebase</code></li>
            <li>How to apply specific commits with <code>cherry-pick</code></li>
            <li>How to create and manage tags for releases</li>
            <li>Several other powerful Git commands used in professional workflows</li>
          </ul>

          <p>
            In the next session we will explore <strong>AI Integration with GitHub</strong>.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
