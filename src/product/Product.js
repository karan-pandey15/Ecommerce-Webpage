import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import "./productRes.css";

const ProductsApi = "https://fakestoreapi.com/products"; //API

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);

  // Fetching Api
  const fetchData = async () => {
    const res = await fetch(ProductsApi);
    const data = await res.json();

    setProducts(data);
    setFilteredProducts(data);
  };

  // Filter Products Based on the Search Keywords
  const filterThroughLowerCase = products.filter((product) => {
    return product.title.toLowerCase().includes(searchItem.toLowerCase());
  });
  const filterThroughUpperCase = products.filter((product) => {
    return product.title.toUpperCase().includes(searchItem.toUpperCase());
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(filterThroughLowerCase);
    setFilteredProducts(filterThroughUpperCase);
  }, [searchItem, products]);

  const pagination = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= products.length / 5 &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <span className="logo-text">Karan</span>
          <span className="yellow-circle">
            <i class="fa-solid fa-circle"></i>
          </span>
        </div>
        <div>
          <input
            className="input_style"
            type="search"
            placeholder="Search Products..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
      <div className="product-list">
        {/* Pagination and Filter using Map  */}
        {filteredProducts.slice(page * 6 - 6, page * 6).map((product) => {
          return (
            <>
              <div className="product-card" key={product.id}>
                <div className="img-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <p className="price">Price: ${product.price}</p>
              </div>
            </>
          );
        })}
      </div>

      {/* Pagination Button  */}

      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / 6) }).map((_, i) => {
          return (
            <button
              key={i + 1}
              onClick={() => pagination(i + 1)}
              className={`number ${page === i + 1 ? "selected_page" : ""}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
