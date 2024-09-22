// src/data/dataFilter.ts
export const filters: { [key: string]: { nombre: string; opciones: string[] }[] } = {
  'Computadores': [
    {
      nombre: 'Marca',
      opciones: ['HP', 'Dell', 'ASUS', 'Apple', 'Lenovo', 'Acer'],
    },
    {
      nombre: 'Procesador',
      opciones: ['Intel i3', 'Intel i5', 'Intel i7', 'AMD Ryzen 5', 'AMD Ryzen 7'],
    },
    {
      nombre: 'Memoria RAM',
      opciones: ['4GB', '8GB', '16GB', '32GB'],
    },
    {
      nombre: 'Almacenamiento',
      opciones: ['256GB SSD', '512GB SSD', '1TB HDD', '2TB HDD'],
    },
  ],
  'Televisores': [
    {
      nombre: 'Marca',
      opciones: ['Samsung', 'LG', 'Sony', 'TCL', 'Philips'],
    },
    {
      nombre: 'Tamaño',
      opciones: ['32"', '40"', '50"', '55"', '65"', '75"'],
    },
    {
      nombre: 'Resolución',
      opciones: ['Full HD', '4K UHD', '8K UHD'],
    },
    {
      nombre: 'Tecnología de pantalla',
      opciones: ['LED', 'OLED', 'QLED'],
    },
  ],
  'Audio': [
    {
      nombre: 'Marca',
      opciones: ['Sony', 'Bose', 'JBL', 'Harman Kardon', 'Beats'],
    },
    {
      nombre: 'Tipo',
      opciones: ['Audífonos', 'Parlantes', 'Barras de sonido'],
    },
    {
      nombre: 'Conectividad',
      opciones: ['Bluetooth', 'Wi-Fi', 'Cable'],
    },
  ],
  'Video': [
    {
      nombre: 'Tipo de dispositivo',
      opciones: ['Proyectores', 'Videocámaras', 'Reproductores de Blu-ray'],
    },
    {
      nombre: 'Resolución',
      opciones: ['Full HD', '4K UHD'],
    },
    {
      nombre: 'Marca',
      opciones: ['Sony', 'Canon', 'Epson', 'LG'],
    },
  ],
  'Impresión': [
    {
      nombre: 'Marca',
      opciones: ['HP', 'Canon', 'Epson', 'Brother'],
    },
    {
      nombre: 'Tipo',
      opciones: ['Inyección de tinta', 'Láser', 'Multifunción'],
    },
    {
      nombre: 'Conectividad',
      opciones: ['USB', 'Wi-Fi', 'Ethernet'],
    },
  ],
  'Cámaras': [
    {
      nombre: 'Marca',
      opciones: ['Canon', 'Nikon', 'Sony', 'Fujifilm'],
    },
    {
      nombre: 'Tipo',
      opciones: ['Reflex', 'Sin espejo', 'Compactas'],
    },
    {
      nombre: 'Resolución',
      opciones: ['12MP', '16MP', '24MP', '32MP'],
    },
  ],
  'Climatización': [
    {
      nombre: 'Tipo',
      opciones: ['Aire acondicionado', 'Ventiladores', 'Purificadores'],
    },
    {
      nombre: 'Potencia',
      opciones: ['9000 BTU', '12000 BTU', '18000 BTU'],
    },
    {
      nombre: 'Marca',
      opciones: ['Samsung', 'LG', 'Mabe', 'Whirlpool'],
    },
  ],
  'Refrigeración': [
    {
      nombre: 'Tipo',
      opciones: ['Refrigeradores', 'Congeladores', 'Enfriadores de aire'],
    },
    {
      nombre: 'Capacidad',
      opciones: ['200L', '300L', '400L', '500L'],
    },
    {
      nombre: 'Marca',
      opciones: ['LG', 'Samsung', 'Mabe', 'Whirlpool'],
    },
  ],
  'Lavadoras-Secadoras': [
    {
      nombre: 'Tipo',
      opciones: ['Lavadoras', 'Secadoras', 'Lavasecadoras'],
    },
    {
      nombre: 'Capacidad',
      opciones: ['6kg', '8kg', '12kg', '16kg'],
    },
    {
      nombre: 'Marca',
      opciones: ['LG', 'Samsung', 'Mabe', 'Whirlpool'],
    },
  ],
  'Celulares': [
    {
      nombre: 'Marca',
      opciones: ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'OnePlus'],
    },
    {
      nombre: 'Almacenamiento',
      opciones: ['64GB', '128GB', '256GB', '512GB'],
    },
    {
      nombre: 'RAM',
      opciones: ['4GB', '6GB', '8GB', '12GB'],
    },
  ],
  'Tabletas': [
    {
      nombre: 'Marca',
      opciones: ['Apple', 'Samsung', 'Huawei', 'Lenovo'],
    },
    {
      nombre: 'Pantalla',
      opciones: ['8"', '10"', '12"', '12.9"'],
    },
    {
      nombre: 'Almacenamiento',
      opciones: ['64GB', '128GB', '256GB', '512GB'],
    },
  ],
  'Smartwatch': [
    {
      nombre: 'Marca',
      opciones: ['Apple', 'Samsung', 'Fitbit', 'Garmin'],
    },
    {
      nombre: 'Conectividad',
      opciones: ['Bluetooth', 'Wi-Fi', 'LTE'],
    },
    {
      nombre: 'Tamaño de pantalla',
      opciones: ['40mm', '44mm', '46mm'],
    },
  ],
  'Salas': [
    {
      nombre: 'Material',
      opciones: ['Cuero', 'Tela', 'Sintético'],
    },
    {
      nombre: 'Estilo',
      opciones: ['Moderno', 'Clásico', 'Minimalista'],
    },
    {
      nombre: 'Color',
      opciones: ['Negro', 'Gris', 'Blanco', 'Azul'],
    },
  ],
  'Comedor': [
    {
      nombre: 'Material',
      opciones: ['Madera', 'Metal', 'Vidrio'],
    },
    {
      nombre: 'Número de sillas',
      opciones: ['4 sillas', '6 sillas', '8 sillas'],
    },
    {
      nombre: 'Color',
      opciones: ['Marrón', 'Blanco', 'Negro'],
    },
  ],
  'Cocina': [
    {
      nombre: 'Tipo',
      opciones: ['Estufas', 'Refrigeradores', 'Microondas', 'Licuadoras'],
    },
    {
      nombre: 'Marca',
      opciones: ['LG', 'Samsung', 'Oster', 'Whirlpool'],
    },
  ],
  'Baño': [
    {
      nombre: 'Tipo de producto',
      opciones: ['Lavamanos', 'Inodoros', 'Accesorios'],
    },
    {
      nombre: 'Material',
      opciones: ['Cerámica', 'Acero inoxidable', 'Plástico'],
    },
  ],
};
