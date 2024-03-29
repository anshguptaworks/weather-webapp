export interface GeoCoordinatesProps {
  address: string
}

export interface GeoCoordinatesResponse {
  boundingbox: string[]
  class: string
  display_name: string
  importance: number
  lat: string
  licence: string
  lon: string
  osm_id: number
  osm_type: string
  place_id: number
  type: string
}
