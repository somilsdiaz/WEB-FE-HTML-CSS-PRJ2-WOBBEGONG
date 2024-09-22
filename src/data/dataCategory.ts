// src/data/dataCategory.ts

export type LinkType = {
  name: string;
  url: string;
  subcategory: string; 
};

export type MenuItem = {
  category: string;
  links: LinkType[];
};


export const menuItems: MenuItem[] = [
  {
    category: "Tecnología",
    links: [
      { name: "Computadores", url: "/plp/category/computadores", subcategory: "Computadores" },
      { name: "Televisores", url: "/plp/category/televisores", subcategory: "Televisores" },
      { name: "Audio", url: "/plp/category/audio", subcategory: "Audio" },
      { name: "Video", url: "/plp/category/video", subcategory: "Video" },
      { name: "Impresión", url: "/plp/category/impresion", subcategory: "Impresión" },
      { name: "Cámaras", url: "/plp/category/camaras", subcategory: "Cámaras" },
    ],
  },
  {
    category: "Electrodomésticos",
    links: [
      { name: "Climatización", url: "/plp/category/climatizacion", subcategory: "Climatización" },
      { name: "Refrigeración", url: "/plp/category/refrigeracion", subcategory: "Refrigeración" },
      { name: "Lavadoras/Secadoras", url: "/plp/category/lavadoras-secadoras", subcategory: "Lavadoras-Secadoras" },
    ],
  },
  {
    category: "Celulares",
    links: [
      { name: "Celulares", url: "/plp/category/celulares", subcategory: "Celulares" },
      { name: "Tabletas", url: "/plp/category/tabletas", subcategory: "Tabletas" },
      { name: "Smartwatch", url: "/plp/category/smartwatch", subcategory: "Smartwatch" },
    ],
  },
  {
    category: "Hogar",
    links: [
      { name: "Salas", url: "/plp/category/salas", subcategory: "Salas" },
      { name: "Comedor", url: "/plp/category/comedor", subcategory: "Comedor" },
      { name: "Cocina", url: "/plp/category/cocina", subcategory: "Cocina" },
      { name: "Baño", url: "/plp/category/bano", subcategory: "Baño" },
    ],
  },
];

