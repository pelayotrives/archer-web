"use client";

import { projects } from "@/utilities/exports";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import Head from "next/head";
import gsap from "gsap";

export default function Projects() {
  const router = useRouter()
  const imageRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => {
      gsap.fromTo(
        imageRef.current,
        { filter: "grayscale(100%)", scale: 0.95 },
        { filter: "grayscale(0%)", scale: 1, duration: 1.5, ease: "power2.out" }
      );
  }, [selectedProject]);

  return (
    <>
      <Head>
        <title>Archer Arquitectura | Proyectos</title>
        <meta property="og:title" content="Archer Arquitectura | Proyectos" key="title"/>
        <meta name="description" content="Descubre todos los proyectos en los que ha participado Archer Arquitectura. Estudio de arquitectura ubicado en Madrid."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex min-h-[calc(100vh-80px)]">
        <section className="bg-primary_bg w-1/2 flex flex-col justify-end gap-3 pb-8">
        {projects.map((project, index) => {
          return (
          <div key={index} className="mx-8">
            <div className="group flex flex-row w-full justify-between items-center cursor-pointer border-b-2 border-solid border-black pb-2" onMouseOver={() => setSelectedProject(project)} onClick={() => router.push(`/projects/${project.id}`)}>
              <p className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out text-subtitle font-futura-book">{project.title}</p>
              <p className="text-subtitle lowercase font-futura-book">{project.key}</p>
            </div>
          </div>
          )
        })}
        </section>
        <section className="bg-primary_bg w-1/2 flex flex-col justify-center items-center pb-8">
          <div className="mx-8 flex justify-end w-[72.5%]">
            <img className=" object-cover rounded-lg" src={selectedProject.imageUrl} alt={selectedProject.title} ref={imageRef}/>
          </div>
        </section>
      </main>
    </>
  );
}
