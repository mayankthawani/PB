'use client';

import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#8C6240] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand Name */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">PremBrothers</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Toys</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#9d7351]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#8C6240] border-none">
            <SheetHeader>
              <SheetTitle className="text-white">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#" className="text-white text-lg hover:underline p-2">
                Home
              </a>
              <a href="#" className="text-white text-lg hover:underline p-2">
                Toys
              </a>
              <a href="#" className="text-white text-lg hover:underline p-2">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
