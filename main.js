const verify = require("./verify")
const Web3 = require('web3');
config = require('./truffle-config')
config.working_directory = '/Users/shuning/code/truffle-plugin-verify'
config.contracts_build_directory = '/Users/shuning/code/truffle-plugin-verify/build'
config.contracts_directory = '/Users/shuning/code/truffle-plugin-verify/contracts'
// const rpc = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
// config.provider = new Web3.providers.HttpProvider(rpc);
config.provider = config.networks['rinkeby'].provider()
config._ = ['verify', 'ERC721Creator']

verify(config)