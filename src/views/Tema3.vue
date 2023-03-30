<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo y técnicas de muestreo
    
    p A continuación, lo invitamos a ver el siguiente video, donde podrá estudiar la información sobre el manejo y técnicas de muestreo de suelos:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Op7Mt9I3lZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


                  
      separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Equipos y herramientas

      p El muestreo de suelos para la fertilización agrícola, es fundamental para la producción y, para hacerlo, se utilizan diferentes tipos de herramientas.
      p.mb-5 Algunos de estos equipos y herramientas, necesarios a la hora de realizar muestreo de suelos, se encuentran listados a continuación:
      
      .row.justify-content-between.mb-4
        .col-lg-6(data-aos="fade-right")
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Baldes rotulados con 10 o 20 centímetros.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Barreno.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Bolsas plásticas.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Cinta métrica.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Croquis del terreno.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Sistema de posicionamiento global.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Guantes.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Lápiz y marcador.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Libreta y formatos de campo.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Lona o plástico.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Machete o cuchillo.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Pala o palín.
            li 
              i.fas.fa-leaf(style="color:#85BF50")
              | Registros.
            li
              i.fas.fa-leaf(style="color:#85BF50")
              | Rótulos.
        .col-lg-5.col-8(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img02-.svg")

      separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Elementos de seguridad y salud en el trabajo
      
      p Es importante considerar que las actividades en campo para la recolección de muestras, requieren elementos de protección para evitar posibles accidentes y afectaciones a la salud durante las labores.
      p.mb-5 Para el desarrollo de la actividad de muestreo, es recomendable utilizar elementos básicos de protección de seguridad y salud en el trabajo, como: gafas, guantes, botas y la vestimenta adecuada para la manipulación de las muestras; todo esto, porque pueden encontrarse contaminadas y, adicional, se deben tener también en cuenta, las siguientes generalidades:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR12A.p-4
            .row.py-4
              .col-10
                p.ms-5.mb-0 Además de la adopción de posturas adecuadas relacionadas con la eliminación de riesgos para el sistema óseo y muscular.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR13.p-4
            .row.py-4
              .col-10
                p.ms-5.mb-0 Es de gran importancia considerar los diferentes escenarios o sitios en los cuales se tomarán las muestras, que incluyen suelos con diferencias de nivel en terrenos pendientes y superficies deslizantes.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR12.p-4
            .row.py-4
              .col-10
                p.ms-5.mb-0 Por ello, es importante tomar las muestras de suelo y volver a tapar, para evitar posibles torceduras o percances con las demás personas del equipo, recordando que es responsabilidad de las personas involucradas en los procesos.
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR13A.p-4
            .row.py-4
              .col-10
                p.ms-5.mb-0 Identificar los posibles riesgos, minimizarlos y evitarlos con el fin de prevenir los accidentes laborales, esto debe hacerse antes, durante y después de la realización de las labores de campo.
      .col-lg-3.img01.d-none.d-lg-flex(data-aos="fade-left")
        img.img02(src='@/assets/curso/tema3/img07.svg')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Manejo de registros
    
    p El diseño y la utilización de los registros en las actividades relacionadas con manejo adecuado del suelo es fundamental, como en los demás procesos, es necesario para llevar a cabo la trazabilidad de los procedimientos y permite la toma de decisiones pertinentes con la situación presente y futura, ya sea para mejorar o prevenir aspectos que influyeron negativamente.

    .bloque-texto-g.color-primario.bloque-inv.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img08.svg')})`}"
      )(data-aos="fade-left")
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los muestreos deben tener como respaldo su correspondiente registro, en él se consigna información general como el nombre del equipo que está realizando el muestreo, localización del terreno, el porcentaje de pendiente, el nombre de la finca y del productor que la trabaja, el nombre de la comunidad o vereda, datos sobre el relieve como la forma y posición, las precipitaciones, el tipo de vegetación presente, el tipo de muestreo que se utilizó, el número de submuestras que componen una muestra, la clasificación taxonómica, el uso del suelo, la fecha y muestreo. También el uso y manejo de la parcela, el manejo de cultivo y además se llena la tabla que contiene información de la muestra, como el horizonte de la cual fue extraída, la profundidad, la textura que tiene la muestra, el color y, se asigna un código, la información contenida en el registro va a depender del método elegido para el estudio. 
    
    .BGIMG06.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img09.svg')
        .col-lg-7
          p También el uso y manejo de la parcela, el manejo de cultivo y además se llena la tabla que contiene información de la muestra, como el horizonte de la cual fue extraída, la profundidad, la textura que tiene la muestra, el color y, se asigna un código, la información contenida en el registro va depender del método elegido para el estudio.
          p.mb-0 Para el etiquetado de la muestra, se debe consignar el código de la muestra, el nombre del propietario y el nombre de la finca, el uso del suelo del cual se tomó la muestra, la fecha de muestreo, la profundidad a la que se realizó el mismo y la ubicación de la parcela en el paisaje. 
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        .cajon-b.color-primario.p-3.mb-4(data-aos="fade-right")
          p.mb-0 Aprendiz, para concluir este componente formativo, recuerde que manejar suelo según procedimientos técnicos y tipo de cultivo es muy importante para la conservación de la biodiversidad y los ecosistemas, identificando este recurso de acuerdo con procesos, factores formadores, riesgos naturales y antrópicos, según criterios técnicos y normativos; se han desarrollado las características y monitoreo del suelo como parte de un cuerpo natural determinante para los procesos bióticos, abióticos y para la prestación de los servicios ecosistémicos, en los cuales, los ciclos biogeoquímicos hacen parte del equilibrio y los procesos físicos, químicos, y abióticos que se dan en el planeta.
        .cajon-b.color-acento-botones.img-end.p-3(data-aos="fade-right")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, allí encontrará la síntesis, la actividad didáctica, el material complementario, entre otros recursos. 
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img10.jpg')



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
