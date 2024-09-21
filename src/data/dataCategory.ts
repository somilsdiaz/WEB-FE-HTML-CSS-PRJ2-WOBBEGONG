export type LinkType = {
  name: string;
  url: string;
};

export type MenuItem = {
  category: string;
  links: LinkType[];
};

export const menuItems: MenuItem[] = [
  {
    category: "Tecnología",
    links: [
      { name: "Computadores", url: "/plp/category/computadores" },
      { name: "Televisores", url: "/plp/category/televisores" },
      { name: "Audio", url: "/plp/category/audio" },
      { name: "Video", url: "/plp/category/video" },
      { name: "Impresión", url: "/plp/category/impresion" },
      { name: "Cámaras", url: "/plp/category/camaras" },
    ],
  },
  {
    category: "Electrodomésticos",
    links: [
      { name: "Climatización", url: "/plp/category/climatizacion" },
      { name: "Refrigeración", url: "/plp/category/refrigeracion" },
      { name: "Lavadoras/Secadoras", url: "/plp/category/lavadoras-secadoras" },
    ],
  },
  {
    category: "Celulares",
    links: [
      { name: "Celulares", url: "/plp/category/celulares" },
      { name: "Tabletas", url: "/plp/category/tabletas" },
      { name: "Smartwatch", url: "/plp/category/smartwatch" },
    ],
  },
  {
    category: "Hogar",
    links: [
      { name: "Salas", url: "/plp/category/salas" },
      { name: "Comedor", url: "/plp/category/comedor" },
      { name: "Cocina", url: "/plp/category/cocina" },
      { name: "Baño", url: "/plp/category/bano" },
    ],
  },
];
