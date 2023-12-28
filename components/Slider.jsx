"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from "@/assets/exports";

export default function GenericSlider() {
  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    swipe: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...carouselSettings}>
      {projects.map((project) => {
        return (
          <section className="px-sp3 w-fit" key={project.id}>
            <h3 className="text-big_paragraph font-semibold font-roboto">{project.title}</h3>
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
