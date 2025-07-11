"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "DSN-PMD projects",
    href: "/about/dsnpmd-projects",
    description: "Find out more about our ongoing and previous projects",
  },
  {
    title: "FAQ",
    href: "/about/faq",
    description: "Frequently asked questions by our users",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Who's who in the Data Science Node",
  },
  {
    title: "Partners",
    href: "/about/partners",
    description: "Proudly present our partners",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral hover:text-neutral-foreground focus:bg-secondary/20 focus:text-secondary-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function HeaderComponent() {
  return (
    <header className="bg-gradient-to-b from-secondary to-primary">
      <div className="flex items-center justify-between gap-4 2xl:max-w-screen-2xl 2xl:mx-auto py-2 px-4 lg:px-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            width={600}
            height={59.5}
            src={"/SciLifeLab logo/Precisionmedicineportal_logo_white.png"}
            alt="SciLifeLab Logo"
            priority
            className="w-auto h-7 lg:h-14"
          />
        </Link>
        <div className="hidden lg:block">
          <DesktopNav />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Data sources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/data-sources"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Access clinical data
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Navigate human data for research, including clinical
                      records, quality registries, and biobank data
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/data-sources/quality-registries"
                title="Quality registries"
              >
                Explore various Swedish registries offering individualised
                health data
              </ListItem>
              <ListItem
                href="/data-sources/swedish-research-projects"
                title="Swedish research projects"
              >
                Discover Swedish research projects and databases
              </ListItem>
              <ListItem href="/data-sources/others" title="Other data sources">
                Access a comprehensive overview of data sources
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/kiarva" className={navigationMenuTriggerStyle()}>
              KIARVA dashboard
              <Badge variant="accent" className="ml-1">
                Demo
              </Badge>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact" className={navigationMenuTriggerStyle()}>
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[500px] grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-secondary/20 focus:bg-secondary/20"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
        <nav className="flex flex-col gap-4">
          <Link href="/data-sources" className="font-semibold">
            Access clinical data
          </Link>
          <Link
            href="/data-sources/quality-registries"
            className="text-sm pl-4"
          >
            Quality registries
          </Link>
          <Link
            href="/data-sources/swedish-research-projects"
            className="text-sm pl-4"
          >
            Swedish research projects
          </Link>
          <Link href="/data-sources/others" className="text-sm pl-4">
            Other data sources
          </Link>
          <Link href="/kiarva" className="flex items-center">
            KIARVA dashboard
            <Badge variant="accent" className="ml-1">
              Demo
            </Badge>
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          <div className="font-semibold">About us</div>
          {components.map((component) => (
            <Link
              key={component.title}
              href={component.href}
              className="text-sm pl-4"
            >
              {component.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
