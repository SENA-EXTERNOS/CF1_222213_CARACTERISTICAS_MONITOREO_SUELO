export default {
  global: {
    componenteFormativo: 'Características y monitoreo del suelo',
    descripcionCurso:
      'El suelo como cuerpo natural determinante para los procesos bióticos, abióticos y para la prestación de servicios ecosistémicos, debe ser conocido a detalle con todos los factores que lo caracterizan, para ello se utilizan los muestreos de suelo que permiten obtener información precisa que servirá de base, para la toma de decisiones relacionadas con aspectos productivos, ambientales y de planificación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación y nomenclatura',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características y parámetros físicos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características y componentes biológicos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Biogeoquímica del suelo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Factores biodegradantes del suelo, riesgos y tratamientos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Marco normativo',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Geomorfología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos topográficos y agrimensura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Generalidades del sistema de posicionamiento global',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Sistema de Información Geográfica- SIG',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo y técnicas de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Equipos y herramientas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Elementos de seguridad y salud en el trabajo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Manejo de registros',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El suelo',
      referencia: 'FAO. (s.f).  6. <em>Textura del suelo</em>.',
      tipo: 'Guía práctica ',
      link:
        'https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6706s/x6706s06.htm',
    },
    {
      tema: 'El suelo',
      referencia:
        'Mendoza, R. B. & Espinoza A. (2017). Guía técnica para el muestreo de suelos.<em> Universidad Nacional Agraria y Catholic Relief Services (CRS).</em>',
      tipo: 'Guía',
      link: 'https://repositorio.una.edu.ni/3613/1/P33M539.pdf',
    },
    {
      tema: 'Geomorfología',
      referencia:
        'Titiosky, V. S. & Monzón W. A. (2018). La agrimensura en la antigüedad.<em> Extensionismo, innovación y transferencia tecnológica - claves para el desarrollo</em>, 4, p. 265-267. ',
      tipo: 'Artículo',
      link:
        'https://repositorio.unne.edu.ar/xmlui/bitstream/handle/123456789/48174/RIUNNE_FACENA_AR_Titiosky-Monzon.pdf?sequence=1',
    },
    {
      tema: 'Geomorfología',
      referencia:
        'Leica. (s.f.). <em>Introducción al Sistema GPS (Sistema de Posicionamiento Global). GPS Basics -1.0.0es.</em>',
      tipo: 'Libro',
      link:
        'http://coello.ujaen.es/asignaturas/topometria/descargas/GPSBasics_es.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agregados',
      significado:
        'unión de diferentes tipos de suelos que confieren características al mismo como la porosidad.',
    },
    {
      termino: 'Aridez',
      significado: 'falta de agua en el suelo.',
    },
    {
      termino: 'Bacterias fosfatizantes',
      significado:
        'encargadas de la transformación del fósforo a formas asimilables por el suelo y las plantas como fosfatos disueltos.',
    },
    {
      termino: 'Intemperismo',
      significado:
        'conjunto de procesos que generan el desgaste, descomposición o desintegración de las rocas al estar expuestas a la intemperie.',
    },
    {
      termino: 'Necromasa',
      significado:
        'se refiere a todos aquellos residuos de madera presentes en el suelo.',
    },
    {
      termino: 'Neotectónica ',
      significado:
        'disciplina encargada del estudio de fallas y pliegues que causan deformación de la corteza terrestre.',
    },
    {
      termino: 'Pedogenético',
      significado:
        'relacionado con los procesos de formación del suelo o pedogénesis.',
    },
    {
      termino: 'Pedología',
      significado: 'rama de la geografía que se encarga de estudiar el suelo.',
    },
    {
      termino: 'Petrología',
      significado: 'estudio de la composición, estructura y textura de rocas.',
    },
    {
      termino: 'Sedimentos',
      significado:
        'partículas de suelo que se ubican en un horizonte después de haber sido arrastradas por el agua.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bustos, D. G. (2021).<em> Manual teórico de geomorfología de suelos.</em> Universidad autónoma de Baja California. ',
      link:
        'https://www.researchgate.net/publication/358020444_Manual_Teorico_de_Geomorfologia_de_Suelos/link/61eb888d5779d35951c58184/download',
    },
    {
      referencia:
        'Girón, M. M. (2019).<em> Ecología. </em>Universidad del Quindío.',
    },
    {
      referencia:
        'Gómez, D. C. (2019). <em>Diagnóstico en terrenos inclinados para el desarrollo de distritos de riego, caso de estudio: veredas de la zona norte del municipio de Paipa.</em> [Proyecto social, Universidad Católica de Colombia]. ',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/24233/1/Proyecto%20de%20Grado.pdf',
    },
    {
      referencia:
        'Mendoza, R. B. & Espinoza, A. (2017). <i>Guía técnica para el muestreo de suelos. Universidad Nacional Agraria y Catholic Relief Services (CRS) </i>',
      link: 'https://repositorio.una.edu.ni/3613/1/P33M539.pdf',
    },
    {
      referencia:
        'Ministerio del medio ambiente. (2016).<i> Política para la gestión sostenible del suelo. </i>[Política pública, Gobierno de Colombia]. ',
      link:
        'https://www.andi.com.co/Uploads/Pol%C3%ADtica_para_la_gesti%C3%B3n_sostenible_del_suelo_FINAL.pdf',
    },
    {
      referencia:
        'Porta, J., López-Acevedo, M. & Poch, R. (2019).<i> Edafología, uso y protección de suelos.</i> Mundi-prensa.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=SZ3BDwAAQBAJ&oi=fnd&pg=PA5&dq=suelos+&ots=3KLKznmnbk&sig=uYIfClhXunljgme7AH-uGYzmvQo&redir_esc=y#v=onepage&q&f=true',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
