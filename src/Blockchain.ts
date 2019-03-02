"use strict";

import { Block } from "./Block";

export class Blockchain {
	//#region Properties
	public chain: Array<Block> = new Array<Block>();
	public lastBlockIndex: number = 0;
	//#endregion

	//#region Methods
	public generateGenesisBlock(): void {
		this.chain.push(new Block(0, {"blockinfo": "This is genesis block."}));
	}

	public get latestBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	public addBlock(newBlock: Block): void {
		newBlock.calculateHash();
		newBlock.predecessorHash = this.latestBlock.hash;
		this.latestBlock.successorHash = newBlock.hash;
		this.lastBlockIndex++;
		this.chain.push(newBlock);
	}
	//#endregion
}