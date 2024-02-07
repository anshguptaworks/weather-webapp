import axios from 'axios'
import { GeoCoordinatesProps, GeoCoordinatesResponse } from './types'

export const getGeoCoordinates = async ({
  address
}: GeoCoordinatesProps): Promise<GeoCoordinatesResponse[]> => {
  const apiKey = '65c322331116f196705012jow098ea1'
  const response = await axios.get<GeoCoordinatesResponse[]>(
    `https://geocode.maps.co/search?q=${address}&api_key=${apiKey}`
  )
  return response.data
}
