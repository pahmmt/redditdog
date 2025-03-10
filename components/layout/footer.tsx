import Image from 'next/image'
import Link from 'next/link'

import { charts, exchanges } from '@/config/links'
import { InstagramLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 gap-y-8 py-8 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 md:py-12 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link href="/" className="flex justify-center lg:justify-start">
              <Image src="/logo.png" width={159} height={40} className="mr-2" alt="reddit dog | r/snoofi" />
            </Link>
            <p className="py-8 text-center lg:max-w-sm lg:text-left">
              <strong className="text-lg font-semibold text-primary">Disclaimer:</strong>
              <br />
              r/snoofi is a memecoin with no intrinsic value, no expected financial returns, no plans for profit, and no
              central issuer. r/snoofi is exclusively for entertainment purposes. While the r/snoofi subreddit is on
              reddit.com, neither the subreddit nor the r/snoofi memecoin have any affiliation with Reddit, Inc. or its
              mascot, Snoo, or any of the licensed partners for Snoo.
            </p>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-xl font-bold text-primary">Community</h4>
            <ul className="transition-all duration-500">
              <li className="mb-6">
                <Link href="https://www.reddit.com/r/snoofi/" target="_blank" className="hover:text-primary">
                  Reddit
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  href="https://www.reddit.com/r/snoofi/s/TfNxm9E9Dd"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  Live Chat
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="size-2 fill-green-500">
                    <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-xl font-bold text-primary">Charts</h4>
            <ul className="transition-all duration-500">
              {charts.map((component) => (
                <li key={component.title} className="mb-6">
                  <Link href={component.href} target="_blank" className="hover:text-primary">
                    {component.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-xl font-bold text-primary">Exchanges</h4>
            <ul className="transition-all duration-500">
              {exchanges.map((component) => (
                <li key={component.title} className="mb-6">
                  <Link href={component.href} target="_blank" className="hover:text-primary">
                    {component.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-gray-500">© {new Date().getFullYear()} reddit dog (r/snoofi). All rights reserved.</span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              <Link
                href="https://www.reddit.com/r/snoofi/"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
              >
                <svg className="size-5" viewBox="0 -1.5 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.029 11.247a1.407 1.407 0 0 1-1.401-1.397c0-.773.639-1.419 1.401-1.419.761 0 1.378.646 1.378 1.419 0 .772-.616 1.397-1.378 1.397m.194 2.583c-.673.681-1.728 1.013-3.224 1.013-1.497 0-2.551-.332-3.223-1.013a.383.383 0 0 1 0-.537.37.37 0 0 1 .528 0c.525.533 1.406.792 2.695.792 1.288 0 2.17-.26 2.696-.792a.37.37 0 0 1 .528 0 .383.383 0 0 1 0 .537M5.592 9.85c0-.772.638-1.419 1.399-1.419s1.378.647 1.378 1.419-.617 1.397-1.378 1.397A1.406 1.406 0 0 1 5.592 9.85M20 8.313c0-1.266-1.016-2.297-2.265-2.297-.576 0-1.119.218-1.535.609-1.495-.987-3.497-1.625-5.714-1.712l1.223-3.786 3.212.767c.001 1.042.837 1.889 1.865 1.889s1.865-.849 1.865-1.892C18.651.85 17.814 0 16.786 0c-.77 0-1.431.475-1.716 1.151L11.212.23l-1.51 4.676c-2.301.043-4.386.678-5.937 1.688a2.239 2.239 0 0 0-1.501-.577C1.016 6.016 0 7.046 0 8.313c0 .805.414 1.542 1.076 1.956C.473 13.88 4.67 17 9.958 17c5.266 0 9.449-3.091 8.891-6.686a2.287 2.287 0 0 0 1.151-2"
                    fill="white"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://x.com/snoofi_sol"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="none">
                  <g>
                    <path
                      id="Vector"
                      d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/snoofi_dog" target="_blank" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <InstagramLogoIcon  className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
