import { fetchDigitalAsset } from '@metaplex-foundation/mpl-token-metadata'
import { Umi, publicKey as umiPublicKey } from '@metaplex-foundation/umi'
import { Connection, ParsedAccountData, PublicKey } from '@solana/web3.js'

import { SPL_TOKEN_PROGRAM, SPL_TOKEN22_PROGRAM, WRAPPED_SOL } from '../config/constants'
import { processStringMetadata } from './utils'

const METADATA_PLACEHOLDER = {
  name: 'N/A',
  symbol: 'N/A',
  description: 'N/A',
  image: 'https://placehold.co/1000x1000?font=roboto&text=Image+Not+Available',
  extensions: {},
}

const getTokenInfo = async (connection: Connection, mintAddress: string) => {
  try {
    const accountInfo = await connection.getParsedAccountInfo(new PublicKey(mintAddress), 'finalized')
    if (accountInfo.value && accountInfo.value.data) {
      // Check if accountInfo.value.data is a ParsedAccountData
      if ('parsed' in accountInfo.value.data) {
        const info = accountInfo.value.data.parsed.info
        return {
          decimals: info.decimals,
          freezeAuthority: info.freezeAuthority,
          isInitialized: info.isInitialized,
          mintAuthority: info.mintAuthority,
          supply: Number(info.supply) / Math.pow(10, info.decimals),
        }
      } else {
        console.error('Data is not parsed account data.')
        return null
      }
    } else {
      console.error('Account information is not available.')
      return null
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}\n>> ${mintAddress}`)
    return null
  }
}

const getMetadata = async (umi: Umi, mintAddress: string) => {
  try {
    const asset = await fetchDigitalAsset(umi, umiPublicKey(mintAddress))
    const response = await fetch(asset.metadata.uri)
    const data = await response.json()
    return {
      name: data.name || METADATA_PLACEHOLDER.name,
      symbol: data.symbol || METADATA_PLACEHOLDER.symbol,
      description: data.description || METADATA_PLACEHOLDER.description,
      image: data.image || METADATA_PLACEHOLDER.image,
      extensions: data.extensions || METADATA_PLACEHOLDER.extensions,
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}\n>> ${mintAddress}`)
    return null
  }
}

const getMetadata2022 = async (connection: Connection, mintAddress: string) => {
  try {
    const accountInfo = await connection.getParsedAccountInfo(new PublicKey(mintAddress), {
      commitment: 'finalized',
    })
    if (accountInfo.value && accountInfo.value.data) {
      // Type guard to check if data is a ParsedAccountData
      if ('parsed' in accountInfo.value.data) {
        const extensions = accountInfo.value.data.parsed.info.extensions
        const metadataExtension = extensions.find(
          ({ extension }: { extension: string }) => extension === 'tokenMetadata'
        )
        if (!metadataExtension) {
          throw new Error('Metadata extension not found')
        }
        const { uri } = metadataExtension.state
        const response = await fetch(uri)
        const data = await response.json()
        return {
          name: processStringMetadata(data.name) || METADATA_PLACEHOLDER.name,
          symbol: data.symbol || METADATA_PLACEHOLDER.symbol,
          description: processStringMetadata(data.description) || METADATA_PLACEHOLDER.description,
          image: data.image || METADATA_PLACEHOLDER.image,
          extensions: data.extensions || METADATA_PLACEHOLDER.extensions,
        }
      } else {
        console.error('Data is not parsed account data.')
        return null
      }
    } else {
      console.error('Account information is not available.')
      return null
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}\n>> ${mintAddress}`)
    return null
  }
}

const getTokenPrice = async (tokens: string | string[]) => {
  try {
    const isArray = Array.isArray(tokens)
    const tokenIds = isArray ? tokens : [tokens]
    let prices: any = {}
    const chunkSize = 100
    for (let i = 0; i < tokenIds.length; i += chunkSize) {
      const chunk = tokenIds.slice(i, i + chunkSize)
      const response = await fetch(`https://api-v3.raydium.io/mint/price?mints=${chunk.join(',')}`)
      const data = await response.json()
      prices = { ...prices, ...data.data }
    }
    return isArray ? prices : prices[tokens]
  } catch (error: any) {
    console.error(`Error fetching price: ${error.message}`)
    return null
  }
}

const getSolPrice = async () => {
  return await getTokenPrice(WRAPPED_SOL)
}

const getTokenAccounts = async (
  connection: Connection,
  mintAddress: string,
  offset: number = 0,
  isToken22: boolean = false
) => {
  const programId = isToken22 ? SPL_TOKEN22_PROGRAM : SPL_TOKEN_PROGRAM
  const tokenAccounts = await connection.getParsedProgramAccounts(new PublicKey(programId), {
    filters: [
      {
        dataSize: 165,
      },
      {
        memcmp: {
          offset: offset,
          bytes: mintAddress,
        },
      },
    ],
  })

  const holders = tokenAccounts
    .map(({ pubkey, account }: { pubkey: PublicKey; account: any }) => {
      const accountInfo = account.data?.parsed?.info
      const amount = accountInfo.tokenAmount?.uiAmount
      return {
        mint: accountInfo.mint,
        pubkey: pubkey.toString(),
        owner: accountInfo.owner,
        amount: amount,
      }
    })
    .filter((account) => account.amount > 0 && account.owner !== '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1')
    .sort((a, b) => b.amount - a.amount)

  return holders
}

export { getTokenInfo, getMetadata, getMetadata2022, getTokenPrice, getSolPrice, getTokenAccounts }
