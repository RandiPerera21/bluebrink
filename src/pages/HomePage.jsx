import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Search houses and flats across the UK</p>

        <Link to="/search" className="cta">
          Browse Properties
        </Link>
      </section>

      <section className="features">
        <div>
          <h3>🏡 Wide Selection</h3>
          <p>Houses and flats across multiple locations</p>
        </div>
        <div>
          <h3>💷 Best Prices</h3>
          <p>Compare prices and find the best deals</p>
        </div>
        <div>
          <h3>⭐ Save Favourites</h3>
          <p>Keep track of properties you love</p>
        </div>
      </section>
    </div>
  );
}
