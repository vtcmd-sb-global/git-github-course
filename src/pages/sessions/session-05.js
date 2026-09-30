import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session05() {
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
      title="Session 05 — AI Integration with GitHub"
      description="AI Integration with GitHub — GitHub Copilot, AI-powered code suggestions, pull request summaries, and modern AI tools"
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

          <h1>Session 05 — AI Integration with GitHub</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding how Artificial Intelligence is integrated with GitHub
            to improve productivity, code quality, and collaboration through tools like GitHub Copilot,
            AI-powered pull requests, and other modern AI features.
          </p>

          <p>
            <strong>Practical Environment:</strong> GitHub account + VS Code (or supported editor) + GitHub Copilot access
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 5 (AI Integration with GitHub)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain the role of AI in modern software development on GitHub</li>
            <li>Describe GitHub Copilot and how it assists developers</li>
            <li>Use AI features for writing code, tests, and documentation</li>
            <li>Understand AI-powered pull request summaries and code review suggestions</li>
            <li>Apply best practices when using AI tools with Git and GitHub</li>
          </ul>

          <hr />

          <h2>1. Introduction to AI on GitHub</h2>

          <p>
            GitHub has integrated Artificial Intelligence to help developers write better code faster,
            understand pull requests more easily, and improve collaboration.
          </p>

          <p>
            The main AI-powered features currently available include:
          </p>

          <ul>
            <li><strong>GitHub Copilot</strong> – AI pair programmer</li>
            <li><strong>Copilot Chat</strong> – Conversational AI assistant inside the editor</li>
            <li><strong>AI Pull Request Summaries</strong></li>
            <li><strong>Code review suggestions</strong></li>
            <li><strong>GitHub Models / AI experiments</strong> (newer features)</li>
          </ul>

          <hr />

          <h2>2. What is GitHub Copilot?</h2>

          <p>
            <strong>GitHub Copilot</strong> is an AI-powered code completion tool developed by GitHub
            and OpenAI. It suggests whole lines or entire functions as you type.
          </p>

          <h3>Key Capabilities</h3>

          <ul>
            <li>Suggests code in real time</li>
            <li>Generates functions from comments</li>
            <li>Helps write unit tests</li>
            <li>Assists with documentation and comments</li>
            <li>Supports dozens of programming languages</li>
            <li>Works inside VS Code, Visual Studio, JetBrains IDEs, and Neovim</li>
          </ul>

          <hr />

          <h2>3. Setting Up GitHub Copilot</h2>

          <h3>Step 1: Get Access</h3>
          <ol>
            <li>Go to <a href="https://github.com/features/copilot" target="_blank" rel="noopener">github.com/features/copilot</a></li>
            <li>Sign up for Copilot (Individual, Business, or Free for verified students)</li>
            <li>Authorize the Copilot extension</li>
          </ol>

          <h3>Step 2: Install in VS Code</h3>
          <ol>
            <li>Open VS Code</li>
            <li>Go to Extensions</li>
            <li>Search for <strong>GitHub Copilot</strong></li>
            <li>Install both <strong>GitHub Copilot</strong> and <strong>GitHub Copilot Chat</strong></li>
            <li>Sign in with your GitHub account</li>
          </ol>

          <hr />

          <h2>4. Using GitHub Copilot Effectively</h2>

          <h3>Basic Code Completion</h3>
          <p>
            Just start typing. Copilot will show gray suggestions. Press <code>Tab</code> to accept.
          </p>

          <h3>Generate Code from Comments</h3>
          <pre style={codeBlockStyle}>
            <code>{`// Function that takes an array of numbers and returns the average
function calculateAverage(numbers) {
  // Copilot will often generate the complete function body
}`}</code>
          </pre>

          <h3>Useful Keyboard Shortcuts (VS Code)</h3>

          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Shortcut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accept suggestion</td>
                <td><code>Tab</code></td>
              </tr>
              <tr>
                <td>Dismiss suggestion</td>
                <td><code>Esc</code></td>
              </tr>
              <tr>
                <td>Next suggestion</td>
                <td><code>Alt + ]</code></td>
              </tr>
              <tr>
                <td>Previous suggestion</td>
                <td><code>Alt + [</code></td>
              </tr>
              <tr>
                <td>Open Copilot Chat</td>
                <td><code>Ctrl + I</code> or Chat icon</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Copilot Chat</h2>

          <p>
            Copilot Chat allows you to ask questions in natural language directly inside the editor.
          </p>

          <h3>Useful Prompts</h3>

          <ul>
            <li>“Explain this function”</li>
            <li>“Write unit tests for this code”</li>
            <li>“Optimize this function for performance”</li>
            <li>“Convert this code to TypeScript”</li>
            <li>“Find potential bugs in this file”</li>
            <li>“Generate a README for this project”</li>
          </ul>

          <hr />

          <h2>6. AI-Powered Pull Requests</h2>

          <p>
            GitHub can automatically generate summaries for Pull Requests using AI.
          </p>

          <h3>Benefits</h3>
          <ul>
            <li>Quickly understand what a PR changes</li>
            <li>Helpful for large pull requests</li>
            <li>Improves code review speed</li>
          </ul>

          <p>
            When you open a Pull Request, look for the <strong>“Summary”</strong> section
            generated by Copilot.
          </p>

          <hr />

          <h2>7. Best Practices When Using AI Tools</h2>

          <ul>
            <li><strong>Always review AI-generated code</strong> – Never blindly accept suggestions</li>
            <li>Treat Copilot as a junior pair programmer, not as an expert</li>
            <li>Use clear and descriptive comments to get better suggestions</li>
            <li>Do not commit secrets or sensitive data even if AI suggests them</li>
            <li>Combine AI suggestions with your own understanding and testing</li>
            <li>Use AI to learn — ask it to explain code you don’t understand</li>
            <li>Be careful with licensing — review generated code for potential issues</li>
          </ul>

          <hr />

          <h2>8. Practical Example – Using Copilot in a Real Workflow</h2>

          <ol>
            <li>Create a new branch: <code>feature/ai-demo</code></li>
            <li>Open a JavaScript or Python file</li>
            <li>Write a clear comment describing a function</li>
            <li>Let Copilot generate the function</li>
            <li>Ask Copilot Chat to write unit tests for it</li>
            <li>Commit the changes with a meaningful message</li>
            <li>Push the branch and open a Pull Request</li>
            <li>Observe the AI-generated PR summary</li>
          </ol>

          <hr />

          <h2>9. Other AI Tools Related to Git & GitHub</h2>

          <ul>
            <li><strong>GitHub Copilot Workspace</strong> (newer) – AI-assisted issue to PR workflow</li>
            <li><strong>Cursor</strong> – AI-first code editor</li>
            <li><strong>Codeium / Tabnine</strong> – Alternative AI code completion tools</li>
            <li><strong>ChatGPT / Claude</strong> – Useful for explaining Git commands and writing commit messages</li>
          </ul>

          <hr />

          <h2>Session 05 Exercise</h2>

          <p><strong>Task 1 – Setup</strong></p>
          <ol>
            <li>Enable GitHub Copilot on your account (or use free student access).</li>
            <li>Install GitHub Copilot and Copilot Chat in VS Code.</li>
          </ol>

          <p><strong>Task 2 – Code Generation</strong></p>
          <ol>
            <li>Create a new file and write a comment describing a function (e.g. “function that validates an email address”).</li>
            <li>Accept and improve the suggestion given by Copilot.</li>
          </ol>

          <p><strong>Task 3 – Copilot Chat</strong></p>
          <ol>
            <li>Select a piece of code and ask Copilot Chat to explain it.</li>
            <li>Ask it to generate unit tests for a function.</li>
          </ol>

          <p><strong>Task 4 – Pull Request Summary</strong></p>
          <ol>
            <li>Make several changes on a branch and open a Pull Request.</li>
            <li>Observe and read the AI-generated summary.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Build a small feature with the help of AI:
          </p>

          <ul>
            <li>Create a simple form validation function using Copilot</li>
            <li>Generate unit tests with Copilot Chat</li>
            <li>Write a clear commit message (you can ask AI for suggestions)</li>
            <li>Open a Pull Request and review the AI summary</li>
            <li>Manually improve the AI-generated code and tests</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is GitHub Copilot?</li>
            <li>How can you generate a complete function using Copilot?</li>
            <li>Why should you always review AI-generated code?</li>
            <li>What is one benefit of AI-powered Pull Request summaries?</li>
            <li>Name two keyboard shortcuts used with Copilot in VS Code.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How AI is integrated into the GitHub platform</li>
            <li>What GitHub Copilot is and how to set it up</li>
            <li>How to use Copilot for code generation and Copilot Chat for questions</li>
            <li>How AI helps with Pull Request summaries and code review</li>
            <li>Best practices for using AI tools responsibly</li>
          </ul>

          <p>
            In the final session we will learn about <strong>Continuous Integration and Continuous Deployment (CI/CD)</strong>
            using GitHub Actions.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
