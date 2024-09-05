import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { CiShoppingCart} from "react-icons/ci";

import './Navbar.css'
import img from "../img/Asset 1.svg"
import { useNavigate } from 'react-router-dom';
const Navbars = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate('/login');
    };
    const handleLogins = () => {
      navigate('/signup');
    };

    const handleMenuItemClick = (href) => {
      setIsMenuOpen(false);
      if (!href.startsWith('#')) {
          navigate(href);
      }
  };
  const menuItems = [
         { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Shop", href: "/shop" },
        { name: "Collections", href: "/collection" },
        { name: "Login", href: "/login" },
        { name: "Signup", href: "/signup" },
        { name: "Log Out", href: "/logout" },
  ];
  return (
    <div className='nav'>
       <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img src={img} alt="" className='w-[200px]'/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
          <Link href="/" aria-current="page" className='text-[#f6d955]'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="">
           <a href="shop">Shop</a> 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          <a href="about">About</a> 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           <a href="collection">Collections</a> 
          </Link>
        </NavbarItem>
        
       
      </NavbarContent>
      <NavbarContent justify="end">
     
      <CiShoppingCart />
      <div className="nav-cart-count">0</div>
     
       <div className="but">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogins}>Sign Up</button>
      </div>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0 ? "#f6d955" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
              onClick={() => handleMenuItemClick(item.href)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  )
}

export default Navbars
