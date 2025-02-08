import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

import { WRAPPED_SOL } from '../config/constants.js'
import { getTokenAccounts, getTokenPrice } from '../utils/token.js'

const getWalletBalance = async (connection: Connection, walletAddress: string) => {
  const assets = await getTokenAccounts(connection, walletAddress, 32)
  // Add SOL balance
  const balanceInLamports = await connection.getBalance(new PublicKey(walletAddress), 'finalized')
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL
  assets.unshift({
    mint: WRAPPED_SOL,
    pubkey: '',
    owner: walletAddress,
    amount: balanceInSOL,
  })
  const mintAddresses = assets.map((item) => item.mint)
  const prices = await getTokenPrice(mintAddresses)
  const data = assets.map((asset) => {
    const price = prices[asset.mint] || 0
    const value = asset.amount * price
    return {
      mint: asset.mint,
      amount: asset.amount,
      value: value,
    }
  })

  return { total: data.reduce((accumulator, item) => accumulator + item.value, 0), data }
}

export { getWalletBalance }
