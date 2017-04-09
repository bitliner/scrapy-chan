const client = require('./client');
const path = require('../paths');

module.exports = () => {
  return client(path.downloadPageWithoutJsDistributely);
};