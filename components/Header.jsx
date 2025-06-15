'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
   const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // closes the sheet when link is clicked
  };
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#8C6240] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand Name */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">PremBrothers</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#owners" className="hover:underline">Owners</a>
          <a href="#trendy-toys" className="hover:underline">Trendy Toys</a>
          <a href="#collection" className="hover:underline">Our Collection</a>
          <a href="#location" className="hover:underline">Location</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Navigation */}
         {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
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
              <a href="#" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Home</a>
              <a href="#about" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">About Us</a>
              <a href="#owners" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Owners</a>
              <a href="#trendy-toys" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Trendy Toys</a>
              <a href="#collection" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Our Collection</a>
              <a href="#location" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Location</a>
              <a href="#contact" onClick={handleLinkClick} className="text-white text-lg hover:underline p-2">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
