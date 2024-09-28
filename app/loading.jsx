import React from 'react'

export default function Loading() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen gap-sp2 bg-primary_bg">
      <h5 className="text-subtitle font-semibold font-roboto animate-pulse">Cargando... 🚀</h5>
      <p className="text-big_paragraph font-roboto animate-pulse">¡Enseguida lo tenemos!</p>
    </section>
  )
}
