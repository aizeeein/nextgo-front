"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {NavItems.map((navi) => (
                <Link key={navi.href} href={navi.href}>
                  {navi.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button className="" variant={"ghost"} asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-up"}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
