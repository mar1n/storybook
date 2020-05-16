
module.exports = {
  stories: ['../components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-links',
    "@storybook/addon-docs/register",
    "storybook-addon-designs/register",
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    },
  ],
};

