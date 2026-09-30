import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session06() {
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
      title="Session 06 — Continuous Integration / Continuous Deployment"
      description="Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions — Automated testing, building, and deployment"
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

          <h1>Session 06 — Continuous Integration / Continuous Deployment (CI/CD)</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding Continuous Integration and Continuous Deployment,
            and learning how to automate testing, building, and deployment using GitHub Actions.
          </p>

          <p>
            <strong>Practical Environment:</strong> GitHub repository + basic understanding of YAML
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 6 (Continuous Integration / Continuous Deployment)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain the concepts of Continuous Integration (CI) and Continuous Deployment (CD)</li>
            <li>Describe the benefits of CI/CD pipelines</li>
            <li>Create a basic GitHub Actions workflow</li>
            <li>Automate testing and deployment using GitHub Actions</li>
            <li>Understand common CI/CD best practices</li>
          </ul>

          <hr />

          <h2>1. What is Continuous Integration (CI)?</h2>

          <p>
            <strong>Continuous Integration</strong> is the practice of frequently merging code changes
            into a shared repository and automatically verifying those changes through automated builds and tests.
          </p>

          <p>
            Main goals of CI:
          </p>

          <ul>
            <li>Detect bugs early</li>
            <li>Ensure the codebase remains in a working state</li>
            <li>Reduce integration problems</li>
            <li>Provide fast feedback to developers</li>
          </ul>

          <hr />

          <h2>2. What is Continuous Deployment / Delivery (CD)?</h2>

          <p>
            <strong>Continuous Delivery</strong> means that the code is always in a deployable state.
            <strong>Continuous Deployment</strong> goes one step further — every change that passes the tests
            is automatically deployed to production.
          </p>

          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Continuous Integration</td>
                <td>Automatically build and test every change</td>
              </tr>
              <tr>
                <td>Continuous Delivery</td>
                <td>Code is always ready to be deployed (manual approval)</td>
              </tr>
              <tr>
                <td>Continuous Deployment</td>
                <td>Every successful change is automatically deployed</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. Benefits of CI/CD</h2>

          <ul>
            <li>Faster feedback and quicker bug detection</li>
            <li>Reduced manual work</li>
            <li>Higher code quality</li>
            <li>More reliable releases</li>
            <li>Better collaboration in teams</li>
            <li>Ability to deploy multiple times per day</li>
          </ul>

          <hr />

          <h2>4. Introduction to GitHub Actions</h2>

          <p>
            <strong>GitHub Actions</strong> is GitHub’s built-in CI/CD platform.
            It allows you to create workflows that run automatically when certain events happen
            (push, pull request, release, schedule, etc.).
          </p>

          <h3>Key Concepts</h3>

          <ul>
            <li><strong>Workflow</strong> – An automated process defined in a YAML file</li>
            <li><strong>Event</strong> – What triggers the workflow (e.g. <code>push</code>)</li>
            <li><strong>Job</strong> – A set of steps that run on the same runner</li>
            <li><strong>Step</strong> – An individual task (run a command or use an action)</li>
            <li><strong>Runner</strong> – The server that executes the jobs (GitHub-hosted or self-hosted)</li>
            <li><strong>Action</strong> – A reusable unit of code (e.g. <code>actions/checkout</code>)</li>
          </ul>

          <hr />

          <h2>5. Creating Your First Workflow</h2>

          <p>
            Workflows are stored in the <code>.github/workflows/</code> directory of your repository.
          </p>

          <h3>Basic Example – Run on every push</h3>

          <pre style={codeBlockStyle}>
            <code>{`# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test`}</code>
          </pre>

          <hr />

          <h2>6. Common Workflow Triggers</h2>

          <pre style={codeBlockStyle}>
            <code>{`on:
  push:                    # When code is pushed
  pull_request:            # When a PR is opened or updated
  release:
    types: [published]     # When a release is published
  schedule:
    - cron: '0 0 * * *'    # Every day at midnight
  workflow_dispatch:       # Manual trigger from GitHub UI`}</code>
          </pre>

          <hr />

          <h2>7. Practical Example – Deploy a Website to GitHub Pages</h2>

          <pre style={codeBlockStyle}>
            <code>{`# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './build'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`}</code>
          </pre>

          <hr />

          <h2>8. Using Secrets in GitHub Actions</h2>

          <p>
            Never put passwords, tokens, or API keys directly in your workflow files.
            Store them as <strong>Repository Secrets</strong>.
          </p>

          <ol>
            <li>Go to your repository → <strong>Settings</strong> → <strong>Secrets and variables</strong> → <strong>Actions</strong></li>
            <li>Click <strong>New repository secret</strong></li>
            <li>Add your secret (e.g. <code>MY_API_KEY</code>)</li>
          </ol>

          <p>Use it in the workflow:</p>

          <pre style={codeBlockStyle}>
            <code>{`- name: Use secret
  run: echo "Token is $MY_TOKEN"
  env:
    MY_TOKEN: \${{ secrets.MY_API_KEY }}`}</code>
          </pre>

          <hr />

          <h2>9. Best Practices for CI/CD</h2>

          <ul>
            <li>Keep workflows fast — fail early if possible</li>
            <li>Run tests on every pull request</li>
            <li>Use caching for dependencies (<code>actions/cache</code> or built-in cache)</li>
            <li>Never store secrets in the code</li>
            <li>Use specific versions of actions (e.g. <code>@v4</code> instead of <code>@main</code>)</li>
            <li>Protect the <code>main</code> branch with required status checks</li>
            <li>Start simple and gradually add more steps</li>
          </ul>

          <hr />

          <h2>10. Complete Simple CI Example for a Node Project</h2>

          <pre style={codeBlockStyle}>
            <code>{`name: Node.js CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18, 20]

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test`}</code>
          </pre>

          <hr />

          <h2>Session 06 Exercise</h2>

          <p><strong>Task 1 – Create a Basic Workflow</strong></p>
          <ol>
            <li>Create a new repository or use an existing one.</li>
            <li>Add a folder <code>.github/workflows/</code>.</li>
            <li>Create a file <code>hello.yml</code> that runs on every push and simply prints “Hello CI”.</li>
          </ol>

          <p><strong>Task 2 – Add a Real Check</strong></p>
          <ol>
            <li>If you have a Node.js project, create a workflow that installs dependencies and runs tests.</li>
            <li>Push the workflow and check the Actions tab on GitHub.</li>
          </ol>

          <p><strong>Task 3 – Manual Trigger</strong></p>
          <ol>
            <li>Add <code>workflow_dispatch</code> to a workflow so you can run it manually from the GitHub interface.</li>
          </ol>

          <p><strong>Task 4 – Explore</strong></p>
          <ol>
            <li>Open the Actions tab of a popular open-source repository and examine their workflows.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Create a complete CI/CD pipeline for a simple project:
          </p>

          <ul>
            <li>Workflow runs on push and pull requests to <code>main</code></li>
            <li>Installs dependencies</li>
            <li>Runs tests</li>
            <li>Builds the project</li>
            <li>(Optional) Deploys to GitHub Pages if tests pass</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the main difference between Continuous Delivery and Continuous Deployment?</li>
            <li>Where do you store GitHub Actions workflow files?</li>
            <li>What is a “runner” in GitHub Actions?</li>
            <li>Why should secrets never be written directly in workflow files?</li>
            <li>What event trigger would you use to run a workflow only when a Pull Request is opened?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this final session you learned:
          </p>

          <ul>
            <li>What Continuous Integration and Continuous Deployment mean</li>
            <li>The benefits of automating builds, tests, and deployments</li>
            <li>How GitHub Actions works (workflows, jobs, steps, events)</li>
            <li>How to create basic and practical CI/CD pipelines</li>
            <li>How to use secrets safely</li>
            <li>Best practices for CI/CD</li>
          </ul>

          <p>
            Congratulations! You have completed the <strong>Git &amp; GitHub Course</strong>.
          </p>

          <p>
            You now understand Version Control, Git commands, branching, advanced operations,
            AI tools on GitHub, and how to automate your workflow with CI/CD.
          </p>

          <p>
            Keep practicing by creating real repositories, opening Pull Requests, and building
            simple GitHub Actions pipelines.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
