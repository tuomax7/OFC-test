const { defineConfig } = require('vite');
const { merge } = require('lodash');

module.exports = config => {
  let viteConfig = defineConfig({
    server: {
      fs: {
        // allow: ['/opt/node_modules', '/opt/app', '/strapi'],
        strict: false
      }
    }
  });

  let mergedConfig = merge(config, viteConfig);

  return mergedConfig;
};
