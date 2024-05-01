import { React, createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return( 




    
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>)
};
export default ProductProvider;
