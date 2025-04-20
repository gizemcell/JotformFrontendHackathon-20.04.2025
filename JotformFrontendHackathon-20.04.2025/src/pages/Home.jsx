import { getAllProducts } from "../api/api";
import { useState,useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Home.css"

function Home(){
    const [allProducts,setProducts]=useState([]);
    const [load,setLoading]=useState(true);
    useEffect(() => {
        const loadProducts = async () => {
          try {
            const products = await getAllProducts();
            console.log("aaa");
            console.log(products);
            setProducts(products);
          } catch (err) {
            console.log(err);
            setError("Failed to load");
          } finally {
            setLoading(false);
          }
        };
    
        loadProducts();
      }, []);
      
      return ( 
        <div className="product-grid">
          {allProducts.map((pr) => (
            <ProductCard product={pr} key={pr.pid} />
          ))}
        </div>
      );

}
export default Home;