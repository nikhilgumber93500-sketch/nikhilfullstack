import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getCategories, saveCategories } from "./categoryStore";

function CategoryManage() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [subParentId, setSubParentId] = useState("");
  const [subName, setSubName] = useState("");
  const [message, setMessage] = useState("");

  const refresh = () => {
    const list = getCategories();
    setCategories(list);
    return list;
  };

  useEffect(() => {
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener("categoriesUpdated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("categoriesUpdated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    const name = categoryName.trim();

    if (!name) {
      alert("Please enter category name");
      return;
    }

    const current = getCategories();
    if (current.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      alert("This category already exists");
      return;
    }

    const newCategory = {
      id: `cat-${Date.now()}`,
      name,
      image: categoryImage.trim() || "/grocery.jpg",
      subcategories: [],
    };

    const next = [...current, newCategory];
    saveCategories(next);
    setCategories(next);
    setCategoryName("");
    setCategoryImage("");
    setSubParentId(newCategory.id);
    showMessage(`Category "${name}" added successfully`);
  };

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    const name = subName.trim();

    if (!subParentId) {
      alert("Please select a category");
      return;
    }

    if (!name) {
      alert("Please enter subcategory name");
      return;
    }

    const current = getCategories();
    const parent = current.find((cat) => String(cat.id) === String(subParentId));

    if (!parent) {
      alert("Selected category not found. Please choose again.");
      return;
    }

    const exists = (parent.subcategories || []).some(
      (sub) => sub.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      alert("This subcategory already exists in selected category");
      return;
    }

    const next = current.map((cat) =>
      String(cat.id) === String(subParentId)
        ? {
            ...cat,
            subcategories: [...(cat.subcategories || []), name],
          }
        : cat
    );

    saveCategories(next);
    setCategories(next);
    setSubName("");
    showMessage(`Subcategory "${name}" added in ${parent.name}`);
  };

  return (
    <div className="cat-add-page">
      <div className="container py-4">
        <div className="cat-add-top">
          <div>
            <h1>Add Category / Subcategory</h1>
            <p className="cat-add-subtitle">
              Category ya subcategory add karo — neeche list mein turant dikhega.
            </p>
          </div>
          <Link to="/categories" className="cat-view-link">
            View Categories
          </Link>
        </div>

        {message && <div className="cat-add-toast">{message}</div>}

        <div className="row g-4">
          <div className="col-md-6">
            <form className="cat-add-card" onSubmit={handleAddCategory}>
              <h2>
                <FaPlus /> Add Category
              </h2>

              <label>Category Name</label>
              <input
                type="text"
                placeholder="e.g. Dairy"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <label>Image Path / URL (optional)</label>
              <input
                type="text"
                placeholder="/dairy.jpg or https://..."
                value={categoryImage}
                onChange={(e) => setCategoryImage(e.target.value)}
              />

              <button type="submit" className="cat-add-btn">
                Add Category
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <form className="cat-add-card" onSubmit={handleAddSubcategory}>
              <h2>
                <FaPlus /> Add Subcategory
              </h2>

              <label>Select Category</label>
              <select
                value={subParentId}
                onChange={(e) => setSubParentId(e.target.value)}
              >
                <option value="">Choose category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <label>Subcategory Name</label>
              <input
                type="text"
                placeholder="e.g. Milk"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
              />

              <button type="submit" className="cat-add-btn">
                Add Subcategory
              </button>
            </form>
          </div>
        </div>

        <div className="cat-add-card cat-result-card">
          <h2>Added Categories ({categories.length})</h2>
          <p className="cat-result-note">
            Yahan add hone ke baad category aur subcategory dono dikhengi.
          </p>

          <div className="cat-result-list">
            {categories.map((cat) => (
              <div className="cat-result-item" key={cat.id}>
                <div className="cat-result-head">
                  <img src={cat.image} alt={cat.name} />
                  <div>
                    <h3>{cat.name}</h3>
                    <span>
                      {(cat.subcategories || []).length} subcategory
                    </span>
                  </div>
                </div>

                <div className="cat-result-subs">
                  {(cat.subcategories || []).length === 0 ? (
                    <span className="cat-no-sub">No subcategory yet</span>
                  ) : (
                    (cat.subcategories || []).map((sub) => (
                      <span className="cat-sub-chip" key={`${cat.id}-${sub}`}>
                        {sub}
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cat-add-page {
          min-height: 70vh;
          background: #f3f6f8;
          padding-bottom: 40px;
        }
        .cat-add-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .cat-add-page h1 {
          margin: 0 0 6px;
          font-size: 30px;
          color: #122018;
        }
        .cat-add-subtitle {
          margin: 0 0 16px;
          color: #66756c;
        }
        .cat-view-link {
          background: #198754;
          color: #fff;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 10px;
          white-space: nowrap;
        }
        .cat-add-toast {
          background: #e8f7ee;
          color: #146c43;
          border: 1px solid #b7e4c7;
          border-radius: 10px;
          padding: 10px 14px;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .cat-add-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(18, 48, 32, 0.06);
        }
        .cat-result-card {
          margin-top: 24px;
        }
        .cat-add-card h2 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          margin: 0 0 16px;
        }
        .cat-result-note {
          margin: -8px 0 16px;
          color: #708078;
          font-size: 14px;
        }
        .cat-add-card label {
          display: block;
          margin: 0 0 6px;
          font-weight: 600;
          color: #24352c;
        }
        .cat-add-card input,
        .cat-add-card select {
          width: 100%;
          margin-bottom: 14px;
          border: 1px solid #d7e4db;
          border-radius: 10px;
          padding: 11px 12px;
          font-size: 15px;
          outline: none;
        }
        .cat-add-card input:focus,
        .cat-add-card select:focus {
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.12);
        }
        .cat-add-btn {
          width: 100%;
          border: none;
          border-radius: 10px;
          background: #198754;
          color: #fff;
          padding: 12px;
          font-size: 15px;
          cursor: pointer;
        }
        .cat-add-btn:hover {
          background: #146c43;
        }
        .cat-result-list {
          display: grid;
          gap: 12px;
        }
        .cat-result-item {
          border: 1px solid #e5eee8;
          border-radius: 12px;
          padding: 14px;
          background: #fafcfa;
        }
        .cat-result-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cat-result-head img {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #e0ebe4;
        }
        .cat-result-head h3 {
          margin: 0 0 4px;
          font-size: 16px;
        }
        .cat-result-head span {
          color: #708078;
          font-size: 13px;
        }
        .cat-result-subs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .cat-no-sub {
          color: #99a79e;
          font-size: 13px;
        }
        .cat-sub-chip {
          background: #e8f3ec;
          color: #146c43;
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 13px;
        }
        @media (max-width: 768px) {
          .cat-add-top {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default CategoryManage;
