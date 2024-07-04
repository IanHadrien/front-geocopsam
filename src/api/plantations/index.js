import axios from 'axios'

const baseAddress = 'http://localhost:3333'
const controller = 'plantations'

const PlantationsApi = {
  GetAll: async (page=1, pageSize=15) => {
    try {
      const responseData = await axios.get(`${baseAddress}/${controller}?page=${page}&pageSize=${pageSize}`,
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
  Add: async (newPlantation) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newPlantation,
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
  Edit: async (editPlantation) => {
    try {
      const responseData = await axios.put(`${baseAddress}/${controller}/${editPlantation.id}`, editPlantation,
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
      console.error(error)
      throw error.response.data
    }
  },
  Delete: async (deleteditPlantation) =>
		axios.delete(`${baseAddress}/${controller}/${deleteditPlantation.id}`, {
			withCredentials: true,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}),
}

export default PlantationsApi