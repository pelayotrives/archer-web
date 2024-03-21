"use client"

import React, {useEffect, useRef} from "react";
import Head from "next/head";
import { useRouter } from 'next/navigation'
import gsap from "gsap";
import Button from "@/components/tailwind-components/PrimaryButton";

export default function NotFound() {
  const router = useRouter()
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
        { y: -50, opacity: 0 },
        { duration: 2, y: 0, opacity: 1 }
    );
    gsap.to(titleRef.current, {
        duration: 0.75, 
        color: "#702963", 
        repeat: -1, 
        yoyo: true, 
        ease: "power2.out",
        repeatDelay: 2
    });
  }, []);

  return (
    <>
        <Head>
            <title>Archer Arquitectura | Not Found</title>
            <meta property="og:title" content="Archer Arquitectura | Not Found" key="title"/>
            <meta name="description" content="Esta página no existe en Archer Arquitectura. Prueba de nuevo."/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className="bg-primary_bg">
            <section className="mx-sp8 min-h-screen h-full flex items-center">
                <section className="flex flex-col gap-6 items-center md:items-start md:ml-sp14 md:pt-sp12 md:pb-sp12 md:pl-sp8 md:border-l md:border-solid md:border-gray-300">
                    <h1 ref={titleRef} className="gsap-animated-title font-futura-heavy text-advertise leading-none">404</h1>
                    <h2 className="font-roboto text-big_paragraph text-center md:text-left">Esta página <strong>no existe</strong> o el link puede <strong>estar roto</strong>. Pero no te preocupes, siempre puedes volver por donde has venido.</h2>
                    <Button onClick={() => router.push('/')}>Volver a inicio</Button>
                </section>
            </section>
        </main>
    </>
  )
}
