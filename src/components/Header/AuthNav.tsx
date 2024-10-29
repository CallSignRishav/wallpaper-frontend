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
import { useState } from "react";
import LogoutComp from "../AuthComps/LogoutComp";
import ToggleDark from "./ToggleDark";
import { useRouter } from "next/router";
import { User } from "lucide-react";

const AuthNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
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
            <Link href="/accounts/profile">Username</Link>
          </NavbarItem>

          <NavbarItem>
            <LogoutComp />
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

        <NavbarMenu className="space-y-3 py-5">
          <NavbarMenuItem>
            <button
              className="flex items-center gap-3 px-1 text-xl hover:text-blue-600"
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/accounts/profile");
              }}>
              <User />
              Username
            </button>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <LogoutComp />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default AuthNav;
