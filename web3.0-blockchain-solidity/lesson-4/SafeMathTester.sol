// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract SafeMathTester {
    uint8 public bigNumber = 255;

    function add() public {
        bigNumber = bigNumber + 1;
        // Note: 255 + 1 = 0 !! Like in Java
        // SafeMath checked for this! However, this issue has been fixed by Solidity itself if you take later versions than 0.6.x
    }
}