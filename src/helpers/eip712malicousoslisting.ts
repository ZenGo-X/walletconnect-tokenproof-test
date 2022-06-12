const example = {
  domain: {
    chainId: 1,
    name: "Wyvern Excahnge Contract",
    verifyingContract: "0x7f268357A8c2552623316e2562D90e642bB538E5",
    version: "2.3"
  },
  message : {
      "message" : `maker:
      0xf1663507e1aada83eb21443fa61bfed0fee98cd9
      exchange:
      0xdd54d660178b28f6033a953b0e55073cfa7e3744
      taker:
      0x7bEB94642C3010E7960b9E8A9673F4cc7dA16fa8
      makerRelayerFee:
      250
      takerRelayerFee:
      0
      makerProtocolFee:
      0
      takerProtocolFee:
      0
      feeRecipient:
      0x5b3256965e7c3cf26e11fcaf296dfc8807c01073
      feeMethod:
      1
      side:
      1
      saleKind:
      0
      target:
      0x45b594792a5cdc008d0de1c1d69faa3d16b3ddc1
      howToCall:
      1
      calldata:
      0x96809f90000000000000000000000000f1663507e1aada83eb21443fa61bfed0fee98cd9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000088b48f654c30e99bc2e4a1559b4dcf1ad93fa6564056a3b133225d6d3d3d2af6b4e08ef9a412afbf0000000000000b00000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000
      replacementPattern:
      0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      staticTarget:
      0x0000000000000000000000000000000000000000
      staticExtradata:
      0x
      paymentToken:
      0x0000000000000000000000000000000000000000
      basePrice:
      0
      extra:
      0
      listingTime:
      1654611115
      expirationTime:
      1662386462
      salt:
      70198911561416674534924993167022007752318287068740306362352232089884463599004
      nonce:
      0`
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