"use client";

import React from "react";
import Head from "next/head";
import ProjectsSlider from "@/components/ProjectsSlider";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Archer Arquitectura | Proyectos</title>
        <meta property="og:title" content="Archer Arquitectura | Proyectos" key="title"/>
        <meta name="description" content="Descubre todos los proyectos en los que ha participado Archer Arquitectura. Estudio de arquitectura ubicado en Madrid."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary_bg">
        <section className="mx-sp8">
          <div>
            <ProjectsSlider />
          </div>
        </section>
      </main>
    </>
  );
}
