<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGIMG01.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p.text-white.mb-0 Apreciado aprendiz, bienvenido a este nuevo componente formativo, que abordará el concepto del suelo, destacando aspectos relevantes en torno a su clasificación, características y componentes tanto fisicoquímicos como biológicos; por esta razón, la información suministrada busca brindarle elementos didácticos que permitan un entendimiento de la temática y una exploración conceptual del contenido abordado. Se pretende tener un recorrido de conocimiento, desde un punto de vista práctico y desde diferentes perspectivas, llevándolo de esta manera a que defina algunas conclusiones básicas sobre la importancia de los suelos en los ecosistemas y el uso que se le da a los mismos. Por lo tanto, se invita a ver el video que lo adentrará en el manejo del suelo teniendo en cuenta los aspectos relevantes para su estudio, las técnicas en las que son aplicables, los materiales y métodos requeridos para llevar a cabo un muestreo de suelos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/intro/img01.svg")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
