"use strict";

import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain: Blockchain = new Blockchain();
blockchain.generateGenesisBlock();

blockchain.addBlock(
	new Block(
		blockchain.lastBlockIndex + 1,
		blockchain.latestBlock.hash,
		{ "blockinfo": "This is second block.", "secret": 42 }
	));

blockchain.addBlock(
	new Block(
		blockchain.lastBlockIndex + 1,
		blockchain.latestBlock.hash,
		{ "blockinfo": "This is thirth block.", "secret": 43 }
	));

console.log(blockchain);
console.log(blockchain.isChainValid());
blockchain.chain[1].predecessorHash = "xy";
console.log(blockchain.isChainValid());