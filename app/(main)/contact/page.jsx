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
        <section className="mx-sp8 min-h-[calc(100vh-80px)] h-full grid grid-cols-2">
          <section className="w-full">
            <img src="http://placehold.co/600x400" alt="" />
          </section>
          <section className="w-full">
            {/* ROW INFO 1 */}
            <div>
              <h4 className="tracking-widest">Correo electrónico</h4>
              <a className="" href="mailto:info@archerarquitectura.com">
                info@archerarquitectura.com
              </a>
              <hr />
            </div>
            {/* ROW INFO 2 */}
            <div>
              <h4 className="tracking-widest">Teléfonos</h4>
              <div className="flex flex-wrap gap-2">
                <a href="tel:+34650436813">+34 650 436 813</a> |{" "}
                <a href="tel:+34914855357">+34 914 855 357</a>
              </div>
              <hr />
            </div>
            {/* ROW INFO 3 */}
            <div>
              <h4 className="tracking-widest">Dirección</h4>
              <address className="">
                Avenida M-40, nº5 Oficina A102. Polígono Ventorro del Cano, Madrid.
              </address>
              <hr />
            </div>
            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* NAME */}
              <div>
                <input
                  autoComplete="this-will-make-the-input-not-to-autocomplete"
                  className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0"
                  type="text"
                  placeholder="Tu nombre"
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
                  className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0"
                  type="text"
                  placeholder="Tus apellidos"
                  {...register("apellidos")}
                />
              </div>
              {/* EMAIL */}
              <div>
                <input
                  autoComplete="this-will-make-the-input-not-to-autocomplete"
                  className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0"
                  type="email"
                  placeholder="Tu email"
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
                  className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0"
                  type="number"
                  placeholder="Tu teléfono"
                  {...register("telefono")}
                />
              </div>
              {/* MESSAGE */}
              <div>
                <textarea
                  className="w-full border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent focus:ring-0"
                  placeholder="Tu mensaje"
                  {...register("mensaje")}
                />
              </div>
              {/* BUTTON */}
              <Button type="submit">Enviar</Button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}
