const example = {
  domain: {
    chainId: 4,
    name: "Wyvern Excahnge Contract",
    verifyingContract: "0xdd54d660178b28f6033a953b0e55073cfa7e3744",
    version: "2.3"
  },
  message : {
      maker: "0xf1663507e1aada83eb21443fa61bfed0fee98cd9",
      exchange: "0xdd54d660178b28f6033a953b0e55073cfa7e3744",
      taker:"0x0000000000000000000000000000000000000000",
      makerRelayerFee: 250,
      takerRelayerFee: 0,
      makerProtocolFee:0,
      takerProtocolFee: 0,
      feeRecipient: "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
      feeMethod:1,
      side:1,
      saleKind:0,
      target: "0x45b594792a5cdc008d0de1c1d69faa3d16b3ddc1",
      howToCall:1,
      calldata:"0xfb16a595000000000000000000000000f1663507e1aada83eb21443fa61bfed0fee98cd9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044147179acf955f52fa271734e201c63828266400000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000",
      replacementPattern: "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      staticTarget: "0x0000000000000000000000000000000000000000",
      staticExtradata: "0x",
      paymentToken: "0x0000000000000000000000000000000000000000",
      basePrice: 40000000000000000,
      extra:0,
      listingTime:1655218712,
      expirationTime: 1657810790,
      salt: "36932953303608572426706021864644815136979056545806572872193646109801765340826",
      nonce:0
  },
  primaryType: "Order",
  types: {
    EIP712Domain: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "version",
        type: "string"
      },
      {
        name: "chainId",
        type: "uint256"
      },
      {
        name: "verifyingContract",
        type: "address"
      }
    ],
    Order: [
      { name: "exchange", type: "address" },
      { name: "maker", type: "address" },
      { name: "taker", type: "address" },
      { name: "makerRelayerFee", type: "uint256" },
      { name: "takerRelayerFee", type: "uint256" },
      { name: "makerProtocolFee", type: "uint256" },
      { name: "takerProtocolFee", type: "uint256" },
      { name: "feeRecipient", type: "address" },
      { name: "feeMethod", type: "uint8" },
      { name: "side", type: "uint8" },
      { name: "saleKind", type: "uint8" },
      { name: "target", type: "address" },
      { name: "howToCall", type: "uint8" },
      { name: "calldata", type: "bytes" },
      { name: "replacementPattern", type: "bytes" },
      { name: "staticTarget", type: "address" },
      { name: "staticExtradata", type: "bytes" },
      { name: "paymentToken", type: "address" },
      { name: "basePrice", type: "uint256" },
      { name: "extra", type: "uint256" },
      { name: "listingTime", type: "uint256" },
      { name: "expirationTime", type: "uint256" },
      { name: "salt", type: "uint256" },
      { name: "nonce", type: "uint256" }
    ]
  }
}


export const eip712malicousoslisting = {
  example,
};