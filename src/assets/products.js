import simple from "./simple.png";
import medio from "./medio.png";
import complejo from "./complejo.png";
import paginaadicional from "./paginaadicional.png";

export const products = [
    {id: 1, tittle: "Tablero simple", description: "Informe de un solo panel", price: 7500, pictureUrl: simple, categoria: "Producto"},
    {id: 2, tittle: "Tablero medio", description: "Informe de 2 paneles", price: 10000, pictureUrl: medio, categoria: "Producto"},
    {id: 3, tittle: "Tablero complejo", description: "Informe de 3 paneles", price: 12000, pictureUrl: complejo, categoria: "Producto"},
    {id: 4, tittle: "Ventana", description: "Panel adicional para informes de más de 3 paneles", price: 1500, pictureUrl: paginaadicional, categoria: "Producto"}
    ]

export const categorias = [
    {id: 1, nombre: "Producto", ruta: "/categoria/Producto"},
    {id: 2, nombre: "Servicio", ruta: "/categoria/Servicio"},
]
