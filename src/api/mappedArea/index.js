import axios from "axios"

const baseAddress = 'http://localhost:3333'
const controller = 'mapped-area'

const MappedAreasApi = {
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
  Add: async (newMappedArea) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newMappedArea,
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

export default MappedAreasApi