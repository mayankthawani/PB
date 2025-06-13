'use client';

import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F5DEB3] text-[#5C4033] py-8 px-4 mt-12">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6 text-center">
        
        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-base">
            <FaPhoneAlt className="text-[#8B5E3C]" /> 
            <span>+91 7000272770</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-base">
            <FaMapMarkerAlt className="text-[#8B5E3C]" />
            <span>Main Road, Jagdalpur, Chhattisgarh</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/prembrothers_jagdalpur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C4033] hover:text-[#A47148] text-xl"
          >
            <FaInstagram />
          </a>
          {/* You can add WhatsApp or Facebook here if needed */}
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#7A5649]">
          © {new Date().getFullYear()} PremBrothers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
