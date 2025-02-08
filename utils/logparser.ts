import { SPL_TOKEN_PROGRAM, SPL_TOKEN22_PROGRAM } from '@/config/constants'

export const checkArrayOrder = (sourceArray: string[], targetArray: string[]) => {
  let sourceIndex = 0
  let targetIndex = 0
  if (!sourceArray?.length || !targetArray?.length) return false

  while (sourceIndex < sourceArray.length && targetIndex < targetArray.length) {
    if (sourceArray[sourceIndex].includes(targetArray[targetIndex])) {
      targetIndex++
    }
    sourceIndex++
  }

  return targetIndex === targetArray.length
}

export const isSplToken = (logs: string[]) => logs.includes(SPL_TOKEN_PROGRAM)

export const isSplToken22 = (logs: string[]) => logs.includes(SPL_TOKEN22_PROGRAM)

export const isTokenMint = (arr: string[]) => {
  const includes = new Set([`Program ${SPL_TOKEN_PROGRAM} invoke [1]`, `Program ${SPL_TOKEN22_PROGRAM} invoke [1]`])
  const excludes = new Set(['Program FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X invoke [1]'])

  // Check for the presence of a matching string
  const hasIncludes = arr.some((item) => includes.has(item))
  const hasExcludes = arr.some((item) => excludes.has(item))

  // Parse logs into an object
  const parseLogs = arr.reduce((acc: any, item: any) => {
    if (item.includes(':')) {
      const [key, value] = item.split(/:(.*)/).map((part: any) => part.trim())
      if (acc[key]) {
        acc[key].push(value)
      } else {
        acc[key] = [value]
      }
    }
    return acc
  }, {})

  // Check if it's a mint log
  const programLogs = parseLogs['Program log']
  const firstProgramLog = programLogs?.[0]
  const initializeMintSequence = ['InitializeMint', 'Create', 'MintTo']
  const initializeDelegateSequence = [
    'InitializePermanentDelegate',
    'MetadataPointerInstruction::Initialize',
    'InitializeMint',
    'Create',
    'MintTo',
  ]

  const isMintLog =
    (firstProgramLog?.includes('InitializeMint') && checkArrayOrder(programLogs, initializeMintSequence)) ||
    (firstProgramLog?.includes('InitializePermanentDelegate') &&
      checkArrayOrder(programLogs, initializeDelegateSequence))

  return hasIncludes && !hasExcludes && isMintLog
}
