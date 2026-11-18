import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {FaArrowRight,} from "react-icons/fa";
function GumberHome() {
  return (
    <div>
      <section className="home-slider">
  <Carousel interval={1000} pause="hover" controls={true} indicators={true}>
       <Carousel.Item>
        <img  src="/g1.jpg" alt="M/s Nikhil Enterprises" className="slider-image"/>
            <Carousel.Caption className="slider-caption">
              <span>WELCOME TO</span>
              <h1>M/s Nikhil Enterprises</h1>
  <p> Your trusted place for quality products at the best prices.</p>
<Link to="/products"className="btn btn-danger slider-button" >
                Shop Now
                <FaArrowRight className="ms-2" />
                  </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/g2.jpg" alt="Quality Products" className="slider-image"  />
            <Carousel.Caption className="slider-caption">
              <span>QUALITY PRODUCTS</span>
              <h1>Everything You Need</h1>
              <p> Quality products for your everyday needs. </p>
    <Link  to="/products"  className="btn btn-danger slider-button">
                Shop Now
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
    <img src="/g3.jpg" alt="Grocery Products" className="slider-image"/>
            <Carousel.Caption className="slider-caption">
              <span>SHOP GROCERY</span>
              <h1>Fresh & Quality Products</h1>
              <p>  Get your daily grocery essentials easily. </p>
              <Link to="/products"className="btn btn-primary slider-button">
                Explore Products
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
    <img src="/g4.jpg" alt="Daily Essentials" className="slider-image" />
            <Carousel.Caption className="slider-caption">
              <span>DAILY ESSENTIALS</span>
              <h1>Shop Smart. Shop Easy.</h1>
              <p> Find all your daily essentials in one place. </p>
              <Link to="/categories" className="btn btn-secondary slider-button" >
                View Categories
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/g5.jpg"alt="Best Prices" className="slider-image" />
            <Carousel.Caption className="slider-caption">
              <span>BEST PRICES</span>
              <h1>Great Products. Great Prices.</h1>
        <p> Quality products at affordable prices.</p>
              <Link to="/products"   className="btn btn-dark slider-button"       >
                Shop Now
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/g6.jpg"  alt="Easy Shopping"  className="slider-image" />
            <Carousel.Caption className="slider-caption">
              <span>EASY SHOPPING</span>
              <h1>Your Shopping Destination</h1>
              <p>  Simple, convenient and reliable shopping.</p>
              <Link to="/products"className="btn btn-light slider-button">
                Start Shopping
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/g7.jpg" alt="M/s Nikhil Enterprises" className="slider-image"/>
            <Carousel.Caption className="slider-caption">
              <span>M/S NIKHIL ENTERPRISES</span>
              <h1>Your Trusted Store</h1>
              <p> Everything you need, all in one place. </p>
              <Link to="/products"  className="btn btn-info slider-button" >
                Shop Now
                <FaArrowRight className="ms-2" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="categories-section">
        <div className="container">
          <div className="section-title">
            <span>SHOP BY CATEGORY</span>
            <h2>Explore Our Categories</h2>
            <p> Find everything you need in one place </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <Link to="/products?category=Grocery" className="category-card">
             <img src="/grocery.jpg" alt="Grocery"  className="category-image"/>
                <h4>Grocery</h4>
        <p>  Daily grocery essentials </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
          <Link to="/products?category=Beverages" className="category-card">
                <img src="/beverages.jpg" alt="Beverages" className="category-image" />
                <h4>Beverages</h4>
                <p>Drinks and refreshments </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
            <Link to="/products?category=Personal%20Care" className="category-card">
   <img  src="/personal care.jpg" alt="Personal Care"className="category-image" />
                <h4>Personal Care</h4>
                <p>  Personal care products</p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
           <Link to="/products?category=Household" className="category-card">
                <img  src="/household.jpg"  alt="Household" className="category-image" />
                <h4>Household</h4>
                <p> Home essential products</p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
  <Link to="/products?category=Household" className="category-card">
                <img  src="/stationery.jpg"  alt="Stationery" className="category-image" />
                <h4>Stationery</h4>
                <p>  School and office supplies </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
               <Link to="/products?category=Snacks" className="category-card">
                <img  src="/snack.jpg"  alt="Snacks"  className="category-image" />
                <h4>Snacks</h4>
                <p>  Tasty snacks and treats </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
             <Link to="/products?category=Fruits%20%26%20Vegetables" className="category-card">
 <img  src="/fruit and vegetable.jpg" alt="Fruits and Vegetables"  className="category-image"    />
                <h4>Fruits & Vegetables</h4>
                <p>  Fresh fruits and vegetables </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link  to="/products" className="category-card" >
            <img  src="/all product.jpg" alt="View All Products"  className="category-image"/>
                <h4>View All</h4>
                <p>  Explore all products </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-section">
        <div className="container">
          <div className="offer-box">
            <div>
              <span>SHOP WITH US</span>
              <h2>  Everything You Need, <br /> All In One Place.</h2>
              <p>  Quality products at great prices. </p> </div>
            <Link to="/products"  className="btn btn-light offer-btn" >
              Shop Now
              <FaArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="why-section">
        <div className="container">
          <div className="section-title">
            <span>OUR PROMISE</span>
            <h2>Why Choose Us?</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                  <img   src="/bestprize.jpg" alt="Best Prices"   className="why-image" />
                <p> Great products at competitive prices. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                <img src="/fastdelivery.jpg" alt="Fast Delivery" className="why-image" />
                <p>Get your orders delivered quickly.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
          <img src="/secure.jpg"alt="Secure Shopping"className="why-image" />    
             <h5>Secure Shopping</h5>
                <p> Safe and reliable shopping experience. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                  <img src="/customer.jpg"   alt="Customer Support" className="why-image" />
                <h5>Customer Support</h5>
                <p>   We are always here to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>  <section className="reviews-section">
  <h2>What Our Customers Say</h2>
  <div className="reviews">
    <div className="review-card">
      <h4>Happy Customer</h4>
      <p>★★★★★</p>
      <p>Good quality products and reasonable prices.</p>
    </div>

    <div className="review-card">
      <h4>Happy Customer</h4>
      <p>★★★★★</p>
      <p>Fast delivery and very good shopping experience.</p>
    </div>

    <div className="review-card">
      <h4>Happy Customer</h4>
      <p>★★★★★</p>
      <p>Great products and trusted service.</p>
    </div>
  </div>
</section>
      <section className="before-footer">
  <div className="container">
    <div className="before-footer-content">
      <h2>M/s Nikhil Enterprises</h2>
      <p className="tagline">Quality products, trusted service! </p>
      <hr />
      <p className="security-text">
        We value your privacy and security. We will never ask for
        your bank account, card or OTP details over phone.
      </p>
    </div>
  </div>
</section>
      <style>
        {`
        .home-slider {
          width: 100%;
          overflow: hidden;
        }
        .slider-image {
          width: 100%;
          height: 580px;
          object-fit: cover;
          filter: brightness(60%);
        }
        .slider-caption {
          bottom: 20%;
        }
        .slider-caption span {
          color: #b9f3d2;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 2px;
        }
        .slider-caption h1 {
          font-size: 30px;
          font-weight: 500;
          margin: 10px 0;
        }
        .slider-caption p {
          font-size: 15px;
          margin-bottom: 25px;
        }
        .slider-button {
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 500;
        }
        .categories-section {
          padding: 80px 0;
          background: #ffffff;
        } 
          .reviews-section {
  padding: 50px 20px;
  text-align: center;
  background: #f8f9fa;
}
.reviews {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.review-card {
  background: white;
  padding: 25px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 3px 10px #ccc;
}
.review-card p {
  margin: 8px 0;
}
        .section-title {
          text-align: center;
          margin-bottom: 45px;
        }
        .section-title span {
          color: #4fa17b;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 1px;
        }
        .section-title h2 {
          font-size: 30px;
          font-weight: 500;
          color: #17251f;
          margin-top: 8px;
        }
        .section-title p {
          color: #6c757d;
        }
        .category-card {
          display: block;
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 15px;
          text-decoration: none;
          color: #17251f;
          box-shadow: 0 5px 20px rgba(0,0,0,0.07);
          border: 1px solid #eeeeee;
          transition: 0.3s;
          height: 100%;
          overflow: hidden;
        }
        .category-card:hover {
          transform: translateY(-7px);
          color: #198754;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          border-color: #198754;
        }
        .category-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 18px;
          transition: 0.3s;
        }
        .category-card:hover .category-image {
          transform: scale(1.04);
        }
        .category-card h4 {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .category-card p {
          color: #777;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .offer-section {
          padding: 20px 0 80px;
        }
        .offer-box {
          background: #198754;
          color: white;
          border-radius: 20px;
          padding: 45px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .offer-box span {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2px;
        }
        .offer-box h2 {
          font-size: 38px;
          font-weight: 500;
          margin: 10px 0;
        }
        .offer-box p {
          margin-bottom: 0;
          opacity: 0.9;
        }
        .offer-btn {
          padding: 13px 25px;
          font-weight: 500;
          border-radius: 8px;
        }
   .before-footer {
  background: #f8f8f8;
  padding: 45px 0 35px;
  border-top: 1px solid #eeeeee;
}
.before-footer-content {
  max-width: 1100px;
  margin: auto;
}
.before-footer-content h2 {
  font-size: 48px;
  font-weight: 500;
  color: #198754;
  margin-bottom: 5px;
}
.tagline {
  font-size: 20px;
  font-style: italic;
  color: #888888;
  margin-bottom: 25px;
}
.before-footer-content hr {
  border: 0;
  border-top: 1px solid #dddddd;
  margin: 0 0 22px;
}
.security-text {
  font-size: 14px;
  color: #888888;
  margin: 0;
}
.why-section {
  background: #ffffff;
  padding: 80px 0;
}
.why-card {
  background: #ffffff;
  text-align: center;
  padding: 15px;
  border-radius: 12px;
  height: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e5e5;
  transition: 0.3s;
}
.why-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.10);
}
.why-image {
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 18px;
}

.why-card h5 {
  color: #222222;
  font-weight: 500;
  margin-bottom: 8px;
}

.why-card p {
  color: #777777;
  margin-bottom: 10px;
  font-size: 14px;
}
        @media (max-width: 991px) {
          .slider-image {
            height: 400px;
          }
          .slider-caption {
            bottom: 18%;
          }
          .slider-caption h1 {
            font-size: 40px;
          }
          .offer-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
          }
        }
         
        @media (max-width: 576px) {
          .slider-image {
            height: 350px;
          }
              
          .slider-caption {
            bottom: 10%;
          }
          .slider-caption h1 {
            font-size: 28px;
          }
          .slider-caption p {
            font-size: 14px;
          }
          .slider-button {
            padding: 9px 17px;
            font-size: 14px;
          }
          .section-title h2 {
            font-size: 30px;
          }
          .category-image {
            height: 200px;
          }
          .offer-box {
            padding: 30px;
          }
          .offer-box h2 {
            font-size: 25px;
        }} `}
      </style>
    </div>
  );
}
export default GumberHome;