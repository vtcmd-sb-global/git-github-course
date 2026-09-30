import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Git and GitHub Guide',
  tagline: 'Git & GitHub Course from Beginner to Advanced',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://vtcmd-sb-global.github.io',
  baseUrl: '/git-github-course/',   // ← change this to your actual repo name
  
  // GitHub pages deployment config.
  organizationName: 'vtcmd-sb-global', // GitHub org/user name.
  projectName: 'git-github-course',   // ← change this to your actual repo name
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with project's social card
      image: 'img/social-card.jpg',
      metadata: [
        {
          name: 'description',
          content:
            'Free Git and GitHub course for beginners. Learn Version Control, Git commands, branching, merging, GitHub, and CI/CD.'
        },
        {
          name: 'keywords',
          content:
            'git, github, version control, git tutorial, github tutorial, learn git, learn github, git beginners, git commands, branching, merging, ci cd'
        }
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },     
      navbar: {
        title: 'Git & GitHub Guide',
        logo: {
          alt: 'Git and GitHub Course Logo',
          src: 'img/logo.jpg', // optional – remove if you don’t have a logo
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/sessions/session-01',
            label: 'Sessions',
            position: 'left',
          },
          //{
          //  to: '/exercises/session-01',
          //  label: 'Exercises',
          //  position: 'left',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Student's Guide for Git & GitHub, Sir Aousaja.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
