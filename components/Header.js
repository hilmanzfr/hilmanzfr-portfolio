import React from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <nav className="pt-3 font-ilisarniq">
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto px-12 mt-8">
        <div className="flex justify-center md:justify-between">
          <Link href="/">
            <a className="hidden md:flex text-2xl py-2 font-medium text-slate-300 hover:text-white tracking-wide">
              hilmanzfr.
            </a>
          </Link>
          {/* Primary Nav */}
          <div className="flex items-center space-x-3">
            <ActiveLink activeClassName="bg-[#20202A] rounded-xl text-white" href="/">
              <a className="text-xl pt-2 pb-3 px-4 font-medium text-slate-300 hover:text-white tracking-wide">
                Home
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="bg-[#20202A] rounded-xl text-white" href="/about">
              <a className="text-xl pt-2 pb-3 px-4 font-medium text-slate-300 hover:text-white tracking-wide">
                About
              </a>
            </ActiveLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
