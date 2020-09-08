module.exports = {
  title: 'CodeNOW Documentation',
  tagline: 'The tagline of my site',
  url: 'https://komarem78.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/CN-icon-40x42px-dark-forwhite-bg.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
          // "light" | "dark"
          defaultMode: 'light',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: true,

          // Should we use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultMode
          respectPrefersColorScheme: false,
        },

    navbar: {
      title: 'test',
      logo: {
        alt: 'Codenow',
        src: 'img/whiteLogo.png',
        href: 'https://www.codenow.com/',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentations',
          position: 'left',
        },

      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Home page',
              href: 'https://www.codenow.com/',
            },
            {
              label: 'Documentation ',
              href: 'https://docs.factory.codenow-dev.codenow.com/docs/',
            },
            {
              label: 'Sign up ',
              href: 'https://www.codenow.com/sign-up/',
            },
          ],
        },
        {
          title: 'Why CodeNOW',
          items: [
            {
              label: 'The Platform',
              href: 'https://www.codenow.com/the-platform/',
            },
            {
              label: 'IT leaders',
              href: 'https://www.codenow.com/it-leaders/',
            },
            {
              label: 'Business leaders',
              href: 'https://www.codenow.com/business-leaders/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About us',
              href: 'https://www.codenow.com/about-us/',
            },
          ],
        },
      ],
      copyright: `© Stratox Cloud Native, s. r. o. 2020. All rights reserved.`,
    },
    },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docIntro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
