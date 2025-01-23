import axios from "axios";

const URL = "https://67661e5a410f84999656dd8a.mockapi.io/productos";


const requestProducts = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response)
      if(response.status === 200) {
        return response.data; //si va bien retornamos los datos
      }
      throw new Error("Error al solicitar productos")
    } catch (error) {
      throw error;
    }
  }

  const createProduct = async (newProduct) => {
    try {
      const response = await axios.post(URL, newProduct)
      console.log("response ", response);
      return response.data;
    } catch (error) {
      throw error
    }
  }
  
  export {
    requestProducts,
    createProduct
  }