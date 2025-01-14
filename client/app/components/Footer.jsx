'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center pt-10"
      style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}
    >
      <div className="container mx-auto px-5 md:px-16 xl:px-32">
        {/* Logo and Social Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 border-b border-[#ffffff1a]">
          <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            <Image
              src="/images/logos.png"
              className="logo w-[150px] lg:w-[200px] filter brightness-600"
              width={40}
              height={40}
              alt="Logo"
            />
          </div>
          <div className="social-icons flex justify-center sm:justify-end gap-4 text-xl text-white">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <CiLinkedin />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 border-b border-[#ffffff1a] pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Popular Links */}
            <div>
              <h6 className="mb-4 text-white font-semibold text-sm uppercase">Popular Links</h6>
              <ul className="text-[#bebdbd] space-y-3 text-sm">
                <li>
                  <Link href="/">Apartment for Rent</Link>
                </li>
                <li>Apartment for Rent</li>
                <li>Apartment for Rent</li>
                <li>Apartment for Rent</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="mb-4 text-white font-semibold text-sm uppercase">Quick Links</h6>
              <ul className="text-[#bebdbd] space-y-3 text-sm">
                <li>
                  <Link href="/terms-and-condition">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about">Our Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Support</Link>
                </li>
              </ul>
            </div>

            {/* Discover Links */}
            <div>
              <h6 className="mb-4 text-white font-semibold text-sm uppercase">Discover</h6>
              <ul className="text-[#bebdbd] space-y-3 text-sm">
                <li>Miami</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>New York</li>
              </ul>
            </div>
          </div>

          {/* Contact Info and Newsletter */}
          <div className="flex flex-col space-y-8">
            <div className="text-white">
              <p className="text-[#bebdbd] text-sm">Total Free Customer Care</p>
              <h6 className="font-semibold text-lg">+(0) 123 050 945 02</h6>
            </div>
            <div className="text-white">
              <p className="text-[#bebdbd] text-sm">Need Live Support?</p>
              <h6 className="font-semibold text-lg">hi@trc.com</h6>
            </div>
            <div>
              <h6 className="text-white font-semibold text-lg mb-4">Keep Yourself Up to Date</h6>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full px-4 pr-20 rounded-lg text-gray-800 font-medium focus:outline-none"
                />
                <button className="absolute right-4 top-2 bg-transparent text-gray-900 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white text-sm mb-2 sm:mb-0">
              © 2024 Tricity Real Estate (TRS)
            </p>
            <p className="text-white text-sm mb-2 sm:mb-0">
              <Link href="https://www.futuretouch.in/" target="_blank">
                Designed by ❤️ Future IT Touch Pvt. Ltd
              </Link>
            </p>
            <p className="text-white text-sm">Privacy · Terms · Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
