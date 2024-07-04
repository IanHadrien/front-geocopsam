import axios from 'axios'

const baseAddress = 'http://localhost:3333'
const controller = 'cultivations'

const CultivationsApi = {
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
  Add: async (newCultivation) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newCultivation,
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
  Edit: async (editCultivation) => {
    try {
      const responseData = await axios.put(`${baseAddress}/${controller}/${editCultivation.id}`, editCultivation,
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
  Delete: async (deleteCultivation) =>
		axios.delete(`${baseAddress}/${controller}/${deleteCultivation.id}`, {
			withCredentials: true,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}),
}

export default CultivationsApi