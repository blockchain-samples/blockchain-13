"use strict";

import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain: Blockchain = new Blockchain();
blockchain.generateGenesisBlock();
blockchain.addBlock(new Block(1, {"blockinfo": "This is second block.", "secret": 42}));
blockchain.addBlock(new Block(1, {"blockinfo": "This is thirth block.", "secret": 43}));

console.log(blockchain);