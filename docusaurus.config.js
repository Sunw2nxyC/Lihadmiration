// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lihadmiration',
  tagline: 'Fallen0xyC的网站',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://www.lihadmiration.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  organizationName: 'Sunw2nxyC', // Usually your GitHub org/user name.
  projectName: 'Sunw2nxyC.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
          },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lihadmiration',
        logo: {
          alt: 'Lihadmiration\'s logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '一些Blog', position: 'left'},
          {to: '/docs/category/实用工具', label: '实用工具', position: 'left'},
          {to: '/docs/category/nect历史', label: 'Nect历史', position: 'left'},
          {to: '/docs/intro', label: '关于', position: 'right'},
          {
            href: 'https://github.com/Sunw2nxyC',
            label: '我的GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '主要内容',
            items: [
              {label: '一些Blog', to: '/blog',},
              {label: '实用工具', to: '/docs/category/实用工具',},
              {label: 'Nect历史', to: '/docs/category/nect历史',},
              {label: '关于', to: '/docs/intro',},
            ],
          },
          {
            title: '联系Sunw2nxyC',
            items: [
              {
                label: 'Sunw2nxyC的B站',
                href: 'https://space.bilibili.com/2014118485',
              },
              {
                label: 'Sunw2nxyC的QQ群',
                href: 'https://qm.qq.com/q/oIILLy3dcW',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'QHLG的小站',
                href: 'https://qhlg.flime.top/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lihadmiration. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
