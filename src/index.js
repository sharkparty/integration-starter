const axios = require('axios');

const hook = async () => {
  const data = await axios.get('http://auth0.com');
  const { status } = data;

  return status === 200;
};

module.exports = hook;
