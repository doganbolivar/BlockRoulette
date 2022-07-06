//use web3.js
const Web3 = require('web3');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("https://eth-mainnet.g.alchemy.com/v2/Ea5OzgFWECiF7QWgmLbeNOqJOv6yP-6g");
//scan the ERC-721 contracts on the Ethereum blockchain.
//create a function for scan the ERC-721 contracts on the Ethereum blockchain.
//The function will show the contract address and the block number of the contract.
function Koksal(web3) {
    //get the block number of the ERC721 contracts between 2000.block and 2100.block.
    web3.eth.getBlockNumber().then(function(blockNumber) {
        //scan the ERC721 contracts from the 2000.block to the 2100.block.
        for (var i = 2000; i <= 2100; i++) {
            //get the blocks of the ERC721 contracts by the block number.
            web3.eth.getBlock(i, true).then(function(block) {
                //get the contract address of the scanned ERC721 contracts.
                for (var j = 0; j < block.transactions.length; j++) {
                    var contractAddress = block.transactions[j].to;
                    //get the contract Address and the block number and sort them by the block number.
                    console.log(contractAddress + " " + i);
                }
            });
        }
    });
}

//build an function for print the info the scanned contract.

function Okan(contractAddress, blockNumber) {
   //this function is using arrays to print the info of the scanned contract.
   //it will print the contract address and the block number of the contract.
    var blockNumber = ["contractAddress"];
console.log(blockNumber);
}



                
        