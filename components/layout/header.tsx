import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

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
    { href: '#', text: 'PFP Generator', newTab: false },
    { href: 'https://r-snoofi.myshopify.com/collections/all', text: 'Shop', newTab: true },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
                    className={`rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary`}
                    target={link.newTab ? '_blank' : undefined}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="hidden items-center gap-2 font-semibold md:flex">
            <Image src="/logo.png" width={159} height={40} className="mr-2" alt="reddit dog | r/snoofi" />
          </Link>
          <div className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-foreground transition-colors hover:text-primary`}
                target={link.newTab ? '_blank' : undefined}
              >
                {link.text}
              </Link>
            ))}
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
          <Button className="rounded-full font-semibold text-lg" asChild>
            <Link href="https://jup.ag/swap/SOL-7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t" target="_blank">
              Buy r/snoofi
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
