"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useParams, redirect } from "next/navigation";
import gsap from "gsap";
import { projects } from "utilities/exports";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Project() {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState("");

  const titleRef = useRef(null);

  const buildProjectId = (offset) => {
    const currentIdNumber = parseInt(id.split('-')[1], 10);
    const newIdNumber = currentIdNumber + offset;
    return `project-${newIdNumber}`;
  };

  const previousProjectExists = projects.some(project => project.id === buildProjectId(-1));
  const nextProjectExists = projects.some(project => project.id === buildProjectId(1));
  
  useEffect(() => {
    if (id) {
      const projectFound = projects.find((project) => project.id === id);
      if (projectFound) {
        setSelectedProject(projectFound);
      } else {
        redirect("/not-found");
      }
    }
  }, [id]);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
        { y: -50, opacity: 0 },
        { duration: 2, y: 0, opacity: 1 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{`Archer Arquitectura | ${selectedProject.title}`}</title>
        <meta property="og:title" content={`Archer Arquitectura | ${selectedProject.title}`} key="title"/>
        <meta name="description" content={`Descubre ${selectedProject.title} y todos los proyectos en los que ha participado a lo largo de su trayectoria Archer Arquitectura, estudio de arquitectura ubicado en Madrid.`}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary_bg">
        <section className="xxxxs:w-xxxxs xxxs:w-xxxs xxs:w-xxs xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl flex flex-row min-h-[calc(100vh-100px)] m-auto">
          {/* Image Section */}
          <section 
            className="w-full flex justify-center items-end rounded-sm mx-sp8 mb-sp12"
            style={{
              backgroundImage: `url(${selectedProject.imageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </section>
          {/* Projects Title Section */}
          <section className="w-full flex flex-col justify-start mx-sp8">
                {/* Previous - Next */}
                <nav className="flex flex-row justify-between pb-sp8">
                  {previousProjectExists ? (
                    <Link legacyBehavior href={`/projects/${buildProjectId(-1)}`}>
                      <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular hover:text-primary_link_hover cursor-pointer gap-sp2"><FaChevronLeft /><a>Anterior</a></span>
                    </Link>
                  ) : (
                    <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular text-gray-400 cursor-not-allowed gap-sp2"><FaChevronLeft />Anterior</span>
                  )}
                  {nextProjectExists ? (
                    <Link legacyBehavior href={`/projects/${buildProjectId(1)}`}>
                      <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular hover:text-primary_link_hover cursor-pointer gap-sp2"><a>Siguiente</a><FaChevronRight /></span>
                    </Link>
                  ) : (
                    <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular text-gray-400 cursor-not-allowed gap-sp2"><a>Siguiente</a><FaChevronRight /></span>
                  )}
                </nav>
                {/* Title */}
                <div ref={titleRef}>
                  <h1 className="w-fit font-futura-light text-big_paragraph mb-sp4 bg-black text-white rounded-md px-sp4 py-sp2">{selectedProject.title}</h1>
                </div>
                {/* Gist */}
                <div>
                  <h2 className="mb-sp3 font-futura-light text-subtitle">{selectedProject.gist}</h2>
                  <hr className="separator" />
                </div>
                {/* Mobile Image */}
          </section>
        </section>
      </main>
    </>
  );
}
