import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
        <Head>
            <title>Archer Arquitectura | Not Found</title>
            <meta property="og:title" content="Archer Arquitectura | Not Found" key="title"/>
            <meta name="description" content="Esta página no existe en Archer Arquitectura. Prueba de nuevo."/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className="bg-primary_bg">
            <section className="mx-sp8 min-h-screen h-full">
                <p>Not Found</p>
            </section>
        </main>
    </>
  )
}
