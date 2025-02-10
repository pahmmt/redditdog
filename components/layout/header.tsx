import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

export default function Header() {
  const { setTheme } = useTheme()

  const links = [
    { href: '#howToBuy', text: 'How to Buy', newTab: false },
    { href: '#tokenomics', text: 'Tokenomics', newTab: false },
    { href: 'https://www.reddit.com/r/snoofi/', text: 'Community', newTab: true },
    {
      href: 'https://dexscreener.com/solana/4fp4synbkisczqkwufpkcsxwfdbsvmktsnpbnlplyu9q',
      text: 'Chart',
      newTab: true,
    },
    //{ href: '#', text: 'PFP Generator', newTab: false },
    { href: 'https://r-snoofi.myshopify.com/collections/all', text: 'Shop', newTab: true },
  ]

  const charts: { title: string; href: string }[] = [
    {
      title: 'DEX Screener',
      href: 'https://dexscreener.com/solana/4fp4synbkisczqkwufpkcsxwfdbsvmktsnpbnlplyu9q',
    },
    {
      title: 'DEX Tools',
      href: 'https://www.dextools.io/app/en/solana/pair-explorer/4fp4SynBKisCZQkwUFpkcsXwFDBSVMkTSnPBnLpLyU9Q?t=1724083202142',
    },
    {
      title: 'Gecko Terminal',
      href: 'https://www.geckoterminal.com/solana/pools/4fp4SynBKisCZQkwUFpkcsXwFDBSVMkTSnPBnLpLyU9Q',
    },
    {
      title: 'Coin Gecko',
      href: 'https://www.coingecko.com/en/coins/r-snoofi',
    },
    {
      title: 'Coin Market Cap',
      href: 'https://coinmarketcap.com/currencies/r-snoofi/',
    },
    {
      title: 'Bird Eye',
      href: 'https://birdeye.so/token/7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t?chain=solana',
    },
  ]

  const exchanges: { title: string; href: string }[] = [
    {
      title: 'Raydium (DEX)',
      href: 'https://raydium.io/swap/?inputMint=sol&outputMint=7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t',
    },
    {
      title: 'Jupiter (DEX)',
      href: 'https://jup.ag/swap/SOL-7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t',
    },
    {
      title: 'MEXC (CEX)',
      href: 'https://www.mexc.com/exchange/SNOOFI_USDT',
    },
    {
      title: 'LBANK (CEX)',
      href: 'https://www.lbank.com/trade/snoofi_usdt',
    },
  ]

  const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className
              )}
              {...props}
            >
              <div className="text-lg font-medium leading-none">{children}</div>
            </a>
          </NavigationMenuLink>
        </li>
      )
    }
  )
  ListItem.displayName = 'ListItem'

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-2 font-medium">
                <Link href="#" className="mb-4 flex items-center gap-2 font-semibold">
                  <Image src="/logo.png" width={159} height={40} className="mr-2" alt="reddit dog | r/snoofi" />
                </Link>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                    target={link.newTab ? '_blank' : undefined}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="hidden items-center gap-2 font-semibold lg:flex">
            <Image src="/logo.png" width={159} height={40} className="mr-2" alt="reddit dog | r/snoofi" />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#howToBuy" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>How to Buy</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tokenomics" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tokenomics</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="https://www.reddit.com/r/snoofi/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Charts</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {charts.map((component) => (
                        <ListItem key={component.title} href={component.href}>
                          {component.title}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Exchanges</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {exchanges.map((component) => (
                        <ListItem key={component.title} href={component.href}>
                          {component.title}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="https://r-snoofi.myshopify.com/collections/all" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Shop</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="rounded-full text-lg font-semibold" asChild>
            <Link href="https://jup.ag/swap/SOL-7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t" target="_blank">
              Buy r/snoofi
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
