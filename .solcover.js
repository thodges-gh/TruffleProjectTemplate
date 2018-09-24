module.exports = {
  skipFiles: ["Migrations.sol"],
  testCommand: "../node_modules/.bin/truffle test --network coverage",
  compileCommand: "../node_modules/.bin/truffle compile --network coverage",
  copyPackages: ["openzeppelin-solidity"],
};