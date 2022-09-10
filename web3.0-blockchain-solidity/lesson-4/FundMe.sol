// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

// Note: contract has a wallet as well
contract FundMe {
    using PriceConverter for uint256;

    uint256 public number;
    uint256 public minimumUsd = 50 * 1e18;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    function fund() public payable {
        number = 5; // Will be reverted if require is not met
        // You have to pay everything before require (because needs to be reverted). Everything after will not be billed.

        // Want to be able to set a minimum fund amount in USD
        // 1. How do we send ETH to this contract?
        require(msg.value.getConversionRate() >= minimumUsd, "Didn't send enough"); // 1e18 Wei == 1 ETH
        // Note: in a blockchain, you can't make an HTTPS call
        // Note 2: msg.value is considered the first value for the library function

        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] = msg.value;
    }

    function withdraw() public {
        /* starting index, ending index, step amount */
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);
        
        // Actually withdraw the funds
        // 1. Transfer 
        // msg.sender = address; payable(msg.sender) = payable address
        // payable(msg.sender).transfer(address(this).balance);

        // 2. Send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Send failed");

        // 3. Call; Recommended way at this time
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");
    }
}