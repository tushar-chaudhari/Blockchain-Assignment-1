const Demo_Contract = artifacts.require("./EVContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Demo_Contract);
};
