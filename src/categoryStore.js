export const DEFAULT_CATEGORIES = [
  {
    id: "cat-grocery",
    name: "Grocery",
    image: "/grocery.jpg",
    subcategories: ["Atta & Flour", "Rice & Pulses", "Oil & Ghee"],
  },
  {
    id: "cat-beverages",
    name: "Beverages",
    image: "/beverages.jpg",
    subcategories: ["Tea", "Coffee", "Juices"],
  },
  {
    id: "cat-personal",
    name: "Personal Care",
    image: "/personal care.jpg",
    subcategories: ["Soap", "Shampoo", "Oral Care"],
  },
  {
    id: "cat-household",
    name: "Household",
    image: "/household.jpg",
    subcategories: ["Cleaners", "Detergent", "Kitchen"],
  },
  {
    id: "cat-snacks",
    name: "Snacks",
    image: "/snack.jpg",
    subcategories: ["Chips", "Biscuits", "Namkeen"],
  },
  {
    id: "cat-fruits",
    name: "Fruits & Vegetables",
    image: "/fruit and vegetable.jpg",
    subcategories: ["Fruits", "Vegetables"],
  },
  {
    id: "cat-stationery",
    name: "Stationery",
    image: "/stationery.jpg",
    subcategories: ["Pens", "Notebooks", "Files"],
  },
];

function isMedicineCategory(name = "") {
  const n = String(name).toLowerCase().replace(/\s+/g, "");
  // covers Medicine, Medcine (typo), Medical, etc.
  return (
    n.includes("medcin") ||
    n.includes("medicin") ||
    n.includes("medic") ||
    n.includes("medical")
  );
}

function normalizeCategories(list) {
  return (list || [])
    .filter((item) => item && item.name && !isMedicineCategory(item.name))
    .map((item, index) => ({
      id: item.id || `cat-${index}-${item.name || "item"}`,
      name: item.name || "",
      image: item.image || "/grocery.jpg",
      subcategories: Array.isArray(item.subcategories)
        ? item.subcategories.filter((sub) => !isMedicineCategory(sub))
        : [],
    }));
}

export function getCategories() {
  try {
    const saved = JSON.parse(localStorage.getItem("storeCategories") || "null");
    if (Array.isArray(saved) && saved.length > 0) {
      const cleaned = normalizeCategories(saved);

      // Always rewrite storage after removing Medcine/Medicine
      localStorage.setItem("storeCategories", JSON.stringify(cleaned));

      if (cleaned.length > 0) {
        return cleaned;
      }
    }
  } catch {
    // ignore
  }

  // First time / empty after cleanup: use defaults
  localStorage.setItem("storeCategories", JSON.stringify(DEFAULT_CATEGORIES));
  return DEFAULT_CATEGORIES.map((item) => ({ ...item }));
}

export function saveCategories(categories) {
  const cleaned = normalizeCategories(
    (categories || []).map((item, index) => ({
      id: item.id || `cat-${Date.now()}-${index}`,
      name: item.name || "",
      image: item.image || "/grocery.jpg",
      subcategories: Array.isArray(item.subcategories) ? item.subcategories : [],
    }))
  );
  localStorage.setItem("storeCategories", JSON.stringify(cleaned));
  window.dispatchEvent(new Event("categoriesUpdated"));
}

export function getCategoryNames() {
  return getCategories().map((item) => item.name);
}
