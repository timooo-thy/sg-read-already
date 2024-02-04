"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type MenuItem = {
    name: string;
    link: string;
  };

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">SG read already?</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/">
            Home
          </Link>
        </NavbarItem>
        <Separator orientation="vertical" className="h-5" />
        <NavbarItem>
          <Link color="foreground" href="/privacy-policy">
            Privacy Policy
          </Link>
        </NavbarItem>
        <Separator orientation="vertical" className="h-5" />
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ModeToggle />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
