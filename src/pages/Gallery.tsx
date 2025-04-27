import React from 'react';
import '../styles/Gallery.css';  
import ProductGrid from '../components/ProductGrid'; // Ajusta el path si es necesario

// Ahora los productos los movemos aquí
const products = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUCWzB35xpASxW_fF2bLXhzLqPN-dzM1a5w&s",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  },
  {
    id: 2,
    image: "https://media.falabella.com/falabellaCO/73017607_1/w=800,h=800,fit=pad",
    price: "$1.299.950",
    name: "Tenis Adizero Adios Pro 4",
    category: "Mujer Running",
    colors: 5,
    freeShipping: true,
  }
  
];

const Gallery = () => {
  return (
    <div>
      <h1 className='TITULO'>HOLAAAA</h1>
      <h1>holaaaa</h1>

      {/* Pasamos los productos como props */}
      <ProductGrid products={products} />
    </div>
  );
};

export default Gallery;
