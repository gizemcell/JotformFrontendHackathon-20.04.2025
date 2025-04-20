
import "../css/Basket.css";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard"
import { useState,useEffect } from "react";


function Basket(){
    const [total,setTotal]=useState(0);
    const { basket } = useProductContext();
    useEffect(() => {
        if (basket && basket.length > 0) {
          const calculatedTotal = basket.reduce((sum, product) => {
            const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
            const amount = typeof product.selected === 'string' ? parseFloat(product.selected) : product.selected;

            return sum + price*amount;
          }, 0);
          setTotal(calculatedTotal); // Update the total state
        } else {
          setTotal(0); // Reset total if the basket is empty or null
        }
      }, [basket]); 
      const sendSubmission=async ()=>{
        submitProductDataToJotform(basket);
      }
    
      return (
        <div className="purchases">
          <h2>Your ARE BUYING</h2>
          <div className="product-grid">
          {basket.map((pr) => (
            <ProductCard product={pr} key={pr.pid} />
          ))}
          </div>
          <div className="total-amount">
            <p>Total Amount: ${total.toFixed(2)}</p>
          </div>
          <div className="check-out">
            <button className="check-btn" onClick={sendSubmission}>Check Out</button>
          </div>
        </div>
      );
    
  
    return (
      <div className="product-empty">
        <h2>No Product</h2>
      </div>
    );
}
export default Basket;

