"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useParams, redirect } from "next/navigation";
import gsap from "gsap";
import { projects } from "utilities/exports";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Project() {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const titleRef = useRef(null);
  const imageRef = useRef(null);

  /**
  * Calculates the ID of the previous or following project based on an offset.
  * @param {number} offset - The number to increase or decrease the current ID of the project.
  * @returns {string} The ID of the calculated project.
  */
  const buildProjectId = (offset) => {
    const currentIdNumber = parseInt(id.split('-')[1], 10);
    const newIdNumber = currentIdNumber + offset;
    return `project-${newIdNumber}`;
  };

  const previousProjectExists = projects.some(project => project.id === buildProjectId(-1));
  const nextProjectExists = projects.some(project => project.id === buildProjectId(1));

  /**
  * Manage the click event, establishing the selected image and applying an animation.
  * @param {string} imageUrl - The URL of the selected miniature image.
  */
  const handleThumbnailClick = (imageUrl) => {  
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setSelectedImage(imageUrl);
          gsap.fromTo(imageRef.current, 
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    });
  };

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
        <section className="xxxxs:w-xxxxs xxxs:w-xxxs xxs:w-xxs xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl xxl:w-xxl xxxl:w-xxxl flex md:flex-row flex-col min-h-[calc(100vh-100px)] m-auto px-sp8 gap-sp12">
          {/* Image Section */}
          <section className="relative w-full flex pl-sp12 h-[400px] md:h-[calc(100vh-150px)]">
              <Image
                role="img"
                src={selectedImage}
                fill
                style={{ objectFit: "cover" }}
                unoptimized={false}
                priority={true}
                quality={75}
                alt={`${selectedProject.title} Image`}
                ref={imageRef}
              />
          </section>
          {/* Projects Title Section */}
          <section className="w-full flex flex-col justify-start">
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
                <section ref={titleRef}>
                  <h1 className="w-fit font-futura-light text-big_paragraph mb-sp4 bg-black text-white rounded-md px-sp4 py-sp2">{selectedProject.title}</h1>
                </section>
                {/* Gist */}
                <section>
                  <h2 className="mb-sp3 font-futura-light text-subtitle">{selectedProject.gist}</h2>
                </section>
                {/* Separator */}
                <section>
                  <hr className="mb-sp5 separator" />
                </section>
                {/* Thumbs */}
                <section className="flex flex-wrap gap-sp4 mb-sp5 md:justify-start justify-between">
                  {
                    selectedProject.images && selectedProject.images.map((image, index) => {
                      return (
                        <div className={`cursor-pointer ${image === selectedImage ? 'outline outline-2 outline-offset-2 outline-primary_link_hover' : ''}`} key={index} onClick={() => handleThumbnailClick(image)}>
                          <Image
                            role="img"
                            src={image}
                            width={90}
                            height={90}
                            style={{
                              objectFit: "cover",
                              aspectRatio: "1/1"
                            }}
                            unoptimized = {false}
                            priority={false}
                            quality={35}
                            alt={`Image Thumbnail ${index}`}
                          />
                        </div>
                      )
                    })
                  }
                </section>
                {/* Description */}
                <section>
                  {selectedProject.description && selectedProject.description.map((desc, index) => {
                    return (
                      <>
                        <p className="mb-sp3 font-roboto text-paragraph font-light" key={index}>
                          {desc}
                        </p>
                      </>
                    )
                  })}
                </section>
          </section>
        </section>
      </main>
    </>
  );
}
