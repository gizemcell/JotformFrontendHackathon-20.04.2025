import "../css/Favorites.css";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function Favorites() {
  const { favorites } = useProductContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="product-grid">
          {favorites.map((pr) => (
            <ProductCard product={pr} key={pr.pid} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite</h2>
    </div>
  );
}

export default Favorites;