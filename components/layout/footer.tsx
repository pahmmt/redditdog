import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link href="/" className="flex justify-center lg:justify-start">
              <img src="https://i.imgur.com/nkXyOFF.png" className="h-10" alt="reddit dog | r/snoofi" />
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
                <a href="javascript:;">Reddit</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">Live Chat</a>
              </li>
            </ul>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-xl font-bold text-primary">Charts</h4>
            <ul className="transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;">DEX Screener</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">DEX Tools</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">Gecko Terminal</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">Coin Gecko</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">Coin Market Cap</a>
              </li>
              <li>
                <a href="javascript:;">Bird Eye</a>
              </li>
            </ul>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-xl font-bold text-primary">Exchanges</h4>
            <ul className="transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;">Raydium (DEX)</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">Jupiter (DEX)</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;">MEXC (CEX)</a>
              </li>
              <li>
                <a href="javascript:;">LBank (CEX)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-gray-500">© 2024 reddit dog (r/snoofi). All rights reserved.</span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              <a href="javascript:;" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <svg width="20" height="20" viewBox="0 -1.5 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.029 11.247a1.407 1.407 0 0 1-1.401-1.397c0-.773.639-1.419 1.401-1.419.761 0 1.378.646 1.378 1.419 0 .772-.616 1.397-1.378 1.397m.194 2.583c-.673.681-1.728 1.013-3.224 1.013-1.497 0-2.551-.332-3.223-1.013a.383.383 0 0 1 0-.537.37.37 0 0 1 .528 0c.525.533 1.406.792 2.695.792 1.288 0 2.17-.26 2.696-.792a.37.37 0 0 1 .528 0 .383.383 0 0 1 0 .537M5.592 9.85c0-.772.638-1.419 1.399-1.419s1.378.647 1.378 1.419-.617 1.397-1.378 1.397A1.406 1.406 0 0 1 5.592 9.85M20 8.313c0-1.266-1.016-2.297-2.265-2.297-.576 0-1.119.218-1.535.609-1.495-.987-3.497-1.625-5.714-1.712l1.223-3.786 3.212.767c.001 1.042.837 1.889 1.865 1.889s1.865-.849 1.865-1.892C18.651.85 17.814 0 16.786 0c-.77 0-1.431.475-1.716 1.151L11.212.23l-1.51 4.676c-2.301.043-4.386.678-5.937 1.688a2.239 2.239 0 0 0-1.501-.577C1.016 6.016 0 7.046 0 8.313c0 .805.414 1.542 1.076 1.956C.473 13.88 4.67 17 9.958 17c5.266 0 9.449-3.091 8.891-6.686a2.287 2.287 0 0 0 1.151-2"
                    fill="white"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="javascript:;" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g>
                    <path
                      id="Vector"
                      d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <a href="javascript:;" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.112 4.494c.318-1.55-1.205-2.837-2.68-2.267L2.342 9.216c-1.647.637-1.72 2.941-.117 3.682l3.94 1.818 1.873 6.559a1 1 0 0 0 1.67.432l2.886-2.887 4.043 3.033a2 2 0 0 0 3.16-1.198l3.315-16.16ZM3.063 11.082l18.09-6.99-3.316 16.161L13.1 16.7a1 1 0 0 0-1.307.093l-1.236 1.236.371-2.043 7.28-7.279a1 1 0 0 0-1.204-1.575L6.95 12.876l-3.888-1.794Zm5.114 3.397.606 2.123.233-1.281a1 1 0 0 1 .277-.528l2.22-2.22-3.336 1.906Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
