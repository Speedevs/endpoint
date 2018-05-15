if(typeof web3 === 'undefined')
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));

// const HDWalletProvider = require('truffle-hdwallet-provider');
// const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
//   new HDWalletProvider(mnemonic, rpcEndpoint, 0, 1); //, process.env.PASSWORD);
//
// SeratioProvider = providerWithMnemonic(process.env.MNEMONIC, process.env.ENDPOINT + process.env.ENDPOINT_POSFIX);
