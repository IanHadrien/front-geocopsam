import axios from 'axios'

const baseAddress = 'http://localhost:3333'
const controller = 'mapped-area'

const MappedAreasApi = {
  GetAll: async (page, pageSize) => {
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
  Add: async (newMappedArea) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newMappedArea,
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
  Edit: async (editMappedArea) => {
    try {
      const responseData = await axios.put(`${baseAddress}/${controller}/${editMappedArea.id}`, editMappedArea,
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
  Delete: async (deleteMappedArea) =>
		axios.delete(`${baseAddress}/${controller}/${deleteMappedArea.id}`, {
			withCredentials: true,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}),
}

export default MappedAreasApi