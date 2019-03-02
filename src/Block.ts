"use strict";

/* tslint:disable:no-magic-numbers */

import { SHA512 } from "crypto-js";

export class Block {
	//#region Properties
	public index: number;
	public data: object;
	public unixTimestamp: number;
	public predecessorHash: string = "";
	public hash: string = "";
	public successorHash: string = "";
	public nonce: number = 0;
	//#endregion

	//#region Constructors
	constructor(index: number, predecessorHash: string, data: object) {
		this.index = index;
		this.predecessorHash = predecessorHash;
		this.data = data;

		this.unixTimestamp = Date.now();

		this.hash = this.calculateHash();
	}
	//#endregion

	//#region Methods
	public calculateHash(): string {
		return SHA512(
			this.index +
			this.predecessorHash +
			this.unixTimestamp +
			JSON.stringify(this.data) +
			this.nonce
		).toString();
	}

	public mineBlock(difficulty: number): void {
		let difficultyPrefix: string = "";
		for (let i: number = 0; i < difficulty; i++) { difficultyPrefix += "0"; }

		while (this.hash.substring(0, difficulty) !== difficultyPrefix) {
			this.nonce++;
			this.hash = this.calculateHash();

			if (this.nonce % 10000 === 0) {
				console.log(`---> Mining block ${this.index}, trying number = ${this.nonce}`);
			}
		}

		console.log(`Mined block ${this.index}, with number ${this.nonce} hashes.`);
	}
	//#endregion
}