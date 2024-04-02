import axios from 'axios'
const url = 'http://192.168.1.217:13000/'
const path = 'api/check_in_out'

export default defineEventHandler(async (event) => {
  try {
    // Get current date
    const currentDate = new Date()
    // Set hours to 8
    currentDate.setHours(8)
    // Set minutes to a random value between 27 and 30
    currentDate.setMinutes(27 + Math.floor(Math.random() * 4))
    // Set seconds to a random value between 0 and 59
    currentDate.setSeconds(Math.floor(Math.random() * 60))
    const body = await readBody(event)

    const response = await axios.post(
      `${url}${path}:create`,
      {
        user: {
          id: 17,
        },
        in: currentDate.toISOString(),
        out: null,
        createdAt: currentDate.toISOString(),
        updatedAt: currentDate.toISOString(),
        createdById: null,
        updatedById: null,
        working_hours: null,
      },
      {
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
      },
    )
    return {
      code: 200,
      data: response.data.data,
    }
  } catch (error) {
    return {
      code: 501,
      message: 'UNKNOWN',
      error,
    }
  }
})
