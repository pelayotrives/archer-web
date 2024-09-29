"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useParams, redirect } from "next/navigation";
import gsap from "gsap";
import { projects } from "utilities/exports";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Project() {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const titleRef = useRef(null);
  const yearRef = useRef(null);

  /**
  * Calculates the ID of the previous or following project based on an offset.
  * @param {number} offset - The number to increase or decrease the current ID of the project.
  * @returns {string} The ID of the calculated project.
  */
  const buildProjectId = (offset) => {
    const parts = id.split('-');
    if (parts.length < 2 || isNaN(parseInt(parts[1], 10))) {
      console.error("Invalid project ID format");
      return null;
    }
    const currentIdNumber = parseInt(parts[1], 10);
    const newIdNumber = currentIdNumber + offset;
  
    const maxId = projects.length;
    const minId = 1;
  
    if (newIdNumber < minId || newIdNumber > maxId) {
      console.error("Project ID out of bounds");
      return null; 
    }
  
    return `project-${newIdNumber}`;
  };

  const previousProjectExists = projects.some(project => project.id === buildProjectId(-1));
  const nextProjectExists = projects.some(project => project.id === buildProjectId(1));

  /**
  * Effect to search and establish the selected project based on the URL ID.
  */
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

  /**
  * Effect to establish the initially selected image when the project is located.
  */
  useEffect(() => {
    if (id && selectedProject) {
      setSelectedImage(selectedProject.imageUrl);
    }
  }, [id, selectedProject]);

  /**
  * Effect to apply an animation to the reference of the project title when assembling the component.
  */
  useEffect(() => {
    gsap.fromTo(titleRef.current, 
        { y: -50, opacity: 0 },
        { duration: 2, y: 0, opacity: 1 }
    );
    gsap.fromTo(yearRef.current, 
      { y: -50, opacity: 0 },
      { delay: 0.25, duration: 2, y: 0, opacity: 1 }
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
      <main className="bg-primary-background">
        <section className="xxxxs:w-xxxxs xxxs:w-xxxs xxs:w-xxs xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl flex md:flex-row flex-col min-h-[calc(100vh-100px)] m-auto px-sp8 gap-sp12">
          {/* Image Section */}
          <section className="w-full md:w-1/2 flex flex-col">
            <Splide aria-label="Project Carousel" tag="section" options={{
              arrows: true,
              autoplay: true,
              breakpoints: {
                767: {
                  arrows: false,
                  pagination: true
                },
              },
              direction: "ltr",
              drag: true,
              easing: "ease",
              interval: 5000,
              keyboard: true,
              pagination: false,
              pauseOnHover: true,
              rewind: true,
              rewindSpeed: 2000,
              perMove: 1,
              perPage: 1,
            }}>
              {
                selectedProject.images && selectedProject.images.map((image, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className="relative w-full h-[400px] md:h-[calc(100vh-150px)]">
                        <Image
                          role="img"
                          src={image}
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized={false}
                          priority={true}
                          quality={75}
                          alt={`${selectedProject.title} Image`}
                        />
                      </div>
                  </SplideSlide>
                  )
                })
              }
            </Splide>
          </section>
          {/* Projects Title Section */}
          <section className="w-full md:w-1/2 flex flex-col justify-start">
                {/* Previous - Next */}
                <nav className="flex flex-row justify-between pb-sp6">
                  {previousProjectExists ? (
                    <Link legacyBehavior href={`/projects/${buildProjectId(-1)}`}>
                      <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular hover:text-primary-link-hover cursor-pointer gap-sp2"><FaChevronLeft /><a>Anterior</a></span>
                    </Link>
                  ) : (
                    <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular text-gray-400 cursor-not-allowed gap-sp2"><FaChevronLeft />Anterior</span>
                  )}
                  {nextProjectExists ? (
                    <Link legacyBehavior href={`/projects/${buildProjectId(1)}`}>
                      <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular hover:text-primary-link-hover cursor-pointer gap-sp2"><a>Siguiente</a><FaChevronRight /></span>
                    </Link>
                  ) : (
                    <span className="flex flex-row items-center text-paragraph transition-all font-roboto font-regular text-gray-400 cursor-not-allowed gap-sp2"><a>Siguiente</a><FaChevronRight /></span>
                  )}
                </nav>
                {/* Title */}
                <section className="flex flex-row gap-sp4">
                  <h1 ref={titleRef} role="heading" aria-level={1} className="w-fit font-futura-light text-big-paragraph mb-sp4 bg-black text-white rounded-md px-sp4 py-sp2">{selectedProject.title}</h1>
                  <p ref={yearRef} className="w-fit font-futura-light text-big-paragraph mb-sp4 border border-black bg-transparent text-black rounded-md px-sp4 py-sp2">{selectedProject.surface}</p>
                </section>
                {/* Separator */}
                <section>
                  <hr className="mb-sp5 separator" />
                </section>
                {/* Location + Year */}
                <section className="font-roboto text-primary-font text-big-paragraph flex flex-row gap-sp1 mb-sp3">
                  <span className="font-medium">{selectedProject.location} | {selectedProject.year}</span>
                </section>
                {/* Artist */}
                <section className="font-roboto text-primary-font text-paragraph flex flex-row flex-wrap gap-sp1 mb-sp1">
                  <span className="font-light">Proyecto: </span>
                  <a className="font-medium primary-link underline" href={selectedProject.projectLink} target="_blank">{selectedProject.project}</a>
                </section>
                {/* Builder */}
                <section className="font-roboto text-primary-font flex flex-row flex-wrap gap-sp1 mb-sp3">
                  <span className="font-light">Construcción: </span>
                  <p className="font-medium">{selectedProject.construction}</p>
                </section>
                {/* Description */}
                <section>
                  {selectedProject.description && selectedProject.description.map((desc, index) => {
                    return (
                      <p className="mb-sp3 font-roboto text-paragraph font-light" key={index}>{desc}</p>
                    )
                  })}
                </section>
          </section>
        </section>
      </main>
    </>
  );
}
