import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {  FaSearch,FaShoppingCart,FaTimes,} from "react-icons/fa";
function Gumberproduct() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const products = [
    {
      id: 1,
      name: "Aashirvaad Atta",
      category: "Grocery",
      image:
        "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/67b36556a9a883a17c9eabd8/8901725121129_1-1024x1024.png",
      quantities: [
        { kg: 1, price: 60 },
        { kg: 5, price: 250 },
        { kg: 10, price: 465 },
        { kg: 12, price: 550 },
      ],
      details:
        "Premium quality wheat flour suitable for daily cooking.",
    },
    {
      id: 2,
      name: "Tata Salt",
      category: "Grocery",
      image:
        "https://m.media-amazon.com/images/I/51yLiIt4FkL._AC_UF894,1000_QL80_.jpg",
      quantities: [
        { kg: 1, price: 30 },
        { kg: 2, price: 55 },
        { kg: 5, price: 130 },
      ],
      details: "Iodized salt for everyday cooking.",
    },
    {
      id: 3,
      name: "India Gate Basmati Rice",
      category: "Grocery",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRU8-0vu2g5WcDTQSOJWNmh7I5NQbBadmc_mM1razye2fgTRKnmy3GPg5JYZrHfEmZg8Ub-543qTkBxoUZA7cHnOYo_Ks7lQkggP_IGFPUl7umTikMJ6kQm0Cw",
      quantities: [
        { kg: 1, price: 80 },
        { kg: 5, price: 380 },
        { kg: 10, price: 740 },
        { kg: 12, price: 870 },
      ],
      details:
        "Premium basmati rice with long grains and great taste.",
    },
    {
      id: 4,
      name: "Fortune Sunflower Oil",
      category: "Grocery",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQfDMUgwMX_t1dexrJtjbRh9dZdgvvNfMB-8dfEs7AHaiIWVqLlLCX0m1T0yYaa8Gwi4VUY0Bqan9yHuP9xInrUBKKN7HcfpQ",
      quantities: [
        { kg: 1, price: 185 },
        { kg: 2, price: 360 },
        { kg: 5, price: 880 },
      ],
      details: "Light and healthy sunflower cooking oil.",
    },
    {
      id: 5,
      name: "Tata Tea",
      category: "Grocery",
      image:
        "https://m.media-amazon.com/images/I/61z40Qqq-eL._SL1000_.jpg",
      quantities: [
        { kg: 0.25, price: 70 },
        { kg: 0.5, price: 125 },
        { kg: 1, price: 243 },
      ],
      details:
        "Refreshing tea with a rich taste and aroma.",
    },
    {
      id: 6,
      name: "Coca Cola",
      category: "Beverages",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xyXOdeeBAC_fDDt22jVbQvM4zb41pk8yHZBBFNnKJg&s=10",
      quantities: [
        { ML: 250, price: 20 },
        { ML: 500, price: 40 },
        { L: 1, price: 50 },
        { L: 2, price: 90 },
      ],
      details: "Refreshing carbonated soft drink.",
    },
    {
      id: 7,
      name: "Pepsi",
      category: "Beverages",
      image:
        "https://media.zid.store/3a3b6b8f-fcb5-45e3-9a9c-59dc20b95d45/2f6c8406-4028-46f0-8e47-d2a4db3b3956.png",
      quantities: [
        { ML: 250, price: 20 },
        { ML: 500, price: 40 },
        { L: 1, price: 50 },
        { L: 2, price: 90 },
      ],
      details: "Classic refreshing soft drink.",
    },
    {
      id: 8,
      name: "Sprite",
      category: "Beverages",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbSBkiWVz__btHcR_Ry2MSbBEWIQ-C78332c6h2lMbQ&s",
      quantities: [
        { ML: 250, price: 20 },
        { ML: 500, price: 40 },
        { L: 1, price: 50 },
        { L: 2, price: 90 },
      ],
      details:
        "Lemon-lime flavored refreshing drink.",
    },
    {
      id: 9,
      name: "Frooti",
      category: "Beverages",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTu_kd56ECoWOL7ftbzvO1QUEy_d-WgfOpVOv2I_lNXkF74pI6KlUZ29CxI07weVEhfIX4T5BoWlODHy7069G6rL8_NIuQEq6TRDO11uD7JEcM0iRRzhQKG",
      quantities: [
        { ML: 200, price: 20 },
        { ML: 600, price: 40 },
        { L: 1, price: 60 },
        { L: 1.5, price: 95 },
      ],
      details: "Mango flavored fruit drink.",
    },
    {
      id: 10,
      name: "Real Fruit Juice",
      category: "Beverages",
      image:
        "https://www.bbassets.com/media/uploads/p/l/229922_16-real-fruit-power-juice-mixed.jpg",
      quantities: [
        { ML: 500, price: 60 },
        { L: 1, price: 125 },
        { L: 2, price: 230 },
      ],
      details: "Refreshing mixed fruit juice.",
    },
    {
      id: 11,
      name: "Dove Soap",
      category: "Personal Care",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLisdwfEz-rqvayqTsnDTovyosYmMYrOSTnsN4zqq2oJo51_EmsyUw08QrT5dG-QGjpgus12HiJjarn8rRfZ3ZO96kJlj05vEtHdyP8xlvCjW0Spg8cOQVSA",
      quantities: [
        { g: 100, price: 60 },
        { g: 200, price: 110 },
        { g: 500, price: 250 },
      ],
      details:
        "Moisturizing soap for everyday personal care.",
    },
    {
      id: 12,
      name: "Lux Soap",
      category: "Personal Care",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhylj2yIbAhBQo3FiloAO_LntQZiDSgpc2VqjMmZU1u_OWtU_Oz2TMbVB6Xx07F5W1KJJwGVFTXu7glAbtH3W75vaVUjTQAOz4tONW9_xZgF-Boau9DM37",
      quantities: [
        { g: 100, price: 40 },
        { g: 200, price: 75 },
        { g: 500, price: 170 },
      ],
      details: "Fragrant bathing soap.",
    },
    {
      id: 13,
      name: "Clinic Plus Shampoo",
      category: "Personal Care",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1rkTr6SOIZzB--ESKlpI-uZN70ZBGw6XVB6FmGb44OuMN7y3I_ENpMD7V4FXz0UbQ9SavZF-30Gy8TwEOWxxDfXmlylwhyWBdNvd0BHdsYMEyuvCrOcM9",
      quantities: [
        { g: 175, price: 75 },
        { g: 340, price: 140 },
        { g: 650, price: 260 },
      ],
      details:
        "Everyday shampoo for clean and healthy hair.",
    },
    {
      id: 14,
      name: "Colgate Toothpaste",
      category: "Personal Care",
      image:
        "https://m.media-amazon.com/images/I/61hohDKfApL._SL1000_.jpg",
      quantities: [
        { g: 50, price: 25 },
        { g: 100, price: 55 },
        { g: 200, price: 110 },
      ],
      details: "Daily toothpaste for oral care.",
    },
    {
      id: 15,
      name: "Head & Shoulders",
      category: "Personal Care",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn14MOUDtk4HhlGvOTCq6UUXBMbkVcE3H0HtebMd0Dkw&s=10",
      quantities: [
        { g: 180, price: 110 },
        { g: 340, price: 210 },
        { g: 650, price: 400 },
      ],
      details:
        "Anti-dandruff shampoo for regular hair care.",
    },
    {
      id: 16,
      name: "Surf Excel",
      category: "Household",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXscs_XBQARfFFyIOMhAlCavRsY8-j7Qabj6tf9QsBkA&s=6",
      quantities: [
        { g: 500, price: 90 },
        { kg: 1, price: 180 },
        { kg: 2, price: 350 },
        { kg: 5, price: 800 },
      ],
      details:
        "Powerful detergent for everyday washing.",
    },
    {
      id: 17,
      name: "Vim Dishwash Bar",
      category: "Household",
      image:
        "https://www.quickpantry.in/cdn/shop/products/vim-dishwash-soap-quick-pantry-1.jpg?v=1710538684",
      quantities: [
        { g: 100, price: 20 },
        { g: 200, price: 35 },
        { g: 500, price: 60 },
      ],
      details:
        "Dishwash bar for cleaning utensils.",
    },
    {
      id: 18,
      name: "Harpic Toilet Cleaner",
      category: "Household",
      image:
        "https://m.media-amazon.com/images/I/61j+zu68oTL.jpg",
      quantities: [
        { g: 500, price: 110 },
        { kg: 1, price: 130 },
        { kg: 2, price: 240 },
      ],
      details:
        "Toilet cleaning liquid for household use.",
    },
    {
      id: 19,
      name: "Colin Glass Cleaner",
      category: "Household",
      image:

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXplrrr4GXk_QW2eQ9Wbm1gPrOEG-JSovLH2aZwrwCcw&s=10",
      quantities: [
        { g: 250, price: 60 },
        { g: 500, price: 90 },
        { kg: 1, price: 120 },
      ],
      details:
        "Glass and surface cleaning spray.",
    },
    {
      id: 20,
      name: "Dettol Floor Cleaner",
      category: "Household",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCqj6ugS4jcck8z5ddBXoYPXgn9fFlVTL-EoLCSadrQ&s=10",
      quantities: [
        { g: 500, price: 100 },
        { kg: 1, price: 180 },
        { kg: 2, price: 340 },
      ],
      details:
        "Floor cleaning liquid for home hygiene.",
    },
    {
      id: 21,
      name: "Parle-G Biscuits",
      category: "Snacks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR19AKqTRwQT-KO4kDL95hmC4XKTLl2eOdxklC03wrOQ&s=10",
      quantities: [
        { g: 50, price: 10 },
        { g: 100, price: 20 },
        { g: 200, price: 40 },
      ],
      details: "Classic glucose biscuits.",
    },
    {
      id: 22,
      name: "Haldiram Namkeen",
      category: "Snacks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IigZHUDTVrPzrGL8DQU6tE79wJSU1ID3-3WMpmpfqQ&s=10",
      quantities: [
        { g: 100, price: 30 },
        { g: 200, price: 55 },
        { g: 400, price: 90 },
      ],
      details: "Tasty and crunchy namkeen.",
    },
    {
      id: 23,
      name: "Lays Chips",
      category: "Snacks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAQUIHhHxOMmJjcgyhc551gkgC9xVLQFJ-1mHX-ctcQ&s=10",
      quantities: [
        { g: 50, price: 10 },
        { g: 100, price: 20 },
        { g: 200, price: 40 },
      ],
      details: "Crispy potato chips.",
    },
    {
      id: 24,
      name: "Kurkure",
      category: "Snacks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeLwWqF6jK_mZswiiXyZZ1_04wtuTUZzfXGTkqTetog&s",
      quantities: [
        { g: 50, price: 10 },
        { g: 100, price: 20 },
        { g: 200, price: 40 },
      ],
      details:
        "Crunchy and spicy snack.",
    },
    {
      id: 25,
      name: "Hide & Seek Biscuits",
      category: "Snacks",
      image:
        "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-01-09/Hide__Seek_-_Chocolate_120gm.jpg",
      quantities: [
        { g: 60, price: 15 },
        { g: 120, price: 30 },
        { g: 240, price: 55 },
      ],
      details: "Chocolate chip biscuits.",
    },
    {
      id: 26,
      name: "Fresh Apples",
      category: "Fruits & Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBXy8jElLWBNOGKJUFhnx6KBUaUxb66ljmgXFDQATzw&s=10",
      quantities: [
        { kg: 1, price: 105 },
        { kg: 2, price: 200 },
        { kg: 5, price: 480 },
      ],
      details: "Fresh and juicy apples.",
    },
    {
      id: 27,
      name: "Fresh Banana",
      category: "Fruits & Vegetables",
      image:
        "https://static.toiimg.com/thumb/msid-129628673,imgsize-1204023,width-400,resizemode-4/how-to-keep-bananas-fresh-for-weeks-without-turning-black.jpg",
      quantities: [
        { Dozen: 1, price: 60 },
        { Dozen: 2, price: 110 },
        { Dozen: 5, price: 270 },
      ],
      details: "Fresh ripe bananas.",
    },
    {
      id: 28,
      name: "Fresh Tomato",
      category: "Fruits & Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZISZz_ygLPre6JioeiruiyBjm3ljOmeSxhHkKEjVGMg&s=10",
      quantities: [
        { kg: 1, price: 50 },
        { kg: 2, price: 95 },
        { kg: 5, price: 230 },
      ],
      details: "Fresh red tomatoes.",
    },
    {
      id: 29,
      name: "Fresh Potato",
      category: "Fruits & Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKVhg2MmxyONdqjLJj9r6GPde-bexWZQxsnTBZYPJJQ&s=10",
      quantities: [
        { kg: 1, price: 25 },
        { kg: 2, price: 48 },
        { kg: 5, price: 115 },
      ],
      details: "Fresh quality potatoes.",
    },
    {
      id: 30,
      name: "Fresh Onion",
      category: "Fruits & Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3T6cLNbnPILS5MRzpesPNrB_F4bAC2rTcupYszoT3w&s=10",
      quantities: [
        { kg: 1, price: 65 },
        { kg: 2, price: 125 },
        { kg: 5, price: 300 },
      ],
      details:
        "Fresh onions for everyday cooking.",
    },
    {
      id: 31,
      name: "Classmate Notebook",
      category: "Stationery",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmCWzfrMrxv6eaheFXrrs-8ryf6ula7N4s55LQT0Hh9Pb-M7xRGwlVGbxQ0dMAaJ2Xkh6MfMwff0-Wjy7vPAgGQz84GLSa",
      quantities: [
        { Piece: 1, price: 50 },
        { Piece: 2, price: 95 },
        { Piece: 5, price: 220 },
      ],
      details:
        "Quality notebook for school and college use.",
    },
    {
      id: 32,
      name: "Reynolds Pen",
      category: "Stationery",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNxjboKcameElaqAtJlrYLIbaU5BASW3BKDvA52jU-YQhFLOt8F0obdv0cCqW2salIfmTzYd6tWWvnAriyZj2TzWKJsXEVCjSoC1GynWSCrdPayL9Li1bsDw",
      quantities: [
        { Piece: 1, price: 10 },
        { Piece: 5, price: 45 },
        { Piece: 10, price: 85 },
      ],
      details: "Smooth writing ball pen.",
    },
    {
      id: 33,
      name: "Apsara Pencil",
      category: "Stationery",
      image:
        "https://www.rapiddeliveryservices.in/uploads/webp/93703-.webp",
      quantities: [
        { Piece: 1, price: 5 },
        { Piece: 5, price: 25 },
        { Piece: 10, price: 45 },
      ],
      details:
        "Quality pencils for writing and drawing.",
    },
    {
      id: 34,
      name: "Fevicol",
      category: "Stationery",
      image:
        "https://djl2kq23xfhqi.cloudfront.net/productimages/WebP/SL2D07.webp",
      quantities: [
        { g: 50, price: 20 },
        { g: 100, price: 30 },
        { g: 200, price: 55 },
      ],
      details:
        "Strong adhesive for stationery and craft work.",
    },
    {
      id: 35,
      name: "Geometry Box",
      category: "Stationery",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdLU4hrMdA1zc2WLa7BHSgcvOpe07XtsNjSYuiPlLOuLK3gn9p0-sCWOqEoUbGIahuSxivNLzlhyhL0huZxAn8-QXWSUut",
      quantities: [
        { Piece: 1, price: 120 },
        { Piece: 2, price: 230 },
      ],
      details:
        "Complete geometry box for students.",
    },
  ];
  const categories = [
"All","Grocery","Beverages","Personal Care","Household","Snacks","Fruits & Vegetables", "Stationery", ];
  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const categoryMatch =
      category === "All" ||
      product.category === category;
    return searchMatch && categoryMatch;
  });
  const openDetails = (product) => {
    setSelectedProduct(product);
    setSelectedQuantity(product.quantities[0]);
  };
  const getPrice = () => {
    if (!selectedQuantity) {
      return 0;
    }
    return selectedQuantity.price;
  };
  const getQuantityText = (item) => {
    const unit = Object.keys(item).find(
      (key) => key !== "price"
    );
    return `${item[unit]} ${unit}`;
  };
  const addToCart = () => {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    setSelectedProduct(null);
    navigate("/login");
    return;
  }

  const oldCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const cartProduct = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    category: selectedProduct.category,
    image: selectedProduct.image,

    quantityName: getQuantityText(selectedQuantity),

    price: selectedQuantity.price,

    quantity: 1
  };

  const existingProduct = oldCart.find(
    (item) =>
      item.id === cartProduct.id &&
      item.quantityName === cartProduct.quantityName
  );

  let updatedCart;

  if (existingProduct) {

    updatedCart = oldCart.map((item) =>
      item.id === cartProduct.id &&
      item.quantityName === cartProduct.quantityName
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

  } else {

    updatedCart = [
      ...oldCart,
      cartProduct
    ];

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
window.dispatchEvent(new Event("cartUpdated"));
  alert(
    `${selectedProduct.name} added to cart`
  );

  setSelectedProduct(null);
};
  return (
    <div className="products-page">
      <section className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>  Quality products for your everyday needs</p>
        </div>
      </section>
      <section className="filter-section">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-7">
              <div className="search-box">
                <FaSearch />
   <input type="text"placeholder="Search products..." value={search}  onChange={(e) =>
 setSearch(e.target.value) }/>
              </div>
            </div>
            <div className="col-md-5">
<select className="category-select"value={category}onChange={(e) =>  setCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="products-section">
        <div className="container">
          <div className="products-title">
            <div>
              <small>SHOP NOW</small>
          <h2>{category === "All"
  ? "All Products"    : category}</h2>
            </div>
         </div>
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                  <div className="product-card">
                    <div className="product-image-box">
                      <span className="category-badge">{product.category}  </span>
                      <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-details">
                      <p className="product-category"> {product.category} </p>
                      <h4>  {product.name}</h4>
                      <p className="starting-price">  Starting ₹
                        {product.quantities[0].price}</p>
                      <button className="view-details-btn" onClick={() =>  openDetails(product)} >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>   No Products Found </h3>
                <p>Try searching for another product. </p>
                <button   onClick={() => {setSearch("");  setCategory("All"); }} >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="offer-section">
        <div className="container">
          <div className="offer-box">
            <div>
              <small> M/S NIKHIL ENTERPRISES </small>
              <h2>Quality Products. <br />Great Prices.</h2>
              <p>Everything you need in one place </p>
            </div>
      <button onClick={() => { setSearch(""); setCategory("All");
window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Shop All
            </button>
          </div>
        </div>
      </section>
      {selectedProduct && (
        <div className="popup-overlay" onClick={() =>  setSelectedProduct(null)} >
          <div className="popup" onClick={(e) =>   e.stopPropagation()}>
<button  className="close-btn" onClick={() =>  setSelectedProduct(null) } > <FaTimes /> </button>
            <div className="row align-items-center">
              <div className="col-md-5">
        <img className="popup-image" src={selectedProduct.image} alt={selectedProduct.name}     />
              </div>
              <div className="col-md-7">
                <p className="popup-category">{selectedProduct.category}</p>
                <h2> {selectedProduct.name} </h2>
                <p className="popup-details">  {selectedProduct.details}  </p>
                <label>Select Quantity  </label>
                <select  className="quantity-select" value={JSON.stringify(  selectedQuantity  )}
        onChange={(e) =>  setSelectedQuantity( JSON.parse(e.target.value)
                    ) } >
                  {selectedProduct.quantities.map(
                    (item, index) => (
                      <option
                        key={index}
                        value={JSON.stringify(item)}
                      >
                        {getQuantityText(item)} - ₹
                        {item.price}
                      </option>
                    )
                  )}
                </select>
                <div className="selected-quantity">
                  Selected:{" "}
                  {selectedQuantity &&
                    getQuantityText(
                      selectedQuantity
                    )}
                </div>
                <div className="popup-price">
                  ₹{getPrice()}
                </div>
    <button  className="cart-btn"onClick={addToCart}   > <FaShoppingCart /> Add to Cart  </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        * {
          box-sizing: border-box;
        }
        .products-page {
          background: #fef7edf3;
          min-height: 100vh;
        }

        .products-header {
          background: #26352f;
          color: white;
          text-align: center;
          padding: 55px 20px;
        }
        .products-header h5 {
          margin: 0 0 8px;
          font-size: 30px;
          font-weight: 500;
        }

        .products-header p {
          margin: 0;
          color: #d7ddd9;
        }

        .filter-section {
          background: white;
          padding: 25px 0;
          border-bottom: 1px solid #e5e5e5;
        }
        .search-box {
          height: 40px;
          display: flex;
          align-items: center;
          background: #fafafa;
          border: 5px dotted #ddd;
          border-radius: 10px;
          padding: 0 15px;
        }

        .search-box svg {
          color: #777;
          margin-right: 10px;
        }

        .search-box input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 15px;
        }

        .category-select {
          width: 100%;
          height: 40px;
          border: 5px ridge #ddd;
          border-radius: 10px;
          background: #fafafa;
          padding: 0 12px;
          outline: none;
        }
        .products-section {
          padding: 55px 0;
        }
        .products-title {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 28px;
        }
        .products-title small {
          color: #ed930c;
          font-weight: 500;
          letter-spacing: 1px;
        }
        .products-title h2 {
          margin: 5px 0 0;
          font-size: 30px;
          color: #222;
        }
        .products-title span {
          color: #777;
        }
        .product-card {
          height: 100%;
          background: white;
          border: 1px solid #e3e3e3;
          border-radius: 10px;
          overflow: hidden;
          transition: 0.25s;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 20px rgba(0,0,0,0.08);
        }
        .product-image-box {
          height: 220px;
          background: #fafafa;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-image-box img {
          width: 100%;
          height: 100%;
          padding: 15px;
          object-fit: contain;
        }
        .category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          background: #26352f;
          color: white;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 10px;
        }
        .product-details {
          padding: 15px;
        }
        .product-category {
          color: #888;
          font-size: 12px;
          margin-bottom: 6px;
        }
        .product-details h4 {
          font-size: 17px;
          color: #222;
          margin: 0 0 8px;
          min-height: 40px;
        }
        .starting-price {
          color: #26352f;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .view-details-btn {
          width: 100%;
          padding: 10px;
          border: 1px solid #26352f;
          background: white;
          color: #26352f;
          border-radius: 5px;
          cursor: pointer;
        }
        .view-details-btn:hover {
          background: #26352f;
          color: white;
        }
        .no-products {
          width: 100%;
          text-align: center;
          padding: 60px 20px;
        }
        .no-products h3 {
          color: #222;
        }
        .no-products p {
          color: #777;
        }
        .no-products button {
          border: none;
          background: #26352f;
          color: white;
          padding: 10px 18px;
          border-radius: 5px;
        }
        .offer-section {
          padding-bottom: 40px;
        }
        .offer-box {
          background: #26352f;
          color: white;
          border-radius: 10px;
          padding: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }
        .offer-box small {
          color: #e2a03b;
          font-weight: 500;
        }
        .offer-box h2 {
          margin: 8px 0;
        }
        .offer-box p {
          color: #d0d5d2;
        }
        .offer-box button {
          border: none;
          background: #1fb318;
          color: white;
          padding: 11px 20px;
          border-radius: 25px;
          cursor: pointer;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 9999;
        }
        .popup {
          position: relative;
          width: 850px;
          max-width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 12px;
          padding: 30px;
        }
        .close-btn {
          position: absolute;
          right: 15px;
          top: 15px;
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          background: #26352f;
          color: white;
          cursor: pointer;
          z-index: 5;
        }
        .popup-image {
          width: 100%;
          height: 300px;
          object-fit: contain;
        }
        .popup-category {
          color: #f9d7a5;
          font-weight: bold;
        }
        .popup h2 {
          color: #222;
        }
        .popup-details {
          color: #977f7f;
          line-height: 1.6;
        }
        .quantity-select {
          width: 100%;
          height: 45px;
          margin-top: 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0 10px;
          background: white;
        }
        .selected-quantity {
          margin-top: 12px;
          color: #666;
          font-size: 14px;
        }
        .popup-price {
          font-size: 28px;
          font-weight: bold;
          color: #26352f;
          margin: 15px 0;
        }
        .cart-btn {
          border: none;
          background: #d99125;
          color: white;
          padding: 12px 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .cart-btn:hover {
          background: #bd7610;
        }
        @media (max-width: 768px) {
          .products-header h1 {
            font-size: 32px;
          }
          .products-section {
            padding: 40px 15px;
          }
          .products-title h2 {
            font-size: 26px;
          }
          .offer-section {
            padding: 0 15px 40px;
          }
          .offer-box {
            display: block;
            padding: 28px;
          }
          .offer-box button {
            margin-top: 20px;
          }
          .popup {
            padding: 20px;
          }
          .popup-image {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}
export default Gumberproduct;