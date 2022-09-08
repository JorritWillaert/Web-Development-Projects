// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

// Note: contract has a wallet as well
contract FundMe {
    uint256 public number;
    uint256 public minimumUsd = 50;

    function fund() public payable {
        number = 5; // Will be reverted if require is not met
        // You have to pay everything before require (because needs to be reverted). Everything after will not be billed.

        // Want to be able to set a minimum fund amount in USD
        // 1. How do we send ETH to this contract?
        require(msg.value >= minimumUsd, "Didn't send enough"); // 1e18 Wei == 1 ETH
        // Note: in a blockchain, you can't make an HTTPS call
    }

    // function withdraw() {}
}