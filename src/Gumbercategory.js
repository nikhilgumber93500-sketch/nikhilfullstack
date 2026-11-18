import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getCategories } from "./categoryStore";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const load = () => {
      const list = getCategories().filter((item) => {
        const n = String(item.name || "")
          .toLowerCase()
          .replace(/\s+/g, "");
        return !(
          n.includes("medcin") ||
          n.includes("medicin") ||
          n.includes("medic") ||
          n.includes("medical")
        );
      });
      setCategories(list);
    };
    load();
    window.addEventListener("categoriesUpdated", load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener("categoriesUpdated", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  const openCategory = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <style>{`
        .categories-page {
          padding: 30px;
          background: rgb(226, 233, 247);
          min-height: 100vh;
        }
        .categories-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .categories-header h1 {
          margin: 10px 0;
          font-size: 30px;
          color: #222;
        }
        .categories-header h1 span {
          color: #252728;
        }
        .categories-header p {
          color: #777;
          margin: 0;
        }
        .categories-container {
          max-width: 1200px;
         margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .category-card {
          background: white;
          border: 5px dotted #ddd;
          border-radius: 5px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: 0.5s;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.12);
        }
        .category-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
        }
        .category-card h3 {
          margin: 12px 0 5px;
          font-size: 20px;
          color: #222;
        }
        .product-count {
          display: block;
          color: #666;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .category-card button {
          border: none;
          background: #1d1e1f;
          color: white;
          padding: 9px 18px;
          border-radius: 5px;
          cursor: pointer;

          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .category-card button:hover {
          background: #0954bf;
        }
        .all-products-section {
          max-width: 1200px;
          margin: 30px auto 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .all-products-section h2 {
          margin: 0 0 5px;
          font-size: 22px;
        }
        .all-products-section p {
          margin: 0;
          color: #777;
        }
        .all-products-section button {
          border: none;
          background: #161617;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        @media (max-width: 900px) {
          .categories-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .categories-page {
            padding: 20px 15px;
          }

          .categories-container {
            grid-template-columns: 1fr;
          }

          .all-products-section {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      <div className="categories-page">

        <div className="categories-header">
          <h1>
            Shop By <span>Category</span>
          </h1>

          <p>
            Choose a category and explore our products
          </p>
        </div>

        <div className="categories-container">

          {categories.map((category, index) => (
            <div
              className="category-card"
              key={category.id || index}
              onClick={() => openCategory(category.name)}
            >

              <img
                src={category.image}
                alt={category.name}
              />

              <h3>{category.name}</h3>

              <span className="product-count">
                {(category.subcategories || []).length > 0
                  ? `${category.subcategories.length} Subcategories`
                  : "5 Products"}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openCategory(category.name);
                }}
              >
                View Products
                <FaArrowRight />
              </button>

            </div>
          ))}

        </div>

        <div className="all-products-section">

          <div>
            <h2>View All Products</h2>

            <p>
              Explore our complete collection of 35 products
            </p>
          </div>

          <button onClick={() => navigate("/products")}>
            View All
            <FaArrowRight />
          </button>

        </div>

      </div>
    </>
  );
}

export default Categories;
