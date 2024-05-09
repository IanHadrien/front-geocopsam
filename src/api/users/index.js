import axios from "axios"

const baseAddress = 'http://localhost:3333'
const controller = 'users'

const UsersApi = {
  GetAll: async () => {
    try {
      const responseData = await axios.get(`${baseAddress}/${controller}`,
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      return responseData;
    } catch (error) {
      throw error.response.data;
    }
  },
  Add: async (newUser) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newUser,
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      return responseData;
    } catch (error) {
      throw error.response.data;
    }
  },
}

export default UsersApi