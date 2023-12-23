import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from "@/assets/exports";

export default function ProjectsSlider() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...carouselSettings}>
      {projects.map((project) => {
        return (
          <section key={project.id}>
            <h3 className="font-bold font-roboto">{project.title}</h3>
            <p className="font-roboto">{project.description}</p>
            <p className="font-roboto mb-sp4">{project.artist}</p>
            <Image
              role="img"
              width={400}
              height={500}
              quality={80}
              priority={true}
              src={project.imageUrl}
              alt={`Carousel Image ${project.id}`}
            />
          </section>
        );
      })}
    </Slider>
  );
}
