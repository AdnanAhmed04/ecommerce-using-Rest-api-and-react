const BASE_URL = "https://fakestoreapi.com";

export const fetchcategories = async () => {
  const res_categories = await fetch(`${BASE_URL}/products/categories`);
  return res.json
  console.log(res_categories)();
};

export const fetchcategoriesById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};
