import axios from "axios"

const baseAddress = 'http://localhost:3333'
const controller = 'cultivations'

const CultivationsApi = {
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
  Add: async (newCultivation) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newCultivation,
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

export default CultivationsApi