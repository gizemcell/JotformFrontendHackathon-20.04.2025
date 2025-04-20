import {createContext, useState, useContext, useEffect} from "react"


const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [favorites, setFavorites] = useState(()=>{const local=localStorage.getItem("favorites");
        return local ? JSON.parse(local):[]});
    const [basket, setBasket] = useState(()=>{const local=localStorage.getItem("basket");
        return local ? JSON.parse(local):[]});


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket])


    const addToFavorites = (product) => {
        setFavorites(prev => [...prev, product])
    }

    const removeFromFavorites = (productId) => {
        setFavorites(prev => prev.filter(pr => pr.pid !== productId))
    }
    
    const isFavorite = (productId) => {
        return favorites.some(pr => pr.pid === productId)
    }
    const addToBasket = (product,amount) => {
        setBasket(prev => [...prev, { ...product, selected: amount }])
    }

    const removeFromBasket = (productId) => {
        setBasket(prev => prev.filter(pr => pr.pid !== productId))
    }
    const onBasket = (productId) => {
        return basket.some(pr => pr.pid === productId)
    }
    const updateBasketItemQuantity=(id, newAmount)=>{
        setBasket(prevItems =>
            prevItems.map(item =>
              item.pid === id ? { ...item, selected: newQuantity } : item
            )
          );
    };
    const getProductAmount = (productId) => {
        const item = basket.find(pr => pr.pid === productId);
        return item ? item.selected : 0;
      };
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        basket,
        onBasket,
        addToBasket,
        removeFromBasket,
        updateBasketItemQuantity,
        getProductAmount
    }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}