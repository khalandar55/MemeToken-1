const MemeToken = artifacts.require("MemeToken");

module.exports = function (deployer) {
  deployer.deploy(MemeToken);
};
