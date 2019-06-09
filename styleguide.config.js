module.exports = {
  title: 'KYN Design System',
  sections: [
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Overview',
          content: 'docs/overview.md'
        },
        {
          name: 'Useful Commands',
          content: 'docs/commands.md'
        },
        {
          name: 'Contributing',
          content: 'docs/contributing.md'
        },
      ]
    },
    {
      name: 'Components',
      components: 'src/lib/**/[A-Z]*.{js,jsx,ts,tsx}',
      ignore: [
        'src/lib/utils/**',
        'src/lib/assets/**',
      ],
    },
  ],
};