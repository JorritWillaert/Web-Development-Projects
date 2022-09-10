// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract FallbackExample {
    uint256 public result;

    // Executed if CALLDATA is blank
    receive() external payable {
        result = 1;
    }

    // Executed if CALLDATA is not blank, but no function is found
    fallback() external payable {
        result = 2;
    }
}