// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract StorageFactory {
    SimpleStorage[] public simpleStorageArray;

    function createSimpleStorageContract() public {
        // How does storage factory know what simple storage looks like?
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }
}