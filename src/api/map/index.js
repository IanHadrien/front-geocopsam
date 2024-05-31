import axios from 'axios'

const baseAddress = 'http://localhost:3333'
const controller = 'map'

const MapsApi = {
  GetMap: async () => {
    try {
      const responseData = await axios.get(`${baseAddress}/${controller}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      return responseData
    } catch (error) {
      throw error.response.data
    }
  },
  GetMapId: async (id) => {
    try {
      const responseData = await axios.get(`${baseAddress}/${controller}/${id}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      return responseData
    } catch (error) {
      throw error.response.data
    }
  }
}

export default MapsApi