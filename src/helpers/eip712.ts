const example = {
  types: {
    Message: [
      { name: "note", type: "string" },
      { name: "issued_at", type: "string" },
      { name: "account", type: "address" }
    ],
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256"},
      { name: "verifyingContract", type: "address"}
    ]
  },
  domain: {
    name: "tokenproof",
    version: "7",
    chainId: "1",
    verifyingContract: "0xcccccccccccccccccccccccccccccccccccccccc"
  },
  primaryType: "Message",
  message : {
    account : "0xf1663507e1aada83eb21443fa61bfed0fee98cd9",
    issued_at: "2022-06-12T08:37:38.782Z",
    note: "Signing a message is required to prove that you’re in control of the wallet you are enrolling. Signing is a safe, gas-less transaction that does not in any way give tokenproof permission to perform any transactions on your behalf."
  }

};

export const eip712 = {
  example,
};
