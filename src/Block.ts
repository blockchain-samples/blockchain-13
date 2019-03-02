"use strict";

import { SHA512 } from "crypto-js";

export class Block {
	//#region Properties
	public index: number;
	public data: object;
	public unixTimestamp: number;
	public predecessorHash: string = "";
	public hash: string = "";
	public successorHash: string = "";
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
		return SHA512(this.index + this.predecessorHash + this.unixTimestamp + JSON.stringify(this.data)).toString();
	}
	//#endregion
}