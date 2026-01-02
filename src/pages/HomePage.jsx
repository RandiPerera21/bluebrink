import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Where Your <br/><span>Dream Home Begins</span></h1>
          <p>We connect you with trusted agents and modern houses and flats across Sri Lanka.</p>

          <div className="hero-buttons">
            <Link to="/search" className="cta">
                Browse Properties
            </Link>
            <Link to="/contact" className="cta secondary">
                Contact Us
            </Link>
          </div>
        </div>

        {/*Image*/}
        <div className="hero-image">
          <img src="/images/home-hero.jpg" alt="Modern home" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="service-container">
          <div className="service-card">
          <div className="service-icon">🏡</div>
          <h3>Buy</h3>
          <p>Find your dream home at the best price</p>
          </div>
        </div>
        <div className="service-card">
        <div className="service-icon">🔑</div>
          <h3>Rent</h3>
          <p>Quality rental properties across the Sri Lanka</p>
        </div>
        <div className="service-card">
        <div className="service-icon">📈</div>
          <h3>Invest</h3>
          <p>Expert advice for property investors</p>
        </div>
      </section>

    </div>
  );
}
