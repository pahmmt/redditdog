import { ChevronDownIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { charts, exchanges } from '@/config/links'
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
                <Link href="#" className="mb-4 flex items-center gap-2">
                  <Image src="/logo.png" width={159} height={40} className="mr-2" alt="reddit dog | r/snoofi" />
                </Link>
                <Link
                  href="#howToBuy"
                  className="text-md rounded-md px-4 py-2 text-foreground hover:bg-secondary hover:text-primary"
                >
                  How to Buy
                </Link>
                <Link
                  href="#howToBuy"
                  className="text-md rounded-md px-4 py-2 text-foreground hover:bg-secondary hover:text-primary"
                >
                  Tokenomics
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="text-md flex items-center gap-2 rounded-md px-4 py-2 text-foreground hover:bg-secondary hover:text-primary">
                      Community <ChevronDownIcon />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="text-md">
                      <Link href="https://www.reddit.com/r/snoofi/" target="_blank">
                        Reddit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-md">
                      <Link href="https://www.reddit.com/r/snoofi/" target="_blank" className="flex items-center gap-3">
                        Live Chat
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="size-2 fill-green-500">
                          <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
                        </svg>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="text-md flex items-center gap-2 rounded-md px-4 py-2 text-foreground hover:bg-secondary hover:text-primary">
                      Charts <ChevronDownIcon />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {charts.map((component) => (
                      <DropdownMenuItem key={component.title} className="text-md">
                        <Link href={component.href} target="_blank">
                          {component.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="text-md flex items-center gap-2 rounded-md px-4 py-2 text-foreground hover:bg-secondary hover:text-primary">
                      Exchanges <ChevronDownIcon />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {exchanges.map((component) => (
                      <DropdownMenuItem key={component.title} className="text-md">
                        <Link href={component.href} target="_blank">
                          {component.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="https://r-snoofi.myshopify.com/collections/all"
                  className="rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                  target="_blank"
                >
                  Shop
                </Link>
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
                  <NavigationMenuLink asChild>
                    <Link href="#howToBuy" className={navigationMenuTriggerStyle()}>
                      How to Buy
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#tokenomics" className={navigationMenuTriggerStyle()}>
                      Tokenomics
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="https://www.reddit.com/r/snoofi/" target="_blank">
                        Reddit
                      </ListItem>
                      <ListItem href="https://www.reddit.com/r/snoofi/s/TfNxm9E9Dd" target="_blank">
                        <span className="flex items-center gap-3">
                          Live Chat
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            className="size-2 fill-green-500"
                          >
                            <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
                          </svg>
                        </span>
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Charts</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {charts.map((component) => (
                        <ListItem key={component.title} href={component.href} target="_blank">
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
                        <ListItem key={component.title} href={component.href} target="_blank">
                          {component.title}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://r-snoofi.myshopify.com/collections/all"
                      target="_blank"
                      className={navigationMenuTriggerStyle()}
                    >
                      Shop
                    </Link>
                  </NavigationMenuLink>
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
