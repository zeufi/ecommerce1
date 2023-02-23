import axios from "axios";
export const uploadImages = async (formData) => {
  const { data } = await axios.post("https://ecommerce1-dmi7.onrender.com/api/cloudinary", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return data;
};
