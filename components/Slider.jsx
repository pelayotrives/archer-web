"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from "utilities/exports";

export default function GenericSlider() {
  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    swipe: true,
    pauseOnHover: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...carouselSettings}>
      {projects.slice(0, 2).map((project) => {
        return (
          <section className="pr-sp3 pl-sp3 mt-sp4" key={project.id}>
            <img src={project.imageUrl} alt={`Carousel Image ${project.key}`} />
            <div className="flex flex-row justify-between">
              <h3 className="text-title font-futura-medium">{project.title}</h3>
              <p className="text-title font-futura-medium">{project.key}</p>
            </div>
            <p className="font-roboto font-medium">{project.artist}</p>
            <p className="font-roboto">{project.description}</p>
          </section>
        );
      })}
    </Slider>
  );
}
