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
        { name: "Computadores", url: "/plp", category: "Computadores" },
        { name: "Televisores", url: "/plp", category: "Televisores" },
        { name: "Audio", url: "/plp", category: "Audio" },
        { name: "Video", url: "/plp", category: "Video" },
        { name: "Impresión", url: "/plp", category: "Impresión" },
        { name: "Cámaras", url: "/plp", category: "Cámaras" },
      ],
    },
    {
      category: "Electrodomésticos",
      links: [
        { name: "Climatización", url: "/plp", category: "Climatización" },
        { name: "Refrigeración", url: "/plp", category: "Refrigeración" },
        { name: "Lavadoras/Secadoras", url: "/plp", category: "Lavadoras/Secadoras" },
      ],
    },
    {
      category: "Celulares",
      links: [
        { name: "Celulares", url: "/plp", category: "Celulares" },
        { name: "Tabletas", url: "/plp", category: "Tabletas" },
        { name: "Smartwatch", url: "/plp", category: "Smartwatch" },
      ],
    },
    {
      category: "Hogar",
      links: [
        { name: "Salas", url: "/plp", category: "Salas" },
        { name: "Comedor", url: "/plp", category: "Comedor" },
        { name: "Cocina", url: "/plp", category: "Cocina" },
        { name: "Baño", url: "/plp", category: "Baño" },
      ],
    },
  ];
  