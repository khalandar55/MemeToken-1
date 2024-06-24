module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin
      docker: false,        // Use "false" if you want to use a local solc
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "istanbul"
      }
    }
  }
};
