import type { StorybookConfig } from '@storybook/web-components-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../../assets'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  webpackFinal(config, options) {
    config.module = config.module || { rules: [] };
    config.module.rules?.push({
      test: /\.tsx?$/,
      use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      exclude: /node_modules/,
    });

    config.resolve?.extensions?.push('.ts', '.tsx');
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};

export default config;
