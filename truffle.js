module.exports = {
  network: "test",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9045,
      network_id: "*"
    },
    coverage: {
      host: "127.0.0.1",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    }
  }
};