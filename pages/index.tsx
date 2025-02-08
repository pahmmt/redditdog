import { ArrowRightIcon, PinBottomIcon, StarFilledIcon, VideoIcon } from '@radix-ui/react-icons'
import localFont from 'next/font/local'
import Head from 'next/head'
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
        <title>reddit dog | r/snoofi</title>
      </Head>
      <div
        className={`${redditSans.variable} flex min-h-screen flex-col font-[family-name:var(--font-geist-mono)] text-lg font-medium`}
      >
        <Header />
        <main className="flex flex-col">
          <div className="bg-primary">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-3 justify-between gap-6 py-12">
                <img
                  src="https://static.wixstatic.com/media/e1f53b_f62d5ab8332e48339b9fc57121c7d795~mv2.png/v1/fill/w_381,h_381,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1f53b_f62d5ab8332e48339b9fc57121c7d795~mv2.png"
                  className="mx-auto w-full max-w-72"
                />
                <div className="flex flex-col items-center gap-6 text-center">
                  <img src="https://static.wixstatic.com/media/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp/v1/fill/w_134,h_134,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp" />
                  <h1 className="text-6xl font-bold">r/snoofi</h1>
                  <div>stumbled my way from the blockchain to reddit.</div>
                  <div>Contract Address (CA): 7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t</div>
                  <div>
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link href="https://www.reddit.com/r/snoofi/" className="flex items-center gap-2" target="_blank">
                        <ArrowRightIcon /> Visit r/snoofi
                      </Link>
                    </Button>
                  </div>
                </div>
                <img
                  src="https://static.wixstatic.com/media/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp"
                  className="mx-auto w-full max-w-72 -rotate-45"
                />
              </div>
            </div>
            <div id="howToBuy" className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">How to Buy</h3>
                  {/*
                  <div>
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link href="https://youtu.be/Go-rf0utrrg?si=rs4vZIG8BQCyEJN1" className="flex items-center gap-2" target="_blank">
                        <VideoIcon /> Watch on Youtube
                      </Link>
                    </Button>
                  </div>
                  */}
                  <div>r/snoofi is available on decentralized and centralized exchanges.</div>
                  <div className="grid grid-cols-3 gap-8">
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
                        <strong>Don't have $SOL?</strong>
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
                          Click on the r/snoofi token, then click "Buy".
                        </p>
                        <p>Credit, Debit, Apple Pay, Paypal</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="inline-flex items-center gap-4 text-6xl font-bold text-white">
                    <span>Get</span>
                    <Link href="https://moonshot.money" target="_blank">
                      <img
                        className="h-12"
                        src="https://static.wixstatic.com/media/e1f53b_d8997a5fd7d84ed88b04efce4de55fc0~mv2.png/v1/fill/w_288,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moonshot_light.png"
                        alt="Moonshot"
                      />
                    </Link>
                    <span>& earn up to $100</span>
                  </h3>
                  <div>
                    <Button variant="outline" className="rounded-full text-lg font-semibold" asChild>
                      <Link href="https://moonshot.money" target="_blank" className="flex items-center gap-2">
                        <PinBottomIcon /> Download Moonshot app
                      </Link>
                    </Button>
                  </div>
                  <div className="flex flex-col text-center">
                    <div className="text-xl font-semibold">Find r/snoofi on these</div>
                    <div className="inline-flex items-center gap-4 text-4xl font-bold">Centralized Exchanges</div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-16">
                    <Link href="https://www.mexc.com/exchange/SNOOFI_USDT" target="_blank">
                      <img src="https://static.wixstatic.com/media/e1f53b_aa84fca9c88b41449106a3c137947e15~mv2.png/v1/fill/w_256,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mexc.png" />
                    </Link>

                    <Link href="https://www.lbank.com/trade/snoofi_usdt" target="_blank">
                      <img src="https://static.wixstatic.com/media/e1f53b_8d0bb7a4face46b7b5471e44dacfbe54~mv2.png/v1/fill/w_190,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lbank.png" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tokenomics" className="bg-neutral-950 text-white">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Tokenomics</h3>
                  <div>r/snoofi is a decentralized, community driven meme token on Solana.</div>
                  <div className="grid grid-cols-3 gap-8">
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
                      <CardContent className="text-3xl font-semibold text-primary">0%</CardContent>
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
                        <StarFilledIcon /> Buy r/snoofi
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-12">
                    <Link href="https://coinmarketcap.com/currencies/r-snoofi/" target="_blank">
                      <img
                        src="https://static.wixstatic.com/media/e1f53b_dee14a96f9c94a10b59c8866a4dcbffb~mv2.png/v1/fill/w_70,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CoinMarketCap.png"
                        alt=""
                      />
                    </Link>
                    <Link href="https://www.coingecko.com/en/coins/r-snoofi" target="_blank">
                      <img
                        src="https://static.wixstatic.com/media/e1f53b_60bceb2050e9488ea698e7eb4e0f3c29~mv2.png/v1/fill/w_105,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/coingecko.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      href="https://dexscreener.com/solana/4fp4synbkisczqkwufpkcsxwfdbsvmktsnpbnlplyu9q"
                      target="_blank"
                    >
                      <img
                        src="https://static.wixstatic.com/media/e1f53b_e2d49f8ba88647a9999b5dddcfd39f60~mv2.png/v1/fill/w_154,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dexscreener.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      href="https://www.dextools.io/app/en/solana/pair-explorer/4fp4SynBKisCZQkwUFpkcsXwFDBSVMkTSnPBnLpLyU9Q?t=1724251079907"
                      target="_blank"
                    >
                      <img
                        src="https://static.wixstatic.com/media/e1f53b_8af9d2c2646245c2837de48445618a39~mv2.png/v1/fill/w_94,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dextools.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      href="https://birdeye.so/token/7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t?chain=solana"
                      target="_blank"
                    >
                      <img
                        src="https://static.wixstatic.com/media/e1f53b_022755a297d74b6e8f16882efd453b91~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/birdeye.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary">
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Roadmap</h3>
                  <img src="https://static.wixstatic.com/media/e1f53b_96f56f58c5ef4bfc88e5e2642c25fda5~mv2.jpeg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1f53b_96f56f58c5ef4bfc88e5e2642c25fda5~mv2.jpeg" />
                  <ol className="list-decimal text-xl">
                    <li>Community growth</li>
                    <li>Spread the memes</li>
                    <li>Onboard redditors to crypto</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto w-full px-4">
              <div className="grid grid-cols-1 gap-4 py-12">
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-6xl font-bold">Branding</h3>
                  <div>Community-made artwork & memes to share with everyone.</div>
                  <div className="flex items-center gap-4">
                    <Button className="flex items-center gap-2 rounded-full text-xl font-semibold" asChild>
                      <Link href="https://x.com/search?q=snoofi&src=typed_query&f=live" target="_blank">
                        Find more on
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                    <Button className="flex items-center gap-2 rounded-full text-xl font-semibold">
                      Create your own profile picture <ArrowRightIcon />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="https://static.wixstatic.com/media/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp/v1/fit/w_480,h_480,q_90/e1f53b_a941ce1361a44129bd6fc2ff068e58b1~mv2.webp" />
                    <img src="https://static.wixstatic.com/media/e1f53b_f62d5ab8332e48339b9fc57121c7d795~mv2.png/v1/fit/w_480,h_480,q_90/e1f53b_f62d5ab8332e48339b9fc57121c7d795~mv2.webp" />
                  </div>
                  <div>
                    <img src="https://static.wixstatic.com/media/e1f53b_22e482854bec45e0bd3f1806994a1517~mv2.png/v1/fit/w_480,h_122,q_90/e1f53b_22e482854bec45e0bd3f1806994a1517~mv2.webp" />
                  </div>
                  <div className="pt-8 text-6xl font-bold">Join the r/snoofi movement.</div>
                  <div className="flex items-center gap-6">
                    <span className="text-5xl text-primary">Only on Reddit.</span>
                    <Button className="rounded-full text-xl font-bold" asChild>
                      <Link
                        href="https://jup.ag/swap/SOL-7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <ArrowRightIcon /> Visit r/snoofi
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
