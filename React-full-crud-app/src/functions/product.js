import axios from "axios";

export const createProduct = async (product) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
   
  });

export const getProductsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/products/${count}`);

export const removeProduct = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`, {
   
  });

export const getProduct = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);

export const updateProduct = async (slug, product) =>
  await axios.put(`${process.env.REACT_APP_API}/product/${slug}`, product, {
  
  });


// export const getProducts = async (sort, order, page) =>
//   await axios.post(`${process.env.REACT_APP_API}/products`, {
//     sort,
//     order,
//     page,
//   });

// export const getProductsCount = async () =>
//   await axios.get(`${process.env.REACT_APP_API}/products/total`);

// export const productStar = async (productId, star) =>
//   await axios.put(
//     `${process.env.REACT_APP_API}/product/star/${productId}`,
//     { star },
//     {
//       // headers: {
//       //   authtoken,
//       // },
//     }
//   );

// export const getRelated = async (productId) =>
//   await axios.get(`${process.env.REACT_APP_API}/product/related/${productId}`);

// export const fetchProductsByFilter = async (arg) =>
//   await axios.post(`${process.env.REACT_APP_API}/search/filters`, arg);
