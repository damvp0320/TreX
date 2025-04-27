import React from "react";
import styles from "../styles/ProductGrid.module.css";

// Primero definimos el tipo Product
type Product = {
  id: number;
  image: string;
  price: string;
  name: string;
  category: string;
  colors: number;
  freeShipping: boolean;
};

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.info}>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.colors}>{product.colors} colores</p>
            {product.freeShipping && <p className={styles.shipping}>Envío gratis</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
    