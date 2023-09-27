<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El suelo

    p Cuerpo natural constituido principalmente por minerales, agua, aire, materia orgánica, que desempeñan constantemente procesos bióticos o abióticos cumpliendo funciones indispensables para los seres humanos en el planeta.

    .BGIMG02.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Superficie terrestre
            p.mb-0 El suelo cubre la mayor parte de la superficie terrestre, es determinante para la estructura y funcionamiento de los ciclos biogeoquímicos en los cuales se da intercambio de materiales y energía a través del mismo y, es el soporte de la mayoría de actividades humanas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img01.svg")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Intemperismo físico y químico
            p.mb-0 Se forma gracias a tres métodos distintos, el intemperismo físico y químico en el cual las condiciones climáticas proporcionan energía y agua, el sistema va liberando al medio trozos de suelo que se transportan hasta otros sitios en los cuales son sedimentados.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img02.svg")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Filtraciones por lluvia
            p.mb-0 El segundo método se da cuando el agua lluvia se filtra hasta el subsuelo, llevando consigo minerales para expandirlo, esto sucede por el relieve de la posición del suelo, condicionando la energía solar y la transferencia de materia sólida y fluidos de energía que recibirán los componentes internos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img03.svg")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Actividad biológica
            p.mb-0 El tercer método se da por actividad biológica, en la cual los organismos intervienen en el proceso de transformación y mezcla de la materia orgánica, llevando a la superficie los sedimentos de las capas inferiores del suelo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img04.svg")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Desechos orgánicos
            p.mb-0 Posteriormente los libera en forma de desechos orgánicos, creando un nuevo suelo, estos factores formadores se comportan como variables independientes, lo que quiere decir, que algunos factores suelen estar relacionados con la roca madre y el tiempo, pero otros no.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img05.svg")

    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        p.mb-3 Algunas características relevantes para tener en cuenta sobre la importancia del suelo son:
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img06.svg")

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Producir alimentos, forrajes, fibras, biocombustibles y masas forestales.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Controlar el filtrado, intercambios de iones, almacenamiento y posible transferencia a otra parte del ecosistema.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Mitigar las acciones de contaminantes ambientales y patógenos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Regular el ciclo del agua, por el control de entrada, almacenamiento y transferencia de la misma.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Transformar los desechos aprovechables en materia orgánica.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Retener gases como el dióxido de carbono, de manera prolongada y aprovecharlos en beneficio propio.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Absorbe la radiación solar interviniendo en los procesos de evaporación, regulando el clima en su interior.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Ser una reserva de biodiversidad por la cantidad de micro, meso y macroorganismos que allí habitan.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Servir de soporte físico para actividades humanas desde perspectivas sociales, económicas y culturales.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Proveer arcilla, grava, arena, yeso, caliza, turba, aluminio, hierro y muchos otros componentes, por las concentraciones minerales que lo componen.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
          .BGR01A.p-4
            p.mt-5.mb-0 Proveer información geológica relevante y mantener el paisaje.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 De manera general, los suelos se pueden clasificar en dos grandes grupos, suelos gruesos y suelos finos, que se caracterizan básicamente por la visibilidad de las partículas que lo componen, entendiendo que los suelos gruesos son identificables a simple vista, poseen formas redondeadas, no poseen minerales arcillosos, las partículas que lo conforman no tienden a juntarse fácilmente y son muy permeables. Por su parte los suelos finos, no cuentan con partículas visibles, poseen formas variadas yendo desde laminar hasta redondeada, son altamente permeables y sus partículas están más adheridas.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación y nomenclatura

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .h5 Los suelos, además de esta clasificación, están relacionados con la posición y la formación de los mismos; veamos:
        p Relictos, que son todos aquellos suelos que están en procesos continuos de formación y en la posición más superficial, dejarán esta categoría cuando empiecen a descender y a hacer parte de horizontes diferentes al superficial.
        .BG02.p-4
          p.mb-0 Suelos sepultados, son los que se encuentran por debajo de sedimentos, dispuestos para formar más capas, estos suelos enterrados pueden frenar sus procesos de pedogénesis o continuarlo, pero de manera más lenta.
        p Suelos exhumados son aquellos que se han visto expuestos nuevamente a las condiciones ambientales, obligándolos a iniciar procesos de pedogénesis, esta puede ocurrir por una degradación extrema de rocas que desaparezca materiales sepultados ubicados sobre este.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img18.svg")

    .row.justify-content-center.mb-5

      .col-lg-6(data-aos="fade-left")
        .BG04.p-4
          p.text-white.mb-0 Para nombrar los tipos de suelo, se hace necesaria la utilización de horizontes, los cuales se diferencian con letras mayúsculas y minúsculas, en los cuales, las mayúsculas diferencian los horizontes principales y las minúsculas se utilizan para nombrar características particulares de un horizonte.

    .h4 Medidas de manejo de suelos
    p Esta diferenciación de los materiales que componen el suelo en porciones, ubicadas de manera horizontal, puede nombrarse de manera general O, A, E, B, C, como se aprecia en la ilustración que veremos a continuación:

    .row.justify-content-center.mb-4(data-aos="zoom-out")
      .col-lg-10
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img19.svg')
          .BGR05.p-3(x="82%" y="25%" numero="1")
            .h5.mb-2 Punto 1. O
            p.mb-0 Es la capa que se pisa, la más superficial y la más delgada, compuesta por materia orgánica proveniente de organismos en diferentes estados de descomposición.
          .BGR05.p-3(x="82%" y="40%" numero="2")
            .h5.mb-2 Punto 2. A
            p.mb-0 Es la capa que se encuentra debajo de O, en la cual, la materia orgánica comienza a mezclarse con los minerales que componen el suelo.
          .BGR05.p-3(x="82%" y="55%" numero="3")
            .h5.mb-2 Punto 3. E
            p.mb-0 Este horizonte es más claro y grueso que los dos anteriores, en él ya no se encuentra materia orgánica y los minerales son escasos, por acción del agua que se filtra arrastrándolos.
          .BGR05.p-3(x="82%" y="70%" numero="4")
            .h5.mb-2 Punto 4. B
            p.mb-0 Este horizonte no muestra similitudes con la roca parental.
          .BGR05.p-3(x="82%" y="86%" numero="5")
            .h5.mb-2 Punto 5. C
            p.mb-0 Este horizonte se caracteriza por ser el menos perturbado de todo y ser muy similar a la roca madre.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Cada uno de estos horizontes vistos anteriormente, tienen una subdivisión para su clasificación. Cada horizonte se subdivide a su vez en:

    .BGIMG03.px-md-5.px-4
      .h4 Subdivisión de horizontes
      .row.justify-content-around.mb-4
        .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
          p Las letras minúsculas que acompañan a cada uno de los horizontes, describen las siguientes características:
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span b
              | Se utiliza para señalar horizontes que han sido sepultados o para dejar en evidencia la ocurrencia de algún evento geológico.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span c
              | Indica la formación de nódulos de hierro, aluminio, manganeso y titanio.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span f
              | Horizontes que cuentan con cimentación de capas de hielo.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span g
              | Horizontes que se ven alterados por condiciones de glaciación.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span j
              | Señala un desarrollo mínimo de suelo en un horizonte.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span k
              | Horizontes que son ricos en calcio.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span m
              | Generalmente se encuentra acompañada de otros y sirve para indicar que un horizonte se encuentra cimentado.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span n
              | Horizontes con concentraciones de sodio iguales o mayores al 6 %.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span ss
              | Se debe usar doble letra, para denotar los horizontes que presentan aberturas de todos los tamaños, producto de las presiones a las que es sometido el suelo.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span v
              | Horizontes porosos o vesiculares.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span y
              | Horizontes que poseen grandes cantidades de yeso.
            li
              .lista-ol--cuadro__vineta(style="background-color: #13887B")
                span z
              | Horizontes ricos en sales, mucho más solubles que el yeso como la silvita (Bustos, 2021).
        .col-lg-3(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img20.svg')

      .row.justify-content-center.mb-5(data-aos="flip-up")
        .col-lg-7.cajon.color-primario.p-4
          p.mb-0 Para conocer un poco más de estas subdivisiones, la siguiente infografía amplía el concepto:

      .h4 Medidas de manejo de suelos
      p.mb-5 Para conocer un poco más de estas subdivisiones, la siguiente infografía nos amplía el concepto:

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img21.svg')
            .BGR05.p-3(x="84%" y="24%" numero="+")
              ul.lista-ul--color
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Oi]: toda la materia orgánica en estado natural.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Oe]: materia a medio estado de descomposición.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Oa]: rico en materia orgánica, 100% humus.
            .BGR05.p-3(x="84%" y="33%" numero="+")
              ul.lista-ul--color
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Ap]: suelos perturbados por agricultura.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Ab]: sub horizonte rico en minerales.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Ad]: sub horizonte bastante denso, aún más rico en minerales que el sub horizonte Ab.
            .BGR05.p-3(x="84%" y="58%" numero="+")
              ul.lista-ul--color
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bh y Bhs]: materia orgánica.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bk]: riqueza de carbonatos.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bl]: capa porosa que retiene gran cantidad de agua.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bo]: concentración residual de óxidos de hierro y aluminio.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bq]: acumulación de sílice patogenético.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bs]: acumulación de óxidos de hierro y aluminio.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bw]: riquezas de arcillas silicatadas y liberación de óxidos.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bt]: acumulación de arcilla.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b By]: rico en yeso.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Bg]: horizonte que pasó por glaciación.
            .BGR05.p-3(x="84%" y="77%" numero="+")
              ul.lista-ul--color
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Cu]: intrusiones de materiales urbanos y de creación humana.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Cr]: características químicas reduccionistas en el contexto redox.
                li(style="margin-bottom:2px")
                  i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                  p.mb-0 #[b Cox]: horizonte con rasgos de haber sido oxidado o intemperizado.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BGIMG04.p-5
        p.text-white.mb-0 Así como en la naturaleza se encuentra la materia en tres estados: sólido, líquido y gaseoso, también sucede con el suelo. Estas fases pueden variar espacial y temporalmente, de acuerdo con la cantidad de precipitaciones y la forma en que estas se distribuyen, sin dejar de ser un sistema abierto en el que las fases interaccionan entre sí.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características y parámetros físicos

    p Las fases del suelo son: fase sólida, fase líquida o la cantidad de agua que se encuentra en el suelo, y la fase gaseosa que se refiere a la atmósfera que se encuentra en el suelo, como se aprecia a continuación; cada una de ellas está conformada por unas características, a saber:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema1/img22.svg')
        .h4 Fase sólida
        p.mb-0 Está compuesta por materia orgánica como restos de plantas, fauna y microorganismos en descomposición y, una gran mayoría de compuestos inorgánicos, que juntos crean un sistema de huecos (poros) relevante en las funciones del suelo.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        figure.mb-4
          img(src='@/assets/curso/tema1/img23.svg')
        .h4 Fase líquida o agua del suelo
        p.mb-0 Ocupa los espacios porosos que posee el suelo, está compuesta por iones disueltos en concentraciones muy bajas y agua, la cantidad de esta es variable y permite variaciones en la actividad biológica del suelo en un mismo día.
      .col-lg-4.col-8(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema1/img24.svg')
        .h4 Fase gaseosa o atmósfera del suelo
        p.mb-0 Gases como el oxígeno, el nitrógeno, dióxido de carbono y vapor de agua, son los encargados de proporcionar oxígeno al suelo para que las raíces y los organismos respiren.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 El tamaño de las partículas minerales que conforman el suelo, determina sus propiedades y los elementos de la calidad, los cuales incluyen propiedades físicas, químicas y biológicas como textura, estructura, porosidad y color.

    .h4 Propiedades físicas de los suelos
    p Estas cualidades dependen principalmente del contenido de arenas, limos, arcillas, agua, disponibilidad de nutrientes y otras. Las características que más se destacan son:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsA.color-acento-contenido
        .row.justify-content-center.BGR06.p-4(titulo="Color")
          .col-lg-7.mb-lg-0.mb-4
            h4 Color
            p Se debe al contenido de hierro, materia orgánica, carbonato de calcio, yeso, arena, entre otros; en cada horizonte varía de acuerdo a estados de oxidación de los mismos, además, de las características que estos pueden presentar de acuerdo con la textura que tienen. El color es una propiedad fácil de observar, proporciona información para la determinación de horizontes, aspectos históricos de uso, identificar estados de aireación, drenaje y color del suelo.
            .BG04.p-4
              p.text-white.mb-0 Se usa una herramienta llamada tabla de color de Munsell (código de tres variables) en la cual, la primera variable determina el color dominante del suelo, la segunda es el valor que determina cuanto brillo o luminosidad tiene la muestra; la tercera escala se denomina chroma, la cual indica la pureza del color del suelo.
          .col-lg-5
            img(src='@/assets/curso/tema1/img25.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Textura")
          .col-lg-7.mb-lg-0.mb-4
            h4 Textura
            .BG04.p-4.mb-4
              p.text-white.mb-0 Cantidad de limos, arcillas o arenas presentes en el suelo, teniendo en cuenta el tamaño de las partículas. Por factores físicos de textura: se encuentran suelos francos, arenosos, limosos y arcillosos.
            ul.lista-ul--color
              li(style="margin-bottom:2px")
                i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                p.mb-0 #[b Suelos francos]:  son el resultado de la mezcla de arenas, arcillas y limos, equilibrados en cantidad de minerales ideales para la agricultura, mantienen la humedad, diluyen fácilmente los nutrientes provenientes de materia orgánica que son para las plantas.
              li(style="margin-bottom:2px")
                i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                p.mb-0 #[b Suelos arenosos]: compuestos principalmente por arena, son sueltos con muchos espacios, el agua se filtra rápidamente, bajo en nutrientes para sostener la vegetación.
              li(style="margin-bottom:2px")
                i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                p.mb-0 #[b Suelos limosos]: con partículas de tamaño medio a fino, de composición química similar a los arenosos, no tienen la capacidad de unirse.
              li(style="margin-bottom:2px")
                i.fas.fa-circle(style="color: #169788; font-size: x-small;")
                p.mb-0 #[b Suelos arcillosos]: compuestos por partículas muy finas, que se unen fácilmente, son poco permeables, generando encharcamientos en las superficies, al estar secos forman terrones difíciles de desintegrar.
          .col-lg-5
            img(src='@/assets/curso/tema1/img26.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Contenido de materia orgánica")
          .col-lg-7.mb-lg-0.mb-4
            h4 Contenido de materia orgánica
            p.mb-0 Es una de las características más importantes para describir el suelo, porque permiten la fijación de nutrientes al mismo, evitando que se filtren con otros materiales en procesos cotidianos. El contenido de materia orgánica es importante, no solo para el desarrollo de micro, meso y macrofauna, o para la resistencia a la erosión, sino también para los servicios ecosistémicos asociados al hombre y sus actividades, porque los suelos ricos en materia orgánica mejoran la calidad ambiental y la productividad, por la captación de carbono orgánico.
          .col-lg-5
            img(src='@/assets/curso/tema1/img27.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Estructuras del suelo")
          .col-lg-7.mb-lg-0.mb-4
            h4 Estructuras del suelo
            p Son las formas en que se agrupan las partículas individuales del suelo y dan lugar a agregados de diferentes tamaños así:
            .BG04.p-4.mb-4
              p.text-white.mb-0
              ul.lista-ul--color.mb-0
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Granular]: comunes en el horizonte A, en el cual las raíces de las plantas alcanzan a ingresar.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Bloques]: poseen desde formas salientes y pronunciadas hasta aquellas un poco más redondas.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Prismas]: estos agregados se desarrollan a una profundidad considerable y poseen esta forma.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Plato]: se desarrollan en esta forma, debido a la gran presión a la que se enfrentan creciendo de manera horizontal.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Granos individuales]: son partículas que no se pegan y no forman ningún tipo de agregado.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Masiva]: son agregados de gran tamaño.
                li(style="margin-bottom:2px")
                    i.fas.fa-circle(style="color: #fff; font-size: x-small;")
                    p.text-white.mb-0 #[b Vesicular]: son agregados con poros muy grandes.
            p.mb-0 Esta clasificación es la que permite determinar la permeabilidad del suelo.
          .col-lg-5
            img(src='@/assets/curso/tema1/img28.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Densidad volumétrica")
          .col-lg-7.mb-lg-0.mb-4
            h4 Densidad volumétrica
            p Es una medida que resulta de la división de la masa de la muestra y su volumen; determina principalmente la porosidad de un agregado.
          .col-lg-5
            img(src='@/assets/curso/tema1/img29.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Retención y movimiento<br> de la humedad en el suelo")
          .col-lg-7.mb-lg-0.mb-4
            h4 Retención y movimiento de la humedad en el suelo
            p Está definida por la porosidad del suelo, los cuales retienen cierta cantidad de líquido, apoyados en las fuerzas de adhesión que son básicamente, la capacidad que tienen las moléculas orgánicas e inorgánicas de unirse con las partículas de agua y la fuerza de cohesión, que es aquella que permite que las moléculas de agua se mantengan unidas.
            .BG04.p-4
              p.text-white.mb-0 Estas fuerzas confieren al suelo tres estados, uno de saturación, en el cual todos los poros del suelo están llenos de agua y el flujo de esta llega a todos los horizontes; otro de capacidad de campo en que solo algunos se encuentran llenos de agua y el flujo de agua ya no es constante; otro llamado marchitez permanente cuando, los poros están vacíos y el agua que queda disponible está unida a la tierra por fuerzas de adherencia.
          .col-lg-5
            img(src='@/assets/curso/tema1/img30.svg')
        .row.justify-content-center.BGR06.p-4(titulo="Capacidad de intercambio <br>catiónico")
          .col-lg-7.mb-lg-0.mb-4
            h4 Capacidad de intercambio catiónico
            p Es la capacidad que tiene el suelo para retener iones, los cuales le van a servir de nutrientes a las plantas.

          .col-lg-5
            img(src='@/assets/curso/tema1/img31.svg')
        .row.justify-content-center.BGR06.p-4(titulo="pH")
          .col-lg-7.mb-lg-0.mb-4
            h4 pH
            p Concentración de hidrógeno en los compuestos que forman el suelo.
          .col-lg-5
            img(src='@/assets/curso/tema1/img32.svg')

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Gracias a los componentes vivos presentes en el suelo, se pueden llevar a cabo procesos de transformación de la materia orgánica, desarrollo de los ciclos biogeoquímicos por el secuestro del carbono y la presencia de bacterias que fijan el nitrógeno y el fósforo principalmente; además de generar las condiciones propicias para el crecimiento de las plantas y el equilibrio ecosistémico.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características y componentes biológicos

    p A los organismos vivos que se encuentran en el suelo se les conoce como componentes biológicos y cumplen unas funciones específicas que son:

    .row.justify-content-center.mb-4.mb-5(data-aos="flip-up")
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-9.mb-lg-0.mb-4(data-aos="fade-right")
              h4 Organismos vivos que lo habitan
              p El suelo no es considerado un cuerpo inerte, presenta en su composición organismos vivos que lo habitan, estos organismos son llamados macrofauna, mesofauna y microfauna, los cuales dinamizan e interactúan con los demás componentes; se puede encontrar microorganismos como hongos, bacterias como gusanos y ácaros, lombrices de tierra, milpiés, caracoles o escarabajos de la madera. Además de otros insectos en todos sus estados de metamorfosis.
              p.mb-0 Entre las funciones de los organismos del suelo se encuentran:
            .col-lg-2.col-3(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img33.svg')
          .row.justify-content-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img34.svg')
            .col-9.mb-lg-0.mb-4(data-aos="fade-left")
              h4.text-start Macrofauna, mesofauna y microfauna
              p.text-start.mb-0 Aumentan la porosidad, aireación, permeabilidad y calidad del suelo, por la mezcla de materiales en el mismo. Gracias a la acción de la macrofauna, especialmente la de las lombrices de tierra, quienes ingieren grandes cantidades de materia orgánica a diario, para posteriormente excretar una mezcla de esta con minerales que aportan humedad y un pH neutro al suelo.
          .row.justify-content-center
            .col-9.mb-lg-0.mb-4(data-aos="fade-right")
              h4 Mejoran la estructura del suelo
              p.mb-0 Mejoran la estructura del suelo al producir sustancias que se unen a las partículas de este, beneficiándolo y formando agregados.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img35.svg')
          .row.justify-content-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img36.svg')
            .col-9.mb-lg-0.mb-4(data-aos="fade-left")
              h4.text-start  Reciclado de energía y masa
              p.text-start.mb-0 Intervienen en el reciclado de energía y masa, gracias a la descomposición de la materia orgánica y en el reciclaje de nutrientes para las plantas, por medio de su participación en los ciclos biogeoquímicos.
          .row.justify-content-center
            .col-9.mb-lg-0.mb-4(data-aos="fade-right")
              h4 Controlan enfermedades
              p.mb-0 Algunas bacterias y hongos, gracias a la síntesis de vitaminas, ejercen acción sobre otros organismos y controlan ciertas enfermedades.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img37.svg')
          .row.justify-content-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img38.svg')
            .col-9.mb-lg-0.mb-4(data-aos="fade-left")
              h4.text-start Síntesis de enzimas
              p.text-start.mb-0 Síntesis de enzimas y sustancias orgánicas que permiten a las plantas asimilar el óxido de hierro.
          .row.justify-content-center
            .col-9.mb-lg-0.mb-4(data-aos="fade-right")
              h4 Fijación biológica de nitrógeno
              p.mb-0 Fijación biológica de nitrógeno por la asociación de algunas bacterias con las raíces de las plantas, formando asociaciones en forma de nudo. Con estas transforman las formas inorgánicas del nitrógeno en formas minerales, para ser utilizadas por las plantas. Otros organismos como cianobacterias y hongos, también logran establecer este tipo de relaciones para beneficiar no solo a las plantas sino también al suelo.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img39.svg')
          .row.justify-content-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img40.svg')
            .col-9.mb-lg-0.mb-4(data-aos="fade-left")
              h4.text-start Absorción de nutrientes y agua
              p.text-start.mb-0 La absorción de nutrientes y agua, se da gracias a las sustancias producidas por los hongos que movilizan nutrientes y favorecen la nutrición, absorción de agua y fósforo por las raíces.
          .row.justify-content-center
            .col-9.mb-lg-0.mb-4(data-aos="fade-right")
              h4 Descomponen sustancias de origen industrial
              p.mb-0 Descomponen sustancias de origen industrial como los herbicidas y productos derivados del petróleo, evitando que estos generen afectaciones a nivel general en el suelo y sus componentes.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img41.svg')

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Biogeoquímica del suelo

    .cajon-b.color-primario.img-full.p-3.mb-4(data-aos="fade-right")
      p.mb-0 Los ciclos biogeoquímicos se refieren a la circulación de nutrientes que están en el entorno, entendiéndose este como atmósfera, agua o suelo y que regresan a estos después de pasar por los organismos vivos por medio de reacciones químicas.

    .cajon-b.color-acento-botones.img-end.p-3.mb-4(data-aos="fade-right")
      p.mb-0 Se dividen en ciclos biogeoquímicos gaseosos, en los cuales las reservas de nutrientes se encuentran en la atmósfera y los océanos, se dan rápidamente y no hay pérdidas de nutrientes en el mismo, a este pertenecen los ciclos del carbono y el nitrógeno y lo ciclos biogeoquímicos sedimentarios, encontrando nutrientes en el suelo, en rocas y minerales. La circulación de nutrientes es lenta y hay pérdidas de estos en dicho proceso, los ciclos del fósforo y el azufre son ejemplos de ello y aunque se diferencien por el origen de los nutrientes, todos comparten tres componentes básicos: entrada, circulación interna y salida, así:

    .BGIMG02.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Ciclo del carbono
            p.mb-0 El suelo constituye una de las principales fuentes de carbono orgánico, en este se distribuye entre la biomasa, la necromasa y la materia orgánica. El ciclo inicia por la producción de dióxido de carbono como respuesta a la respiración de plantas y animales, o las emisiones de fábricas que son captadas por las plantas a través de la fotosíntesis, convirtiéndolo en biomasa la cual se descompone y comienza a formar parte del suelo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img42.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Ciclo del nitrógeno
            p.mb-0 Comprende el 78 % de la atmósfera terrestre, es un elemento esencial en la química de todos los organismos y su fijación se da por medio de dos mecanismos, cuando es removido de la atmósfera por acción de tormentas eléctricas, o cuando es fijado por bacterias presentes en el suelo o algas en los cuerpos acuáticos. La fijación biológica o la realizada por bacterias, se da por asociaciones con plantas que proporcionan compuestos de carbono para la fijación de energía y se incorporan al suelo en forma de amonio. Por procesos realizados por las bacterias, pasan a formas más asimilables como nitritos y nitratos, posteriormente absorbidos por las raíces de las plantas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img43.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Ciclo del fósforo
            p.mb-0 Las rocas son consideradas la mayor reserva de este nutriente, liberado al ambiente por medio de procesos como la meteorización, lixiviación, erosión y extracción de las rocas. Es transportado por el viento y el agua en forma de fosfato inorgánico, hasta llegar al suelo y son absorbidos por las plantas, estas son comidas por los animales que obtienen fósforo al alimentarse de ellas. Una vez las plantas o animales mueren, las bacterias fosfatizantes se encargan de devolver los fosfatos al suelo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img44.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Ciclo del azufre
            p.mb-0 La materia orgánica, viva o muerta, constituye un reservorio de azufre y aunque este ciclo no es de importancia para el crecimiento de plantas y los animales, es de gran importancia para el patrón general de producción y descomposición, por la acción de bacterias presentes en el suelo, se asimila el azufre que se incorporará en la materia orgánica y aportará a las plantas en el proceso de fotosíntesis.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img45.png")

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Factores biodegradantes del suelo, riesgos y tratamientos

    p El manejo inadecuado de los suelos, el agotamiento de nutrientes, así como el desequilibrio en los ciclos biogeoquímicos, influyen en el agotamiento del recurso, a continuación, se conocerán sus factores biodegradantes.
    .h5.mb-5 Los factores que pueden degradar los suelos están dados principalmente por el uso no sostenible de este en los sectores agropecuarios, industriales y mineros. Las principales amenazas para el suelo son: la erosión, la salinización, la pérdida de carbono orgánico, contaminación de los suelos, pérdida de la biodiversidad y compactación que inevitablemente llevan a procesos de desertificación.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsA.color-acento-contenido
        .row.justify-content-center.BGR08.p-4(titulo="Factores biodegradantes <br>del suelo")
          .col-lg-7.mb-lg-0.mb-4
            h4 Factores biodegradantes del suelo
            p La desertificación es definida como la disminución irreversible de la productividad de un ecosistema, a causa de malas prácticas en zonas especialmente secas, lo cual se va representado en la pérdida de los servicios ecosistémicos provistos por el suelo y aumento de la aridez. Estas malas prácticas están relacionadas con la deforestación, la extensión de infraestructura agrícola, la ganadería, los cultivos intensivos, el riego y los factores climáticos.
          .col-lg-5
            img(src='@/assets/curso/tema1/img46.svg')
        .row.justify-content-center.BGR08.p-4(titulo="Riesgos y tratamientos")
          .col-lg-7.mb-lg-0.mb-4
            h4 Riesgos y tratamientos
            p Las afectaciones generadas al suelo están relacionadas con el crecimiento demográfico y el uso de la tierra. Entre las estrategias propuestas para solventar estas afectaciones está la restauración de la productividad del suelo con técnicas de manejo e incremento de fertilidad, cambio en prácticas agrícolas e inclusión de tecnología para mejorar el rendimiento de cultivos, promoción de prácticas agrícolas apropiadas y gestión de tierras sostenibles en las áreas cultivables y, el uso eficiente de insumos agrícolas para aumentar el suministro de alimentos.
          .col-lg-5
            img(src='@/assets/curso/tema1/img47.svg')

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Marco normativo

    p En cuanto a la normatividad vigente, a continuación, se listan algunas de las normas más relevantes con respecto a la protección del suelo, su ordenación y manejo para Colombia.
    p Colombia ha hecho parte de los firmantes de diversos tratados, convenciones y declaraciones sobre protección ambiental entre las que destacan la Declaración de la Conferencia de las Naciones Unidas sobre el ambiente humano en 1972, la Declaración de Río de Janeiro sobre ambiente y desarrollo, el convenio sobre diversidad biológica, la Convención de Naciones Unidas para el cambio climático en 1992,  la Convención de Naciones Unidas de lucha contra la desertificación y sequía en 1994, la Declaración de Johannesburgo sobre desarrollo sostenible en 2002 y la Declaración de Nairobi en 2009 los cuales propenden por la protección de los recursos ambientales, entre ellos el suelo.
    .h5.mb-5 Adicional a ello, en el país se han promulgado diferentes leyes, decretos y resoluciones que respaldan los acuerdos firmados anteriormente, tales como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Ley 2 de 1959")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Conservación de los recursos naturales renovables y economía forestal.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img48.svg")
          .row(numero="2" titulo="Ley 23 de 1973")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Buscar el mejoramiento, conservación y restauración de los recursos naturales renovables, para defender la salud y el bienestar de todos los habitantes del territorio nacional.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img49.svg")
          .row(numero="3" titulo="Ley 2811 de 1974")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Código nacional de recursos naturales renovables y protección del medio ambiente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img50.jpg")
          .row(numero="4" titulo="Ley 9 de 1979")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Medidas sanitarias para la protección del medio ambiente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img51.jpg")
          .row(numero="5" titulo="Ley 9 de 1989")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Reglamentación de planes de desarrollo municipal, compraventa y expropiación de bienes.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img52.svg")
          .row(numero="6" titulo="Capítulo 3 de la Constitución política de Colombia 1991")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 De los derechos colectivos y del ambiente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img53.jpg")
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img65.svg')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img66.svg')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="7" titulo="Ley 99 de 1993")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Organización del sistema nacional ambiental (SINA) y creación del ministerio de ambiente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img54.jpg")
          .row(numero="8" titulo="Ley 165 de 1994")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Aprobación del convenio sobre diversidad biológica hecho en 1992 en Río de Janeiro.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img55.jpg")
          .row(numero="9" titulo="Ley 160 de 1994")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Creación sistema nacional de reforma agraria y desarrollo rural campesino, se establecen subsidios para la adquisición de tierras.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img56.jpg")
          .row(numero="10" titulo="Ley 388 de 1997")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Modificación Ley 9 de 1989, sobre el ordenamiento territorial.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img57.svg")
          .row(numero="11" titulo="Decreto 2462 de 1998")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Sobre la explotación de materiales de construcción.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img58.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row(numero="12" titulo="Ley 507 de 1999")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Modifica la ley sobre formulación y adopción de los planes y esquemas de ordenamiento territorial (Ley 388 de 1997).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img59.jpg")
          .row(numero="13" titulo="Ley 685 de 2001")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Código de minas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img60.jpg")
          .row(numero="14" titulo="Resolución 170 de 2009")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Declaración del año de los suelos (2009) y del día de los suelos (17 de junio) en Colombia y, adopción de medidas para la conservación de los suelos en el territorio nacional.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img61.jpg")
          .row(numero="15" titulo="Ley 1454 de 2011")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Dictamen de normas orgánicas sobre ordenamiento territorial y se modifican otras disposiciones.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img62.svg")
          .row(numero="16" titulo="Ley 1523 de 2012")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Adopción de la política nacional de gestión de riesgo de desastres y establecimiento del Sistema nacional de gestión del riesgo de desastres.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img63.svg")
          .row(numero="17" titulo="Política nacional para la gestión integral del suelo (GIAS), 2018")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Con el fin de aportar a la conservación y uso sostenible de este componente determinante de los ciclos del agua, del aire y de los nutrientes, e indispensable para la preservación de la biodiversidad y sus servicios ecosistémicos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img64.svg")
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img67.svg')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
