const BASE_URL = "https://fakestoreapi.com";

// uper main link hai


export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};
// uper fetch karahee hai link se dataa /products ka 
// jo / kay baad hogaa wo pagee ka nam ya jo specific cheez hooo
// ac ko hum end point kahtay hai
// ac may puray puray object hotaay hai like json may 

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

// perr jab data ajataa hai tou perr uss ko open kartay hai takay uss kay attribute nikal lay 



