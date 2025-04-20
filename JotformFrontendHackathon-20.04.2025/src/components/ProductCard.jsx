import "../css/Product.css"
import { useProductContext } from "../context/ProductContext";
import { useState } from "react";


function ProductCard({product}){
const [amount, setAmount] = useState(0);
const {favorites,addToFavorites,removeFromFavorites,isFavorite,onBasket,addToBasket,removeFromBasket,getProductAmount}=useProductContext();
const favorite=isFavorite(product.pid);
const isInBasket=onBasket(product.pid);
const currentAmount = getProductAmount(product.pid);


function onFavoriteClick(e){
    e.preventDefault();
    if(favorite) removeFromFavorites(product.pid)
    else addToFavorites(product)
}
const onBuyClick = (e) => {
    e.preventDefault()
    //  Add logic to add/remove from the basket
    if (!isInBasket) {
        addToBasket(product,amount);
    }
}
const onRemoveClick = (e) => {
    e.preventDefault()
    if (isInBasket) {
        removeFromBasket(product.pid);
    }
}
const handleAmountChange = (e) => {
    e.preventDefault()
    const newAmount = parseInt(e.target.value, 10);
    if (!isNaN(newAmount) && newAmount > 0) {
      setAmount(newAmount);
      if (isInBasket) {
        updateBasketItemQuantity(product.pid, newAmount); // Update quantity in context
      }
    }
  };
const img=JSON.parse(product.images);
return <div className="product-card">
        <div className="product-poster">
            <img src={`${img[0]}`} alt={product.description}/>
            <div className="product-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
                {(isInBasket) ? (
                <button className="remove-basket" onClick={onRemoveClick}>
                  remove
                </button>
              ) : (
                <button className="add-basket" onClick={onBuyClick}>
                  buy
                </button>
                
              )}
              <div className="product-amount">
              {(isInBasket) ? (
                <p className="amount">{currentAmount}</p>
                  
              ) : (
                <input
            type="number" min="1" value={amount} onChange={handleAmountChange}/>
                
              )}
          
        </div>
            </div>
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    </div>
}
export default ProductCard;