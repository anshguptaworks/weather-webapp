import axios from 'axios'
import { WeatherDataProps, WeatherDataResponse } from './getWeatherDetails.types'

export const getWeatherByCity = async ({
  lat,
  lon
}: WeatherDataProps): Promise<WeatherDataResponse> => {
  const apiKey = 'e941e728165c2402525fe40a519477b6'
  const response = await axios.get<WeatherDataResponse>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
  return response.data
}
