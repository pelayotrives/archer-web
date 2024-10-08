"use client";

import React from "react";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Archer Arquitectura | Estudio</title>
        <meta property="og:title" content="Archer Arquitectura | Contacto" key="title"/>
        <meta name="description" content="Conoce más a fondo Archer Arquitectura, estudio de arquitectura ubicado en Madrid."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary-background">
        <section className="mx-sp8 min-h-[calc(100vh-80px)] h-full">
            <p>Test Estudio</p>
        </section>
      </main>
    </>
  );
}
