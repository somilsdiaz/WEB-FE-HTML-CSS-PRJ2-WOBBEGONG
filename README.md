# WEB-FE-PRJ2-API-WOBBEGONG

Este repositorio contiene el frontend completo del proyecto **WEB-FE-HTML-CSS-PRJ2-WOBBEGONG**, desarrollado utilizando **React**, **Vite** y **Tailwind CSS**. El proyecto está estructurado para ofrecer una experiencia de usuario responsiva y dinámica, enfocada en el comercio electrónico y optimizada para un rendimiento superior en diversos dispositivos.

El frontend de esta aplicación se conecta con una **API Mock** implementada mediante **JSON Server**. La API, desplegada en [Render](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/), proporciona datos simulados para productos, categorías, y detalles promocionales, necesarios para probar y visualizar todas las funcionalidades de la aplicación sin depender de una API real. Además, el proyecto usa **Tanstack Query** para gestionar de forma eficiente la obtención, cacheo y sincronización de datos en React.

## Tabla de Contenidos

- [Descripción de la API](#descripción-de-la-api)
- [Dependencias del Proyecto](#dependencias-del-proyecto)
- [Componentes](#componentes)
  - [Banner](#componente-banner)
  - [Breadcrumb](#componente-breadcrumb)
  - [ErrorComponent](#errorcomponent)
  - [Filter Component](#filter-component)
  - [Footer Component](#footer-component)
  - [Header Component](#header-component)
  - [PromoImage Component](#promoimage-component)
  - [PDPdetalle Component](#pdpdetalle-component)
  - [Pdpspecs Component](#pdpspecs-component)
  - [PLP Component](#plp-component)
  - [ProductosDestacados Component](#productosdestacados-component)
  - [Skeleton Component](#skeleton-component)
  - [Subheader Component](#subheader-component)
  - [TPIsection Component](#tpisecton-component)
  - [CartContext Component](#cartcontext-component)
  - [MainLayout Component](#mainlayout-component)
  - [ShoppingCart Component](#shoppingcart-component)
  - [Home Component](#home-component)
- [Rutas de la Aplicación](#rutas-de-la-aplicación)
- [Instalación y Ejecución](#instalación-y-ejecución)

## Descripción de la API

La API Mock sirve como backend simulado, proporcionando datos estructurados para el frontend. Los datos incluyen categorías de productos, opciones de filtrado, detalles de productos y contenido promocional. Estos datos están organizados en objetos JSON para facilitar su integración con los componentes React y están disponibles en la URL:

- **URL de la API**: [https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com)
- **Frontend asociado**: [https://web-fe-html-css-prj2-wobbegong-he44.onrender.com](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com)

## Dependencias del Proyecto

- **json-server**: Utilizado para simular una API REST, permitiendo pruebas y visualización de interacciones de usuario sin depender de un backend activo.
- **React**: Framework principal para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción y desarrollo de alto rendimiento.
- **Tailwind CSS**: Framework CSS utilizado para crear un diseño responsivo y estilizado.

## Componentes

### Banner

Un componente React para secciones promocionales, que incluye título, descripción, botón de acción y una imagen seleccionada mediante un identificador. Adaptado para pantallas móviles y de escritorio.

### Breadcrumb

Un componente de navegación para mostrar la ruta del usuario dentro de la estructura de la página.

### ErrorComponent

Este componente muestra un mensaje de error y un ícono de advertencia para una comunicación clara en caso de fallos en la carga de datos.

### Filter Component

Permite a los usuarios filtrar productos según subcategorías con opciones dinámicas y un diseño responsivo.

### Footer Component

Componente que incluye información de la empresa, redes sociales, métodos de pago y enlaces útiles, con diseño adaptable a varios dispositivos.

### Header Component

Encabezado de la aplicación que integra logotipo, barra de búsqueda y enlaces a funciones como el carrito y cuenta de usuario.

### PromoImage Component

Renderiza imágenes promocionales basadas en un identificador, aportando contenido visual relevante.

### PDPdetalle Component

Este componente despliega los detalles del producto en una página de detalles, permitiendo agregar productos al carrito y calcular descuentos.

### Pdpspecs Component

Muestra especificaciones técnicas de un producto en un formato colapsable.

### PLP Component

Página de lista de productos filtrados por subcategoría, con opciones de carga, filtrado y ordenación de productos, y manejo del carrito de compras.

### ProductosDestacados Component

Lista de productos destacados para exploración y compra, con una experiencia de usuario eficiente.

### Skeleton Component

Indicador visual de carga en la interfaz, simulando la carga de datos.

### Subheader Component

Componente de navegación que muestra categorías y subcategorías, cargando dinámicamente desde la API.

### TPIsection Component

Sección de productos relacionados que mejora la navegación en la página de detalles del producto.

### CartContext Component

Contexto que gestiona el estado del carrito de compras en toda la aplicación, calculando el total de costos.

### MainLayout Component

Estructura principal que envuelve los elementos comunes de la aplicación como el encabezado y pie de página.

### ShoppingCart Component

Página del carrito de compras donde el usuario puede revisar, modificar y eliminar productos, y proceder al pago.

### Home Component

Página de inicio de la aplicación que incluye imágenes promocionales, productos destacados y banners de ofertas.

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
