const verifyOnEtherscan = require('./etherscan/verify')

module.exports = async (config) => {
  return verifyOnEtherscan(config)
}
