import axios from "axios";

export const saveCart = async (cart) => {
  try {
    const { data } = await axios.post("https://ecommerce1-dmi7.onrender.com/api/user/saveCart", {
      cart,
    });
    return data;
  } catch (error) {
    return response.data.error.message;
  }
};

export const saveAddress = async (address, userId) => {
  try {
    const { data } = await axios.post("https://ecommerce1-dmi7.onrender.com/api/user/saveAddress", {
      address,
      userId,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const changeActiveAddress = async (id) => {
  try {
    const { data } = await axios.put("https://ecommerce1-dmi7.onrender.com/api/user/manageAddress", {
      id,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const deleteAddress = async (id) => {
  try {
    const { data } = await axios.delete("https://ecommerce1-dmi7.onrender.com/api/user/manageAddress", {
      data: { id },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const applyCoupon = async (coupon) => {
  const { data } = await axios.post("https://ecommerce1-dmi7.onrender.com/api/user/applyCoupon", {
    coupon,
  });
  return data;
};
