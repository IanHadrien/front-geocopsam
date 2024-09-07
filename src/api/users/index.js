import axios from 'axios'

const baseAddress = 'http://localhost:3333'
const controller = 'users'

const UsersApi = {
  Login: async (user) => {
    try {
      const responseData = await axios.post(`${baseAddress}/login`, user,
        {
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
  GetMe: async () => {
    try {
      const responseData = await axios.get(`${baseAddress}/me`,
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
  GetAll: async (page=1, pageSize) => {
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
  Add: async (newUser) => {
    try {
      const responseData = await axios.post(`${baseAddress}/${controller}`, newUser,
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
  Edit: async (editUser) => {
    try {
      const responseData = await axios.put(`${baseAddress}/${controller}/${editUser.id}`, editUser,
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
  Delete: async (deleteUser) =>
		axios.delete(`${baseAddress}/${controller}/${deleteUser.id}`, {
			withCredentials: true,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}),
}

export default UsersApi