module.exports = {
  title: 'App to K8s',
  tagline: 'Interactive workshop for learning k8s basics',
  url: 'https://k8s.moficodes.com',
  baseUrl: '/',
  favicon: 'img/k8s-icon.png',
  organizationName: 'moficodes', // Usually your GitHub org/user name.
  projectName: 'app-to-k8s', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kubernetes',
      logo: {
        alt: 'Kubernetes logo',
        src: 'img/k8s-icon.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          position: 'left',
          label: '@moficodes',
          href: 'https://twitter.com/moficodes',
        },
        {
          href: 'https://github.com/moficodes/app-to-k8s',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/moficodes',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/moficodes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/10272405/moficodes',
            }
          ],
        },
      ],
      copyright: `@moficodes - ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
