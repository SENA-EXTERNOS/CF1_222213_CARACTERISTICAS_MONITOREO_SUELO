<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Geomorfología
    
    p Cuando se habla de geomorfología del suelo, se habla de procesos de conformación, que ocurren desde la formación del planeta tierra, pasando por las eras geológicas hasta como se conoce hoy.

    .BGIMG05.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Se refiere a la ciencia que tiene como objeto el estudio del origen, evolución y conformación del suelo a partir de tres variables denominadas estructura, procesos y tiempo. Las interpretaciones hechas por esta se complementan con otras ciencias como pedología, petrología sedimentaria, geología, neo tectónica, arqueología y botánica, son reflejadas en mapas temáticos para mostrar las formas que caracteriza una sección del suelo y las posibles amenazas a las que puede estar expuesta esta sección.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img01.svg")
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Elementos topográficos y agrimensura
    
    p La agrimensura es denominada como el “arte de medir”, se practica desde la edad de bronce valiéndose de ciencias, técnicas y criterios para ubicar, delimitar y estudiar una extensión de un territorio.
    .h5.mb-5 Para el estudio de suelos la topografía y la agrimensura se encargan de medir, procesar, difundir información acerca de la tierra, valiéndose de mediciones lineales, ángulos y desniveles, para confeccionar un gráfico que demuestre un terreno.

    .BGIMG06.p-4.mb-5(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Generalidades del sistema de posicionamiento global 
    
    p La herramienta usada para medir un terreno es un sistema de posicionamiento global (#[em GPS] por sus siglas en inglés), desarrollado para ser más exacto y preciso, ya que sus datos se pueden descargar y por medio de un #[em software] que se conecta con las mediciones al un satélite, arrojando datos exactos con coordenadas y áreas puntuales medidas.
    p.mb-5 El #[em GPS] o sistema de posicionamiento global, está basado en satélites artificiales dispuestos en una constelación, los cuales brindan una posición precisa al usuario y responden a una de las preguntas más antiguas que se ha cuestionado el ser humano: ¿en qué lugar de la Tierra me encuentro? Conozcamos sus generalidades:
    
    .row.justify-content-center.mb-4(data-aos="zoom-out")
      AcordionA.mb-5(tipo="a" clase-tarjeta="BGR10")
        .row.justify-content-center(titulo="Posicionamiento global")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Se diseñó originalmente con fines militares para la obtención de posicionamiento, pero no fue mucho el tiempo transcurrido hasta que se enteraron que tenía otras aplicaciones no solo en lo militar, estas aplicaciones estaban sustentadas en la navegación y en la topografía, pues la información precisa del punto en el cual un usuario se ubica, también es valiosa en estas disciplinas.        
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img05.svg")
        .row.justify-content-center(titulo="Satélite")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Este sistema funciona gracias a tres segmentos diferentes, espacial, de control y de usuarios. El segmento espacial, consiste en aproximadamente 24 satélites que giran alrededor de la tierra durante las 24 horas del día, estos satélites llevan en su interior relojes atómicos muy precisos que generan las señales transmitidas por satélite.        
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img06.svg")
        .row.justify-content-center(titulo="Estación de observación")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 El segmento de control consiste en una estación de control maestro, cinco estaciones de observación y cuatro antenas de tierra distribuidas en cinco puntos muy cercanos al Ecuador terrestre. Estos cumplen con la función de reconocer la ubicación de cada satélite, sus señales son leídas en las estaciones y enviadas al centro de control, donde son procesadas y determinan cualquier error, las estaciones de observación tienen como nombre #[em Hawaii, Colorado Springs], Ascensión, Diego García y #[em Kwajalein].        
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img07.svg")
        .row.justify-content-center(titulo="Receptor <em>GPS</em>")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Finalmente, el segmento usuarios comprende a cualquier persona que cuente con un receptor de señales #[em GPS].        
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img08.svg")

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Para ampliar esta información, revisar el material complementario, en el cual encontrará más información sobre los #[em GPS].

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Sistema de información geográfica -SIG
    
    p En la actualidad son los sistemas de información geográfica - SIG, la herramienta usada para construir mapas, delimitar terrenos, explorar usos del suelo, entre otros.
    .h5.mb-5 Un Sistema de Información Geográfica (SIG), busca recopilar, gestionar y analizar datos; es una rama de la geografía que integra muchos tipos de datos. Analiza la ubicación espacial y organiza capas de información en visualizaciones, utilizando mapas y escenas en 3D:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      TabsC.color-primario
        .BGIMG07.p-md-4.p-3(titulo="Sistemas de información geográfica (SIG)")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img09.svg")
            .col-lg-5
              p.mb-0 Los sistemas que son capaces de almacenar, capturar, modelar, generar y analizar datos espaciales en dispositivos como computadores, celulares o #[em GPS] son denominados sistemas de información geográfica (SIG). Estos sistemas permiten abordar problemas de planificación y gestión desde la información geográfica representando en territorio, a partir de modelos de datos, ya sean tipo ráster (fotografía digital, imágenes de satélites o mapas escaneados) o tipo vectorial que representan la realidad por medio de figuras geométricas como puntos, líneas o polígonos.
        .BGIMG07.p-md-4.p-3(titulo="Generación de mapas")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img10.svg")
            .col-lg-5
              p.mb-0 Los sistemas de información geográfica generan mapas, para estos, se requieren datos como insumo inicial para generar información que proviene de sensores remotos, fotografías aéreas o #[em GPS]; se requieren programas SIG instalados que permitan interpretar la información a quien la manipule. Como resultado se tendrá el insumo para caracterizar un espacio determinado, en caso del recurso suelo facilitará el entendimiento e interpretación de procesos y factores formadores, así como de los riesgos naturales y antrópicos asociados a él.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Origen, evolución y conformación del suelo',
        texto:
          'La topografía es la disciplina que estudia los principios y procedimientos que nos permiten ilustrar las formas, detalles y elementos de la Tierra, tanto los naturales como los creados por el ser humano',
        imagen: require('@/assets/curso/tema2/img02.svg'),
      },
      {
        titulo: 'Croquis, mapas litorales o cartas de navegación',
        texto:
          'Medir, surgió por la necesidad de establecimiento de espacios propios para explotar la tierra de civilizaciones, cuando el hombre dejó de ser nómada, marcando límites entre terrenos. Posteriormente, incorporó conceptos geométricos que surgieron, gracias a la construcción de paredes y viviendas primitivas. Se comenzaron a desarrollar cálculos matemáticos, permitiendo relacionar posiciones terrestres con figuras observables, al activarse las rutas comerciales terrestres y marítimas, se requirieron dibujantes que confeccionarán croquis, mapas litorales o cartas de navegación, fortaleciendo aspectos geodésicos y topográficos.',
        imagen: require('@/assets/curso/tema2/img03.jpg'),
      },
      {
        titulo: 'Unidades presentes en el paisaje',
        texto:
          'Realizar mapas o croquis en estudios de suelo, es importante para indicar la posición de parcelas, brindando información relevante para el estudio, como unidades de mayor homogeneidad presentes en el paisaje, el uso del suelo y los relieves que presenta el mismo; posicionándose no solo como una herramienta útil en las etapas previas a un levantamiento de suelos, sino como un elemento de custodia de la evolución del manejo del suelo en el tiempo.',
        imagen: require('@/assets/curso/tema2/img04.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
