"use strict";

/* tslint:disable:no-magic-numbers */

import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain: Blockchain = new Blockchain(4);
blockchain.generateGenesisBlock();

for (let i: number = 0; i < 25; i++) {
	blockchain.addBlock(
		new Block(
			blockchain.lastBlockIndex + 1,
			blockchain.latestBlock.hash,
			{ "blockinfo": `BLOCK${ i + 1}`, "secret": 42 }
		));
}

//console.log(blockchain);
console.log(blockchain.isChainValid());