import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { FaMoon } from "react-icons/fa";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Home",
    "Connect",
    "Gallery",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>

          <Link to="/" className="font-bold text-inherit"><IoLogoFreebsdDevil className="h-10 w-10" /></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="#" aria-current="page">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="#">
            Connect
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Switch
            defaultSelected
            size="md"
            color="secondary"
            startContent={<MdOutlineWbSunny />}
            endContent={<FaMoon />}
          >
          </Switch>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link to="signin">Login</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
