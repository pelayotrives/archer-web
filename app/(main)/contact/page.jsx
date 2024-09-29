"use client";

import React from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import Button from "@/components/tailwind-components/PrimaryButton";

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
        toast.success("Correo enviado con éxito.");
        reset(); // Limpia el formulario después de un envío exitoso
      })
      .catch((error) => {
        console.log("Error al enviar el correo:", error.text);
        toast.error("Hubo un error al enviar el correo.");
      });
  };

  return (
    <>
      <Head>
        <title>Archer Arquitectura | Contacto</title>
        <meta property="og:title" content="Archer Arquitectura | Contacto" key="title" />
        <meta
          name="description"
          content="Contacta con Archer Arquitectura. Solicita tu presupuesto o visita en nuestro estudio de arquitectura ubicado en Madrid."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-primary_bg">
        <ToastContainer />
        <section className="min-h-[calc(100vh-80px)] h-full">
          <section className="mx-sp8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pt-8">
            <section className="w-full flex flex-col justify-center">
              <img src="http://placehold.co/1000x550" alt="" />
            </section>
            <section className="w-full flex flex-col justify-center">
              {/* ROW INFO 1 */}
              <div>
                <h4 className="pb-3">Correo electrónico</h4>
                <p className="pb-4">
                  <a href="mailto:info@archerarquitectura.com">
                    info@archerarquitectura.com
                  </a>
                </p>
                <hr />
                <br />
              </div>
              {/* ROW INFO 2 */}
              <div>
                <h4 className="pb-3">Teléfonos</h4>
                <div className="flex flex-wrap gap-2 pb-4">
                  <a href="tel:+34650436813">+34 650 436 813</a> |{" "}
                  <a href="tel:+34914855357">+34 914 855 357</a>
                </div>
                <hr />
                <br />
              </div>
              {/* ROW INFO 3 */}
              <div>
                <h4 className="pb-3">Dirección</h4>
                <address className="pb-4 not-italic">
                  Avenida M-40, nº5 Oficina A102. Polígono Ventorro del Cano, Madrid.
                </address>
                <hr />
              </div>
            </section>
          </section>
          <section className="bg-[#F4F2EF] py-20 mt-20">
            {/* FORM */}
            <form className="w-11/12 sm:w-6/12 m-auto" onSubmit={handleSubmit(onSubmit)}>
                {/* NAME */}
                <div>
                  <input
                    autoComplete="this-will-make-the-input-not-to-autocomplete"
                    className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0 focus:border-b-primary_btn mb-6"
                    type="text"
                    placeholder="Nombre*"
                    {...register("nombre", {
                      required: "El nombre es requerido",
                    })}
                  />
                  {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
                </div>
                {/* SURNAME */}
                <div>
                  <input
                    autoComplete="this-will-make-the-input-not-to-autocomplete"
                    className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0 focus:border-b-primary_btn mb-6"
                    type="text"
                    placeholder="Apellidos"
                    {...register("apellidos")}
                  />
                </div>
                {/* EMAIL */}
                <div>
                  <input
                    autoComplete="this-will-make-the-input-not-to-autocomplete"
                    className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0 focus:border-b-primary_btn mb-6"
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
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                {/* PHONE */}
                <div>
                  <input
                    autoComplete="this-will-make-the-input-not-to-autocomplete"
                    className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0 focus:border-b-primary_btn mb-6"
                    type="number"
                    placeholder="Teléfono"
                    {...register("telefono")}
                  />
                </div>
                {/* MESSAGE */}
                <div>
                  <textarea
                    className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0 focus:border-b-primary_btn mb-10"
                    placeholder="Mensaje*"
                    {...register("mensaje")}
                  />
                </div>
                {/* BUTTON */}
                <Button className="flex m-auto" type="submit">Enviar</Button>
              </form>
          </section>
        </section>
      </main>
    </>
  );
}
