"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importa el hook

export default function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) {
        setIsMenuVisible(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeLink = (path) => (pathname === path ? "text-primary-link-hover" : "");

  return (
    <header className="sticky top-0 w-full z-10">
      <section className="bg-primary-background flex flex-row items-center justify-between h-[100px] px-sp12">
        <section className="relative max-w-[300px]">
          <Link href="/">
            <Image
              tabIndex="0"
              role="img"
              width={175}
              height={20}
              quality={80}
              priority={true}
              src="/home/logo.png"
              alt="Logo de navegación de Archer Arquitectura"
            />
          </Link>
        </section>
        <nav className="xs:flex hidden">
          <Link legacyBehavior href="/projects">
            <a className={`text-small-paragraph lowercase primary-link ${activeLink("/projects")}`}>
              Proyectos
            </a>
          </Link>
          <Link legacyBehavior href="/about-us">
            <a className={`text-small-paragraph lowercase primary-link mx-sp6 ${activeLink("/about-us")}`}>
              Estudio
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className={`text-small-paragraph lowercase primary-link ${activeLink("/contact")}`}>
              Contacto
            </a>
          </Link>
        </nav>
        <button
          className="xs:hidden flex flex-col gap-1"
          onClick={toggleMenu}
          aria-expanded={isMenuVisible}
          aria-label="Toggle Menu"
        >
          <div className="w-[20px] h-[2px] rounded-md bg-burger-menu"></div>
          <div className="w-[20px] h-[2px] rounded-md bg-burger-menu"></div>
          <div className="w-[20px] h-[2px] rounded-md bg-burger-menu"></div>
        </button>
      </section>
      <nav className={`flex flex-col w-full ${isMenuVisible ? "block" : "hidden"}`}>
        <Link legacyBehavior href="/projects">
          <a
            className={`text-small-paragraph lowercase primary-link bg-primary-background px-sp8 py-sp6 border-b border-t border-solid ${activeLink("/projects")}`}
            onClick={toggleMenu}
          >
            Proyectos
          </a>
        </Link>
        <Link legacyBehavior href="/about-us">
          <a
            className={`text-small-paragraph lowercase primary-link bg-primary-background px-sp8 py-sp6 border-b border-solid ${activeLink("/about-us")}`}
            onClick={toggleMenu}
          >
            Estudio
          </a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a
            className={`text-small-paragraph lowercase primary-link bg-primary-background px-sp8 py-sp6 border-b border-solid ${activeLink("/contact")}`}
            onClick={toggleMenu}
          >
            Contacto
          </a>
        </Link>
      </nav>
    </header>
  );
}
