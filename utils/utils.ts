const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const processStringMetadata = (input: string) => {
  return input.split(new RegExp('\u2800+', 'g'))[0].trim()
}

const formatKMBT = (num: number) => {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2).replace(/\.00$/, '') + 'T'
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'B'
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M'
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K'
  } else {
    return num.toString()
  }
}

export { delay, numberWithCommas, processStringMetadata, formatKMBT }
