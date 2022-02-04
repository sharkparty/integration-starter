const axios = require('axios');
const integraion = require('./index');

jest.mock('axios');

describe('Integration test', () => {
  // This is the configuration object that can be specified by the user
  const config = {
    EXAMPLE: 'true',
  };
    // This is the secrets object that can be specified by the user
  const secrets = {
    EXAMPLE: 'true',
  };
    // This is the configuration object that can be specified by the user
  const request = {
    user_agent: true,
    ip: '192.168.1.1',
    // TODO: add kitchen sink props
  };
  const user = {
    email: 'test@email.com',
    phone_verified: true,
    email_verified: true,
    // TODO: add kitchen sink props
  };
  const mockEvent = {
    config, secrets, request, user,
  };
  const mockAPI = {};

  it('returns TRUE for a failing condition', async () => {
    axios.get.mockResolvedValueOnce({ status: 200 });
    const subject = await integraion(mockEvent, mockAPI);
    expect(subject).toBeTruthy();
  });

  it('returns FALSE for a failing condition', async () => {
    axios.get.mockResolvedValueOnce({ status: 400 });
    const subject = await integraion(mockEvent, mockAPI);
    expect(subject).toBeFalsy();
  });
});
