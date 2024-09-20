import airpods1 from "../assets/pd-airpods.png";
import airpods2 from "../assets/pd-airpodspm.png";
import applew from "../assets/pd-applew.png";
import galaxyts6 from "../assets/pd-galaxytabs6.png";
import galaxyw6 from "../assets/pd-samsumgsw.png";
import imac24 from "../assets/pd-imac.png";
import ipadp from "../assets/pd-ipadpro.png";
import iphone15 from "../assets/pd-iphone15p.png";
import iphone15pm from "../assets/pd-iphone15pm.png";
import samsungs24 from "../assets/pd-samsungs24.png";
import samsungs24u from "../assets/pd-samsungs24ultra.png";
import visionp from "../assets/pd-visionpro.png";

export interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    precioNormal: number;
    precioDescuento: number;
    descuento: number;
  }
  
const productos: Producto[] = [
{
    id: 1,
    nombre: "Airpods Pro 2da Gen",
    imagen: airpods1,
    precioNormal: 400.00,
    precioDescuento: 320.00,
    descuento: 20,
},
{
    id: 2,
    nombre: "Airpods Pro Max",
    imagen: airpods2,
    precioNormal: 600.00,
    precioDescuento: 540.00,
    descuento: 10,
},
{
    id: 3,
    nombre: "Apple Watch Ultra",
    imagen: applew,
    precioNormal: 320.00,
    precioDescuento: 256.00,
    descuento: 20,
},
{
    id: 4,
    nombre: "Galaxy Tab S6",
    imagen: galaxyts6,
    precioNormal: 550.00,
    precioDescuento: 385.00,
    descuento: 30,
},
{
    id: 5,
    nombre: "Galaxy Watch FE",
    imagen: galaxyw6,
    precioNormal: 300.00,
    precioDescuento: 285.00,
    descuento: 5,
},
{
    id: 6,
    nombre: "iMac 24 pulgadas",
    imagen: imac24,
    precioNormal: 3000.00,
    precioDescuento: 2400.00,
    descuento: 20,
},
{
    id: 7,
    nombre: "iPad Pro",
    imagen: ipadp,
    precioNormal: 700.00,
    precioDescuento: 595.00,
    descuento: 15,
},
{
    id: 8,
    nombre: "iPhone 15",
    imagen: iphone15,
    precioNormal: 999.00,
    precioDescuento: 899.00,
    descuento: 10,
},
{
    id: 9,
    nombre: "iPhone 15 Pro Max",
    imagen: iphone15pm,
    precioNormal: 1099.00,
    precioDescuento: 1044.00,
    descuento: 5,
},
{
    id: 10,
    nombre: "Galaxy S24",
    imagen: samsungs24,
    precioNormal: 999.00,
    precioDescuento: 800.00,
    descuento: 20,
},
{
    id: 11,
    nombre: "Galaxy S24 Ultra",
    imagen: samsungs24u,
    precioNormal: 1199.00,
    precioDescuento: 839.00,
    descuento: 30,
},
{
    id: 12,
    nombre: "Vision Pro",
    imagen: visionp,
    precioNormal: 3499.00,
    precioDescuento: 3149.00,
    descuento: 10,
},
];

export default productos;