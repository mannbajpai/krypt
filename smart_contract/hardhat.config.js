require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/J07qTOufTs5FaVBB_fbQmJ7CHz6zFxg1',
      accounts: ['5877c31e280aed9d3acab8ec86afa3392544121c230c1fd79809734924015b81'],
    },
  },
};