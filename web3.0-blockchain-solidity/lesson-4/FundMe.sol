// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

error NotOwner();

// Note: contract has a wallet as well
contract FundMe {
    using PriceConverter for uint256;

    uint256 public number;
    uint256 public constant MINIMUM_USD = 50 * 1e18;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    function fund() public payable {
        number = 5; // Will be reverted if require is not met
        // You have to pay everything before require (because needs to be reverted). Everything after will not be billed.

        // Want to be able to set a minimum fund amount in USD
        // 1. How do we send ETH to this contract?
        require(msg.value.getConversionRate() >= MINIMUM_USD, "Didn't send enough"); // 1e18 Wei == 1 ETH
        // Note: in a blockchain, you can't make an HTTPS call
        // Note 2: msg.value is considered the first value for the library function

        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] = msg.value;
    }

    // Note: may only be called by the owner of the contract
    function withdraw() public onlyOwner {
        // require(msg.sender == owner, "Sender is not owner!"); Note: there is a better way with a modifier

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

    modifier onlyOwner {
        // Pre testing
        // require(msg.sender == i_owner, "Sender is not owner!");
        // A little more gas efficient
        if (msg.sender != i_owner) {
            revert NotOwner();
        }
        _; // Do the rest of the code

        // Here, you could also add some post testing
    }

    // What happens if someone sends this contract ETH without calling the fund function?
    // Then it would simply go to the contract, and we wouln't keep track of who sended it.
    receive() external payable {
        fund();
    }
    
    fallback() external payable {
        fund();
    }
}