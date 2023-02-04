const hre = require("hardhat");

async function main() {

  const CharityPool = await hre.ethers.getContractFactory("CharityPool");
  console.log("Deploying Contract...");
  const  charityPool = await CharityPool.deploy();

  await charityPool.deployed();
  console.log("Deployed Contract Successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
