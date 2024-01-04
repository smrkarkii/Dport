const hre = require("hardhat");
//contract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

async function main() {
  const Portfolio = await hre.ethers.getContractFactory("Portfolio");
  const portfolio = await Portfolio.deploy();

  // Wait for the deployment transaction to be mined
  // await portfolio.deployed();

  console.log(`Contract deployed at ${portfolio.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
