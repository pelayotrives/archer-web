"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useParams, redirect } from "next/navigation";
import { projects } from "utilities/exports";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((each) => each.id.toString() === id);

  if (!project) {
    redirect("/not-found");
  }

  return (
    <>
      <Head>
        <title>{`Archer Arquitectura | ${project.title}`}</title>
        <meta property="og:title" content={`Archer Arquitectura | ${project.title}`} key="title"/>
        <meta name="description" content={`Descubre ${project.title} y todos los proyectos en los que ha participado a lo largo de su trayectoria Archer Arquitectura, estudio de arquitectura ubicado en Madrid.`}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary_bg">
        <section className="mx-sp8 min-h-[calc(100vh-80px)] h-full">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Image
            role="img"
            width={400}
            height={500}
            quality={80}
            priority={true}
            src={project.imageUrl}
            alt={`${project.title} Image`}
          />
        </section>
      </main>
    </>
  );
}
