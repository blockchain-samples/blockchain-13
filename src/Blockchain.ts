"use strict";

import { Block } from "./Block";

export class Blockchain {
	//#region Properties
	public chain: Array<Block> = new Array<Block>();
	public lastBlockIndex: number = 0;
	//#endregion

	//#region Methods
	public generateGenesisBlock(): void {
		this.chain.push(
			new Block(
				0,
				"",
				{ "blockinfo": "This is genesis block." }
			));
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

	public isChainValid(): boolean {
		for (let i: number = 1; i < this.chain.length; i++) {
			const previousBlock: Block = this.chain[i - 1];
			const currentBlock: Block = this.chain[i];
			const nextBlock: Block = this.chain[i + 1];

			if (currentBlock.predecessorHash !== previousBlock.hash) {
				return false;
			}

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			if (i !== this.chain.length - 1 && currentBlock.successorHash !== nextBlock.hash) {
				return false;
			}
		}

		return true;
	}
	//#endregion
}