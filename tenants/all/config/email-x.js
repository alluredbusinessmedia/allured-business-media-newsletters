const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://allured.serve.email-x.io');

config
  .setAdUnits('nailpro-daily', [
    {
      name: 'magazine',
      id: '5f187f5db484c9223dd5b67a',
      width: 600,
      height: 300,
    },
  ])

  .setAdUnits('nailpro-daily', [
    {
      name: 'primary',
      id: '5f187f86b484c91cd9d5b6b1',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('nailpro-daily', [
    {
      name: 'secondary',
      id: '5f187f92b484c95e9ad5b6cd',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('nailpro-daily', [
    {
      name: 'tertiary',
      id: '5f187f9fb484c9db95d5b6e9',
      width: 300,
      height: 250,
    },
  ])

  .setAdUnits('nailpro-daily', [
    {
      name: 'quaternary',
      id: '5f187fafb484c98791d5b717',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;