# WEB-FE-PRJ2-API-WOBBEGONG

Este repositorio contiene el frontend completo del proyecto **WEB-FE-HTML-CSS-PRJ2-WOBBEGONG** [https://web-fe-html-css-prj2-wobbegong-he44.onrender.com](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com), desarrollado utilizando **React**, **Vite** y **Tailwind CSS**. Este proyecto de desarrollo frontend fue realizado por un equipo de cinco desarrolladores durante tres semanas, siguiendo la metodología de desarrollo ágil **Scrum**, con sprints semanales y reuniones diarias para optimizar la colaboración y el progreso. **WEB-FE-PRJ2-API-WOBBEGONG** [https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com) fue desarrollada con tecnologías de frontend modernas para crear una interfaz de usuario atractiva y funcional. En este proyecto, cada miembro del equipo asumió diferentes responsabilidades técnicas en la implementación de componentes, lógica de negocio y gestión de estado, incluyendo la conexión a una **API Mock**. Este enfoque permitió desarrollar y probar todas las funcionalidades en un entorno controlado y replicable y está estructurado para ofrecer una experiencia de usuario responsiva y dinámica.

El frontend de esta aplicación se conecta con una **API Mock** implementada mediante **JSON Server**. La API, desplegada en [Render](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/), proporciona datos simulados para productos, categorías, y detalles promocionales, necesarios para probar y visualizar todas las funcionalidades de la aplicación sin depender de una API real. Además, el proyecto usa **Tanstack Query** para gestionar de forma eficiente la obtención, cacheo y sincronización de datos en React.

## Tabla de Contenidos

- [Características](#características)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Descripción de la API](#descripción-de-la-api)
- [Dependencias del Proyecto](#dependencias-del-proyecto)
- [Componentes](#componentes)
- [Rutas de la Aplicación](#rutas-de-la-aplicación)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Contribución](#contribución)
- [Créditos y Reconocimientos](#créditos-y-reconocimientos)


 Características

- **Interfaz de Usuario Responsiva**: Desarrollada con **Tailwind CSS** para una experiencia de usuario uniforme y adaptable en todos los dispositivos.
- **Navegación Estructurada con Breadcrumbs**: Permite una navegación fluida en la página de detalles del producto, mejorando la usabilidad.
- **API Mock Simulada**: Implementada con **JSON Server** y desplegada en Render, proporcionando datos de productos, categorías, y promociones.
- **Gestión de Datos con Tanstack Query**: Sincronización y cacheo eficientes de datos en React, optimizando el rendimiento de la aplicación.
- **Filtros y Ordenación de Productos**: Filtrado dinámico y opciones de ordenación en la página de lista de productos.
- **Gestión de Carrito Completa**: Incluye funcionalidad de edición y resumen de costos, permitiendo una experiencia de compra detallada y personalizada.
- **Banners Promocionales**: Sección de banners para destacar productos y promociones actuales, con una interfaz optimizada.

## Capturas de Pantalla

_A continuación, se muestran capturas de pantalla de algunas secciones clave de la aplicación:_

![Página de Inicio](URL-de-la-imagen)
![Página de Detalles del Producto](URL-de-la-imagen)
![Carrito de Compras](URL-de-la-imagen)

## Descripción de la API

La API Mock sirve como backend simulado, proporcionando datos estructurados para el frontend. Los datos incluyen categorías de productos, opciones de filtrado, detalles de productos y contenido promocional. Estos datos están organizados en objetos JSON para facilitar su integración con los componentes React y están disponibles en la URL:

- **URL de la API**: [https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com)
- **Frontend asociado**: [https://web-fe-html-css-prj2-wobbegong-he44.onrender.com](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com)

## Dependencias del Proyecto

- **json-server**: Utilizado para simular una API REST, permitiendo pruebas y visualización de interacciones de usuario sin depender de un backend activo.
- **React**: Framework principal para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción y desarrollo de alto rendimiento.
- **Tailwind CSS**: Framework CSS utilizado para crear un diseño responsivo y estilizado.
- **Tanstack Query**: Administración avanzada de datos, caché y sincronización en React.

## Componentes

- **Banner**: Sección promocional con título, descripción, botón de llamada a la acción e imagen.
- **Breadcrumb**: Componente de navegación que muestra la ruta actual dentro de la estructura del sitio.
- **ErrorComponent**: Componente visual para manejar errores de carga de datos.
- **Filter Component**: Componente de filtrado dinámico de productos según subcategoría.
- **Footer Component**: Pie de página con información de la empresa, enlaces a redes sociales y métodos de pago.
- **Header Component**: Encabezado con logotipo, barra de búsqueda y enlaces de navegación.
- **PromoImage Component**: Renderiza imágenes promocionales basadas en un identificador.
- **PDPdetalle Component**: Página de detalles de producto con opción para añadir al carrito.
- **Pdpspecs Component**: Muestra especificaciones técnicas en formato colapsable.
- **PLP Component**: Listado de productos con opciones de carga, filtrado y ordenación.
- **ProductosDestacados Component**: Lista de productos destacados, optimizada para la navegación y compra.
- **Skeleton Component**: Indicador visual de carga para mejorar la experiencia de usuario.
- **Subheader Component**: Menú de navegación de categorías y subcategorías.
- **TPIsection Component**: Productos relacionados en la página de detalles para facilitar la exploración.
- **CartContext Component**: Contexto que gestiona el estado global del carrito de compras.
- **MainLayout Component**: Layout principal que agrupa los elementos comunes de la aplicación.
- **ShoppingCart Component**: Página del carrito con opciones de edición y resumen de costos.
- **Home Component**: Página principal con productos destacados, banners e imágenes promocionales. que mejora la navegación en la página de detalles del producto.

## Rutas de la Aplicación

La estructura de rutas proporciona una navegación fluida en la aplicación:

- `/`: Página de inicio (componente `Home`).
- `/cart`: Página del carrito de compras.
- `/pdp/:id`: Página de detalles del producto.
- `/plp/:subcategory`: Página de lista de productos.

## Instalación y Ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/WEB-FE-PRJ2-API-WOBBEGONG.git
   cd WEB-FE-PRJ2-API-WOBBEGONG
   
2. Instalar dependencias

   ```bash
   npm install
   
3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev

## Contribución

Las contribuciones son bienvenidas y fomentadas para mejorar este proyecto. Para contribuir, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama para tu funcionalidad o corrección (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en este repositorio.

## Créditos y Reconocimientos

Este proyecto fue desarrollado por un equipo multidisciplinario de cinco integrantes, cada uno con roles específicos y responsabilidades clave:

- **Valeria Jiménez** ([Val-jimenez](https://github.com/Val-jimenez)) - Líder de proyecto y desarrolladora frontend, encargada de la implementación de rutas y la migración a Render para el despliegue de la API Mock.
- **Edgar González** ([EdgarGXI](https://github.com/EdgarGXI)) - Desarrollador frontend, responsable de la implementación de la lista de productos, subcategorías y detalles de producto.
- **Somil Sandoval Díaz** ([somilsdiaz](https://github.com/somilsdiaz)) - QA y desarrollador frontend, participó en la implementación del carrito de compras, la sección de productos destacados y pruebas de calidad.
- **Johan Vergara** ([Jandres02](https://github.com/Jandres02)) - Líder de proyecto y desarrollador frontend, encargado de la creación de las secciones de banner y la integración de la API para productos.
- **Caltafulla** ([Caltafulla](https://github.com/Caltafulla)) - Desarrollador frontend, responsable de la creación del subheader y de la configuración de estilos de interfaz con Tailwind CSS.

Gracias a todos los integrantes del equipo por su dedicación, compromiso y contribuciones que permitieron alcanzar los objetivos de este proyecto.


