"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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

  return (
    <header className="sticky top-0 w-full z-10">
      <section className="bg-primary_bg flex flex-row items-center justify-between h-[80px] px-sp8">
        <section className="relative max-w-[300px]">
          <Link href={"/"}>
            <Image
              tabIndex="0"
              role="img"
              width={175}
              height={20}
              quality={80}
              priority={true}
              src={"/home/logo.png"}
              alt="Logo de navegación de Archer Arquitectura"
            />
          </Link>
        </section>
        <nav className="xs:flex hidden">
          <Link legacyBehavior href={"/projects"}>
            <a className="text-small_paragraph lowercase primary_link">Proyectos</a>
          </Link>
          <Link legacyBehavior href={"/about-us"}>
            <a className="text-small_paragraph lowercase primary_link mx-sp6">Estudio</a>
          </Link>
          <Link legacyBehavior href={"/contact"}>
            <a className="text-small_paragraph lowercase primary_link">Contacto</a>
          </Link>
        </nav>
        <button className="xs:hidden flex flex-col gap-1" onClick={toggleMenu} aria-expanded={isMenuVisible} aria-label="Toggle Menu">
          <div className="w-[20px] h-[2px] rounded-md bg-burger_menu"></div>
          <div className="w-[20px] h-[2px] rounded-md bg-burger_menu"></div>
          <div className="w-[20px] h-[2px] rounded-md bg-burger_menu"></div>
        </button>
      </section>
      <nav className={`flex flex-col w-full ${isMenuVisible ? 'block' : 'hidden'}`}>
        <Link legacyBehavior href={"/projects"}>
          <a className="text-small_paragraph lowercase primary_link bg-primary_bg px-sp8 py-sp6 border-b border-t border-solid" onClick={toggleMenu}>
            Proyectos
          </a>
        </Link>
        <Link legacyBehavior href={"/about-us"}>
          <a className="text-small_paragraph lowercase primary_link bg-primary_bg px-sp8 py-sp6 border-b border-solid" onClick={toggleMenu}>
            Estudio
          </a>
        </Link>
        <Link legacyBehavior href={"/contact"}>
          <a className="text-small_paragraph lowercase primary_link bg-primary_bg px-sp8 py-sp6 border-b border-solid" onClick={toggleMenu}>
            Contacto
          </a>
        </Link>
      </nav>
    </header>
  );
}
