'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../atoms/navigation-menu';
import Logo from '../../organisms/logo/logo';
import { Button } from '../../atoms/button';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link
                        href="/"
                        legacyBehavior
                        passHref
                        className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/about"
                        legacyBehavior
                        passHref
                        className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/projects"
                        legacyBehavior
                        passHref
                        className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Projects
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="/blog"
                        legacyBehavior
                        passHref
                        className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="https://github.com/meisterveda"
                        legacyBehavior
                        passHref
                        className="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Github
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/core">
              <Button>core</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
