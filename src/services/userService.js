import axios from "axios";

const URL = "https://67661e5a410f84999656dd8a.mockapi.io/users";


const requestUsers = async () => {
    try {
      const response = await axios.get(URL);
      // console.log(response)
      if(response.status === 200) {
        return response.data; //si va bien retornamos los datos
      }
      throw new Error("Error cargar Usuarios")
    } catch (error) {
      throw error;
    }
  }

const createUser = async (newUser) => {
  try {
    const response = await axios.post(URL, newUser)
    console.log("response ", response);
    return response.data;
  } catch (error) {
    throw error
  }
}
  
  export {
    requestUsers,
    createUser
  }