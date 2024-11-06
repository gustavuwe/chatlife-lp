"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
  const navLinks = [
    { name: "Início", url: "#" },
    { name: "Serviços", url: "#services" },
    { name: "Preço", url: "#pricing" },
    { name: "Sobre Nós", url: "#about" },
    { name: "Ajuda", url: "#help" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add(
            "max-w-[1440px]",
            "w-full",
            "mt-8",
            "bg-white/70",
            "backdrop-blur-md",
            "border-b",
            "border-zinc-300",
            "rounded-full"
          );
        } else {
          header.classList.remove(
            "max-w-[1440px]",
            "mt-8",
            "bg-white/70",
            "backdrop-blur-md",
            "border-b",
            "border-zinc-300",
            "rounded-full"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="w-full fixed z-50 left-0 right-0 mx-auto duration-300"
    >
      <div className="max-w-[1440px] w-full h-20 flex justify-between items-center mx-auto px-8">
        <Link href="/" className="hover:opacity-60 duration-300">
          <Image src="/logo.svg" alt="" width={148} height={48} priority />
        </Link>
        <nav className="max-md:hidden flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="relative hover:text-primary duration-300 after:w-0 after:h-0.5 after:absolute after:-bottom-1
              after:left-0 after:right-0 after:hover:w-full after:bg-primary after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <Link
            href="#"
            className="py-3 px-8 rounded-3xl font-medium text-gray-100 bg-primary hover:opacity-60 duration-300"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
};
