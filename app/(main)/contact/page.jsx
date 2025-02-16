"use client";

import React from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then((result) => {
        console.log("Correo enviado:", result.text);
        toast.success("¡Correo enviado con éxito!");
        reset();
      })
      .catch((error) => {
        console.log("Error al enviar el correo:", error.text);
        toast.error("¡Hubo un error al enviar el correo!");
      });
  };

  return (
    <>
      <Head>
        <title>Archer Arquitectura | Contacto</title>
        <meta
          property="og:title"
          content="Archer Arquitectura | Contacto"
          key="title"
        />
        <meta
          name="description"
          content="Contacta con Archer Arquitectura. Solicita tu presupuesto o visita en nuestro estudio de arquitectura ubicado en Madrid."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary-background">
        <ToastContainer />
        <section className="min-h-[calc(100vh-80px)] h-full">
          <section className="mx-sp8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pt-8">
            <section className="w-full flex flex-col justify-center">
              <img src="http://placehold.co/1000x550" alt="" />
            </section>
            <section className="w-full flex flex-col justify-center">
              {/* ROW INFO 1 */}
              <div>
                <h4 className="pb-3 font-roboto">Correo electrónico</h4>
                <p className="pb-4 font-roboto">
                  <a
                    className="primary-link"
                    href="mailto:info@archerarquitectura.com"
                  >
                    info@archerarquitectura.com
                  </a>
                </p>
                <hr />
                <br />
              </div>
              {/* ROW INFO 2 */}
              <div>
                <h4 className="pb-3 font-roboto">Teléfonos</h4>
                <div className="flex flex-wrap gap-2 pb-4 font-roboto">
                  <a className="primary-link" href="tel:+34650436813">
                    +34 650 436 813
                  </a>{" "}
                  |{" "}
                  <a className="primary-link" href="tel:+34914855357">
                    +34 914 855 357
                  </a>
                </div>
                <hr />
                <br />
              </div>
              {/* ROW INFO 3 */}
              <div>
                <h4 className="pb-3 font-roboto">Dirección</h4>
                <address className="pb-4 font-roboto not-italic">
                  <a
                    className="primary-link"
                    href="https://maps.app.goo.gl/LaGsxdi5ameoinZB9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avenida M-40, nº5 Oficina A102. Polígono Ventorro del Cano,
                    Madrid.
                  </a>
                </address>
                <hr />
              </div>
            </section>
          </section>
          <section className="bg-[#F4F2EF] py-20 mt-20">
            {/* FORMULARIO */}
            <form
              className="w-11/12 sm:w-6/12 m-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* NOMBRE */}
              <div className="mb-6">
                {errors.nombre && (
                  <p className="text-red-500 font-roboto font-normal text-lg mb-2">
                    {errors.nombre.message}
                  </p>
                )}
                <input
                  autoComplete="off"
                  className="w-full font-roboto text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                  type="text"
                  placeholder="Nombre*"
                  {...register("nombre", {
                    required: "El nombre es requerido",
                  })}
                />
              </div>
              {/* APELLIDOS */}
              <div className="mb-6">
                <input
                  autoComplete="off"
                  className="w-full font-roboto text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                  type="text"
                  placeholder="Apellidos"
                  {...register("apellidos")}
                />
              </div>
              {/* EMAIL */}
              <div className="mb-6">
                {errors.email && (
                  <p className="text-red-500 font-roboto font-normal text-lg mb-2">
                    {errors.email.message}
                  </p>
                )}
                <input
                  autoComplete="off"
                  className="w-full font-roboto text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                  type="email"
                  placeholder="Email*"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Formato de email inválido",
                    },
                  })}
                />
              </div>
              {/* TELÉFONO */}
              <div className="mb-6">
                <input
                  autoComplete="off"
                  className="w-full font-roboto text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                  type="number"
                  placeholder="Teléfono"
                  {...register("telefono")}
                />
              </div>
              {/* MENSAJE */}
              <div className="mb-10">
                {errors.mensaje && (
                  <p className="text-red-500 font-roboto font-normal text-lg mb-2">
                    {errors.mensaje.message}
                  </p>
                )}
                <textarea
                  className="w-full font-roboto text-lg p-3 rounded focus:outline-gold border border-[#D9D9D9]"
                  placeholder="Mensaje*"
                  {...register("mensaje", {
                    required: "El mensaje es requerido",
                  })}
                />
              </div>
              {/* BOTÓN */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="primary-button flex m-auto font-roboto"
                >
                  Enviar
                </button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}
