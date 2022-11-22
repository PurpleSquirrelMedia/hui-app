export type HelloAnchor = {
  "version": "0.1.0",
  "name": "hello_anchor",
  "instructions": [
    {
      "name": "initSystem",
      "accounts": [
        {
          "name": "systemFeeAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initPool",
      "accounts": [
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemFeeAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "PoolConfig"
          }
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "feeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "estimateLoanFee",
      "accounts": [
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ],
      "returns": "u64"
    },
    {
      "name": "depositAll",
      "accounts": [
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenPoolForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initLoan",
      "accounts": [
        {
          "name": "loan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "loanPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "loan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "lender",
            "type": "publicKey"
          },
          {
            "name": "borrower",
            "type": "publicKey"
          },
          {
            "name": "tokenAAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenBAccount",
            "type": "publicKey"
          },
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenBAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "poolFeeAccount",
            "type": "publicKey"
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "transferFee",
            "type": "u64"
          },
          {
            "name": "loanFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PoolConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TradeDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AtoB"
          },
          {
            "name": "BtoA"
          }
        ]
      }
    },
    {
      "name": "RoundDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Ceiling"
          },
          {
            "name": "Floor"
          }
        ]
      }
    },
    {
      "name": "AppError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ExceededSlippage"
          },
          {
            "name": "ZeroTradingTokens"
          },
          {
            "name": "EmptySupply"
          },
          {
            "name": "InvalidOwner"
          },
          {
            "name": "ConversionFailure"
          },
          {
            "name": "FeeNotEnough"
          }
        ]
      }
    },
    {
      "name": "RepaymentPeriod",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "OneHour"
          },
          {
            "name": "OneMonth"
          },
          {
            "name": "ThreeMonth"
          },
          {
            "name": "SixMonth"
          },
          {
            "name": "NineMonth"
          },
          {
            "name": "OneYear"
          }
        ]
      }
    }
  ]
};

export const IDL: HelloAnchor = {
  "version": "0.1.0",
  "name": "hello_anchor",
  "instructions": [
    {
      "name": "initSystem",
      "accounts": [
        {
          "name": "systemFeeAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initPool",
      "accounts": [
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemFeeAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "PoolConfig"
          }
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "feeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "estimateLoanFee",
      "accounts": [
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ],
      "returns": "u64"
    },
    {
      "name": "depositAll",
      "accounts": [
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenPoolForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initLoan",
      "accounts": [
        {
          "name": "loan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "loanPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBForDepositor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "loan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "lender",
            "type": "publicKey"
          },
          {
            "name": "borrower",
            "type": "publicKey"
          },
          {
            "name": "tokenAAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenBAccount",
            "type": "publicKey"
          },
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenBAccount",
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "type": "publicKey"
          },
          {
            "name": "poolFeeAccount",
            "type": "publicKey"
          },
          {
            "name": "fees",
            "type": {
              "defined": "Fees"
            }
          },
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Fees",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "transferFee",
            "type": "u64"
          },
          {
            "name": "loanFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PoolConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "interestRate",
            "type": "u64"
          },
          {
            "name": "repaymentPeriod",
            "type": {
              "defined": "RepaymentPeriod"
            }
          },
          {
            "name": "minLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanAmount",
            "type": "u64"
          },
          {
            "name": "maxLoanThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "TradeDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AtoB"
          },
          {
            "name": "BtoA"
          }
        ]
      }
    },
    {
      "name": "RoundDirection",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Ceiling"
          },
          {
            "name": "Floor"
          }
        ]
      }
    },
    {
      "name": "AppError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ExceededSlippage"
          },
          {
            "name": "ZeroTradingTokens"
          },
          {
            "name": "EmptySupply"
          },
          {
            "name": "InvalidOwner"
          },
          {
            "name": "ConversionFailure"
          },
          {
            "name": "FeeNotEnough"
          }
        ]
      }
    },
    {
      "name": "RepaymentPeriod",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "OneHour"
          },
          {
            "name": "OneMonth"
          },
          {
            "name": "ThreeMonth"
          },
          {
            "name": "SixMonth"
          },
          {
            "name": "NineMonth"
          },
          {
            "name": "OneYear"
          }
        ]
      }
    }
  ]
};