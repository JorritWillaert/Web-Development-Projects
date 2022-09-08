// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Note: contract has a wallet as well
contract FundMe {
    uint256 public number;
    uint256 public minimumUsd = 50 * 1e18;

    function fund() public payable {
        number = 5; // Will be reverted if require is not met
        // You have to pay everything before require (because needs to be reverted). Everything after will not be billed.

        // Want to be able to set a minimum fund amount in USD
        // 1. How do we send ETH to this contract?
        require(getConversionRate(msg.value) >= minimumUsd, "Didn't send enough"); // 1e18 Wei == 1 ETH
        // Note: in a blockchain, you can't make an HTTPS call
    }

    function getPrice() public view returns (uint256) {
        // ABI 
        // Address 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
        (,int256 price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }

    function getConversionRate(uint256 ethAmount) public view returns (uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }

    // function withdraw() {}
}