"use client";

import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Archer Arquitectura</title>
        <meta property="og:title" content="Archer Arquitectura" key="title" />
        <meta name='description' content='Archer Arquitectura - Estudio de arquitectura ubicado en Madrid. Dedicados al diseño, la arquitectura y la construcción desde 1997.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex h-screen justify-center items-center bg-primary-background">
        <section className="flex flex-col w-full max-w-[600px] gap-sp4 m-auto px-sp5">
          <div className="relative w-full max-w-[600px] m-auto">
            <Image
              tabIndex="0"
              role="img"
              width={600}
              height={600}
              quality={80}
              priority={true}
              src={"/home/cover.webp"}
              alt="Imagen estilo polaroid antigua de una mujer en traje caminado por un pasillo a una distancia considerable"
            />
          </div>
          <div className="flex flex-row justify-between font-roboto">
            <Link legacyBehavior tabIndex="0" href={"/about-us"}>
              <a aria-label="Acerca de nuestro estudio" className="primary-link">estudio</a>
            </Link>
            <Link legacyBehavior tabIndex="0" href={"/projects"}>
              <a aria-label="Ver proyectos de Archer Arquitectura" className="primary-link">proyectos</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
