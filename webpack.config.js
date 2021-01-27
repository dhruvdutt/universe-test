/* eslint-disable no-param-reassign */
module.exports = {
  serverConfig: ({ config }) => {
    // webpack server config to run your project on a server
    // config object comes with basic webpack configurations.
    // You add/modify any property if you have justification for it :P
    config.entry.push('./src/entryServer.js');
    return config;
  },
};
