class BlockChain {
    constructor() {
        this.chain = [];
        this.newTransactions = [];
    }

    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            time: Date.now(),
            transactions: this.newTransactions,
            nonce, hash, previousBlockHash
        }

        this.newTransactions = []
        this.chain.push(newBlock)
    }


}