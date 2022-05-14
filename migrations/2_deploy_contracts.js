const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

const ERC20 = artifacts.require("SunnyxERC20")

const tokenName = 'SunnyPdaterCoin'
const tokenSymbol = 'SPC'
const tokenDecimals = 18

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  deployer.deploy(ERC20,
    web3.utils.toBN("10000000000000000000000000000"),
    tokenName,
    tokenDecimals,
    tokenSymbol
  );

};
