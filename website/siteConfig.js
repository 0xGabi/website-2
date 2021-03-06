/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */
const repoUrl = 'https://github.com/1hive/website';

const siteConfig = {
  title: '1Hive' /* title for your website */,
  tagline: 'Helping open source communities thrive',
  url: 'http://1hive.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  organizationName: '1hive',
  projectName: '1Hive',
  headerLinks: [
    {doc: 'contribute/welcome', label: 'Contribute'},
    {doc: 'projects/projects-welcome', label: 'Projects'},
    {doc: 'wiki/guides/getting-started', label: 'Wiki'},
    {blog: true, label: 'Blog'},
  ],
  editUrl: 'https://github.com/1hive/website/',
  /* path to images for header/footer */
  headerIcon: 'img/bee.png',
  footerIcon: 'img/bee.png',
  favicon: 'img/bee.png',
  /* colors for website */
  colors: {
    primaryColor: '#6da9e2',
    secondaryColor: '#c7def4',
    accentColor: '#785BA3',
    actionColor: '#008cf2',
  },
  copyright: 'Copyright © ' + new Date().getFullYear() + ' 1Hive',
  highlight: {
    theme: 'default',
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  repoUrl,
  stylesheets: [],
  onPageNav: 'separate',
};

module.exports = siteConfig;
