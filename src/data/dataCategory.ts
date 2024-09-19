// src/data/DataCategory.ts

export type LinkType = {
    name: string;
    url: string;
    category: string;
  };
  
  export type MenuItem = {
    category: string;
    links: LinkType[];
  };
  
  export const menuItems: MenuItem[] = [
    {
      category: "Tecnología",
      links: [
        { name: "Computadores", url: "/plp/category/computadores", category: "Computadores" },
        { name: "Televisores", url: "/plp/category/televisores", category: "Televisores" },
        { name: "Audio", url: "/plp/category/audio", category: "Audio" },
        { name: "Video", url: "/plp/category/video", category: "Video" },
        { name: "Impresión", url: "/plp/category/impresion", category: "Impresión" },
        { name: "Cámaras", url: "/plp/category/camaras", category: "Cámaras" },
      ],
    },
    {
      category: "Electrodomésticos",
      links: [
        { name: "Climatización", url: "/plp/category/climatizacion", category: "Climatización" },
        { name: "Refrigeración", url: "/plp/category/refrigeracion", category: "Refrigeración" },
        { name: "Lavadoras/Secadoras", url: "/plp/category/lavadoras-secadoras", category: "Lavadoras/Secadoras" },
      ],
    },
    {
      category: "Celulares",
      links: [
        { name: "Celulares", url: "/plp/category/celulares", category: "Celulares" },
        { name: "Tabletas", url: "/plp/category/tabletas", category: "Tabletas" },
        { name: "Smartwatch", url: "/plp/category/smartwatch", category: "Smartwatch" },
      ],
    },
    {
      category: "Hogar",
      links: [
        { name: "Salas", url: "/plp/category/salas", category: "Salas" },
        { name: "Comedor", url: "/plp/category/comedor", category: "Comedor" },
        { name: "Cocina", url: "/plp/category/cocina", category: "Cocina" },
        { name: "Baño", url: "/plp/category/bano", category: "Baño" },
      ],
    },
  ];
  