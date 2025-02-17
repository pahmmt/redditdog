import { ArrowRightIcon, InstagramLogoIcon, PinBottomIcon } from '@radix-ui/react-icons'
import localFont from 'next/font/local'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const redditSans = localFont({
  src: './fonts/RedditSans-VariableFont_wght.ttf',
  variable: '--font-reddit-sans',
  weight: '100 900',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>reddit dog (r/snoofi) | stumbled my way from the blockchain to reddit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Snoofi is a memecoin with no intrinsic value, no profit plans, and no central issuer—purely for entertainment. Not affiliated with Reddit, Inc. or its mascot, Snoo."
        />
      </Head>
      <div
        className={`${redditSans.variable} flex min-h-screen flex-col font-[family-name:var(--font-geist-mono)] text-lg font-medium`}
      >
        <Header />
        <main className="flex flex-col">
          <div className="bg-primary">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 justify-between gap-4 py-8 text-center sm:grid-cols-3 sm:gap-6 md:py-12">
                <Image
                  src="/r-snoo.png"
                  width={381}
                  height={381}
                  alt="Reddit Snoofi"
                  className="mx-auto max-h-48 w-auto md:max-h-60 lg:max-h-72"
                />
                <div className="flex flex-col items-center gap-6 text-center">
                  <Image src="/snoo.png" width={134} height={134} alt="Snoofi" className="hidden sm:block" />
                  <h1 className="text-6xl font-bold">r/snoofi</h1>
                  <div>stumbled my way from the blockchain to reddit.</div>
                  <div className="break-all">
                    <div className="flex items-center justify-center gap-2">
                      <Image src="/solscan.png" width={20} height={20} alt="Solscan" className="dark:invert" /> Contract
                      Address (CA):
                    </div>
                    <div>7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link href="https://www.reddit.com/r/snoofi/" className="flex items-center gap-2" target="_blank">
                        <ArrowRightIcon className="size-5" /> Visit r/snoofi
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link
                        href="https://x.com/snoofi_sol"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="none">
                          <g>
                            <path
                              id="Vector"
                              d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link
                        href="https://www.instagram.com/snoofi_dog"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        <InstagramLogoIcon className="size-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <Image
                  src="/snoo.png"
                  width={381}
                  height={381}
                  alt="Snoofi"
                  className="mx-auto max-h-48 w-auto -rotate-45 md:max-h-60 lg:max-h-72"
                />
              </div>
            </div>
            <div id="howToBuy" className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-8 text-center md:py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">How to Buy</h3>
                  <div>r/snoofi is available on decentralized and centralized exchanges.</div>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Badge>degen</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <strong>Have $SOL on Phantom Wallet?</strong>
                        <p>
                          Simply click the swap button and enter the r/snoofi contract address as the purchasing token.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Badge>noob</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <strong>Don&#39;t have $SOL?</strong>
                        <p>Buy $SOL on a centralized exchange such as Crypto.com, Coinbase, Binance, etc.</p>
                        <p>
                          Next, download Phantom Wallet on your desktop. Send the $SOL to your Phantom Wallet, then
                          follow the previous step to swap.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Badge>easy</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <strong>Buy with Credit Card</strong>
                        <p>
                          Download the Moonshot app on your mobile device. Sign up for an account, then search r/snoofi.
                          Click on the r/snoofi token, then click &#34;Buy&#34;.
                        </p>
                        <p>Credit, Debit, Apple Pay, Paypal</p>
                        <p>
                          <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                            <Link href="https://moonshot.money" target="_blank" className="flex items-center gap-2">
                              <PinBottomIcon className="size-5" /> Download Moonshot app
                            </Link>
                          </Button>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-8 text-center md:py-12">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col text-center">
                    <div className="text-xl font-semibold">Find r/snoofi on these</div>
                    <h3 className="text-6xl font-bold">Centralized Exchanges</h3>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                    <Link href="https://www.mexc.com/exchange/SNOOFI_USDT" target="_blank">
                      <Image
                        src="/exchanges/mexc.png"
                        width={256}
                        height={41}
                        alt="MEXC"
                        className="h-auto max-w-48 md:max-w-64"
                      />
                    </Link>

                    <Link href="https://www.lbank.com/trade/snoofi_usdt" target="_blank">
                      <Image
                        src="/exchanges/lbank.png"
                        width={256}
                        height={41}
                        alt="Lbank"
                        className="h-auto max-w-48 md:max-w-64"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tokenomics" className="bg-neutral-950 text-white">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-8 text-center md:py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Tokenomics</h3>
                  <div>r/snoofi is a decentralized, community driven meme token on Solana.</div>
                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Total Supply</CardTitle>
                      </CardHeader>
                      <CardContent className="text-3xl font-semibold text-primary">1,000,000,000</CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Taxes</CardTitle>
                      </CardHeader>
                      <CardContent className="text-3xl font-semibold text-primary">0/0</CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Liquidity</CardTitle>
                      </CardHeader>
                      <CardContent className="text-3xl font-semibold text-primary">100% burned</CardContent>
                    </Card>
                  </div>
                  <div>
                    <Button className="rounded-full text-lg font-semibold" asChild>
                      <Link
                        href="https://jup.ag/swap/SOL-7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        Buy r/snoofi
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-4 py-4 sm:gap-8 md:gap-12 md:py-8 lg:gap-16">
                    <Link href="https://coinmarketcap.com/currencies/r-snoofi/" target="_blank">
                      <Image src="/exchanges/cmc.png" width={75} height={79} alt="CoinMarketCap" />
                    </Link>
                    <Link href="https://www.coingecko.com/en/coins/r-snoofi" target="_blank">
                      <Image src="/exchanges/coingecko.png" width={75} height={79} alt="CoinGecko" />
                    </Link>
                    <Link
                      href="https://dexscreener.com/solana/4fp4synbkisczqkwufpkcsxwfdbsvmktsnpbnlplyu9q"
                      target="_blank"
                    >
                      <Image src="/exchanges/dexscreener.png" width={75} height={79} alt="DEXScreener" />
                    </Link>
                    <Link
                      href="https://www.dextools.io/app/en/solana/pair-explorer/4fp4SynBKisCZQkwUFpkcsXwFDBSVMkTSnPBnLpLyU9Q?t=1724251079907"
                      target="_blank"
                    >
                      <Image src="/exchanges/dextools.png" width={75} height={79} alt="DEXTools" />
                    </Link>
                    <Link
                      href="https://birdeye.so/token/7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t?chain=solana"
                      target="_blank"
                    >
                      <Image src="/exchanges/birdeye.png" width={75} height={79} alt="BirdEye" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-8 md:py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Roadmap</h3>
                  <Image src="/candle.jpeg" width={474} height={474} alt="reddit dog | r/snoofi" />
                  <ol className="list-decimal text-xl">
                    <li>Community growth</li>
                    <li>Spread the memes</li>
                    <li>Onboard redditors to crypto</li>
                    <li>Flip the Reddit stock</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-8 text-center md:py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Branding</h3>
                  <div>Community-made artwork & memes to share with everyone.</div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button className="flex items-center gap-2 rounded-full text-xl font-semibold" asChild>
                      <Link href="https://x.com/search?q=snoofi&src=typed_query&f=live" target="_blank">
                        Find more on
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="none">
                          <g id="Social Media">
                            <path
                              id="Vector"
                              d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/r-snoo.png"
                      width={381}
                      height={381}
                      alt="Reddit Snoofi"
                      className="mx-auto max-h-40 w-auto md:max-h-72"
                    />
                    <Image
                      src="/snoo.png"
                      width={381}
                      height={381}
                      alt="Snoofi"
                      className="mx-auto max-h-40 w-auto md:max-h-72"
                    />
                  </div>
                  <div>
                    <Image
                      src="/logo.png"
                      width={400}
                      height={101}
                      alt="reddit dog | r/snoofi"
                      className="max-w-full"
                    />
                  </div>
                  <div className="pt-8 text-6xl font-bold">Join the r/snoofi movement.</div>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <span className="text-5xl text-primary">Only on Reddit.</span>
                    <Button className="rounded-full text-xl font-bold" asChild>
                      <Link href="https://www.reddit.com/r/snoofi/" target="_blank" className="flex items-center gap-2">
                        <ArrowRightIcon className="size-5" /> Visit r/snoofi
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
