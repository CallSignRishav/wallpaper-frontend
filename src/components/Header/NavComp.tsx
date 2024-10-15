import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import ToggleDark from "./ToggleDark";

const NavComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        maxWidth="xl">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />

          <NavbarBrand className="hidden lg:block">
            <Link
              href={"/"}
              className="text-xl font-bold tracking-widest">
              Image Galary
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="center"
          className="flex lg:hidden">
          <NavbarBrand>
            <Link
              href={"/"}
              className="text-xl font-bold tracking-widest">
              Image Galary
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="hidden lg:flex">
          <NavbarItem>
            <Link
              href={"/sign-up"}
              className="text-xl font-bold tracking-widest">
              <Button color="success">Sign up</Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href={"/log-in"}
              className="text-xl font-bold tracking-widest">
              <Button color="primary">Log in</Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <ToggleDark />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="flex lg:hidden">
          <NavbarItem>
            <ToggleDark />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="space-y-5">
          <NavbarMenuItem>
            <Link
              href={"/sign-up"}
              className="text-xl font-bold tracking-widest">
              <Button color="success">Sign up</Button>
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href={"/log-in"}
              className="text-xl font-bold tracking-widest">
              <Button color="primary">Log in</Button>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavComp;
