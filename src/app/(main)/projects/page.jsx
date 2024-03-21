"use client";

import { projects } from "@/utilities/exports";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import gsap from "gsap";

function useWindowSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function checkSize() {
      setIsSmallScreen(window.innerWidth < 640);
    }

    window.addEventListener('resize', checkSize);
    // Initializes the state with the current window size
    checkSize(); 

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isSmallScreen;
}

export default function Projects() {
  const router = useRouter();
  const imageRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const isSmallScreen = useWindowSize();

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
        <meta
          property="og:title"
          content="Archer Arquitectura | Proyectos"
          key="title"
        />
        <meta
          name="description"
          content="Descubre todos los proyectos en los que ha participado Archer Arquitectura. Estudio de arquitectura ubicado en Madrid."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="w-full flex flex-row min-h-[calc(100vh-100px)] bg-primary_bg">
        {/* Projects Title Section */}
        <section className="sm:w-3/6 sm:justify-end sm:mt-0 w-full flex flex-col justify-start gap-3 mt-sp8 pb-sp14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group mx-sp12 mb-4 flex flex-col cursor-pointer"
              onMouseOver={() => setSelectedProject(project)}
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              {/* Title And Key */}
              <div className="flex flex-row justify-between items-center border-b-2 border-solid border-gray-200 pb-2">
                <p className="sm:group-hover:translate-x-2 sm:transition-transform sm:duration-300 sm:ease-in-out text-small_title font-futura-book">{project.title}</p>
                <p className="text-small_title lowercase font-futura-book">{project.key}</p>
              </div>
              {/* Gist */}
              <div className={`overflow-hidden transition-all duration-500 ease-out ${selectedProject.id === project.id || isSmallScreen ? 'max-h-80' : 'max-h-0'}`}>
                <p className={`text-paragraph font-futura-book pt-2 pb-sp4 transition-all duration-500 ease-in-out ${selectedProject.id === project.id || isSmallScreen ? 'opacity-100' : 'opacity-0'}`}>{project.gist}</p>
              </div>
              {/* Mobile Image */}
              <div className="sm:hidden flex">
                <img className="object-cover aspect-[1/1] max-w-[100%] rounded-lg" src={project.imageUrl} alt={project.title}/>
              </div>
            </div>
          ))}
        </section>
        {/* Image Section */}
        <section 
          className="sm:flex w-3/6 hidden justify-center rounded-sm items-end mt-sp8 mb-sp16 mx-sp12"
          style={{
            backgroundImage: `url(${selectedProject.imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          ref={imageRef}
        >
        </section>
      </main>
    </>
  );
}
