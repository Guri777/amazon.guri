import { baseAPI } from "./baseAPI";
export const forpagination = async ({ query= "", id= "" }) => {
  const res = await baseAPI.get(`/api/product/products?${query}`);
  if (query) {
    return {
      data: res.data,
      id,
    };
  }
  return res.data;
};