module.exports = {
  title: 'rollcake-spa',
  tagline: 'A progressive, incrementally-adoptable JavaScript framework for building micro frontends UI on the web.',
  url: 'https://rollcakejs.github.io',
  baseUrl: '/rollcake-spa.org/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'rollcakejs', // Usually your GitHub org/user name.
  projectName: 'rollcake-spa.org', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'rollcake-spa',
      logo: {
        alt: 'rollcake-spa logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/rollcakejs/rollcake-spa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} rollcake-spa.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/rollcakejs/rollcake-spa.org/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
