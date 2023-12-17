"use client";

import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'
import Button from "../../components/tailwind/button";

export default function Home() {

  return (
    <>
      <Head>
        <title>Archer Arquitectura</title>
        <meta property="og:title" content="Archer Arquitectura" key="title" />
        <meta name='description' content='Archer Arquitectura - Estudio de arquitectura ubicado en Madrid. Dedicados al diseño, la arquitectura y la construcción desde 1997.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex h-screen justify-center items-center bg-primary_bg">
        {/* <section>
          <Button>Hola</Button>
        </section> */}
        <section className="flex flex-col w-full max-w-[600px] gap-4 m-auto px-5">
          <div className="relative w-full max-w-[300px] m-auto">
            <Image
              tabIndex="0"
              width={300}
              height={40}
              quality={80}
              priority={true}
              src={"/home/logo.png"}
              alt="Archer Arquitectura primary logo"
            />
          </div>
          <div className="relative w-full max-w-[600px] m-auto">
            <Image
              tabIndex="0"
              width={600}
              height={600}
              quality={80}
              priority={true}
              src={"/home/cover.png"}
              alt="Image of a woman walking down a hallway"
            />
          </div>
          <div className="flex flex-row justify-between">
            <Link tabIndex="0" href={"/about-us"}>
              Estudio
            </Link>
            <Link tabIndex="0" href={"/projects"}>
              Proyectos
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
