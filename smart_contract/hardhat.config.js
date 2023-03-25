// https://eth-goerli.g.alchemy.com/v2/zW_OkcCPpUyoFiz_Kd845irjRMLZUHIt

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/zW_OkcCPpUyoFiz_Kd845irjRMLZUHIt',
      accounts: [ 'b1b9006bca54045709af0115e12165162898a995e57d607742eed6df32a9bdc1' ]
    }
  }
}