import SearchBar from 'components/searchBar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Typography from 'components/typography'
import Card from 'components/card'
import { getIcons } from 'assets'
import { IconsType } from 'assets/types'
import Divider from 'components/divider'
import { getGeoCoordinates } from 'api/GeoCoordinates/getGeoCoordinates'
import { getWeatherByCity } from 'api/getWeatherDetails'
import { useQuery } from '@tanstack/react-query'
import Table from 'components/table/Table'

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [address, setAddress] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDay = (date: any) => {
    const options = { weekday: 'long' }
    return date.toLocaleDateString('en-US', options)
  }

  const formatTime = (date: any) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return date.toLocaleTimeString('en-US', options)
  }

  const handleSearch = (searchValue: string) => {
    setAddress(searchValue)
  }
  const { data: geoData, isSuccess: geoSuccess } = useQuery({
    queryKey: ['geoLocation', address],
    queryFn: () => getGeoCoordinates({ address }),
    enabled: !!address,
    select: (response) => response[0]
  })

  const { data: weatherData } = useQuery({
    queryKey: ['weather', { lat: geoData?.lat, lon: geoData?.lon }],
    queryFn: () =>
      getWeatherByCity({ lat: geoData?.lat || 22.719568, lon: geoData?.lon || 75.857727 }),
    enabled: !!geoSuccess
  })

  const convertKelvinToCelsius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(0)
  }

  const extractCityName = (displayName: string) => {
    return displayName.split(',')[0]
  }

  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col">
      <div className="flex justify-between items-center mx-6 py-3 mb-6">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            width={32}
            height={32}
            className="hover:animate-pulse transition-opacity"
          />
          <Typography size={16} fontWeight={600} className="md:text-3xl">
            Alpaago
          </Typography>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Card className="!md:w-[1000px] m-auto my-4">
        <div className="flex justify-between items-center">
          <Typography size={16} fontWeight={600}>
            {formatDay(currentDateTime)}
          </Typography>
          <Typography size={16} fontWeight={600}>
            Indian Time Zone : {formatTime(currentDateTime)}
          </Typography>
        </div>
        <div className="relative w-fit">
          <Typography className="mt-4 flex gap-1 items-center w-fit" size={24} fontWeight={700}>
            {geoData ? extractCityName(geoData.display_name) : 'Indore'}
          </Typography>
          <div className="absolute top-0 -right-8">{getIcons(IconsType.direction)}</div>
        </div>
        <Typography className="text-center mt-8" size={96} fontWeight={800}>
          {weatherData?.main.temp ? convertKelvinToCelsius(weatherData.main.temp) : '24'}
        </Typography>
        <Typography className="text-end pr-4" size={24} fontWeight={700}>
          {weatherData?.weather[0].description || 'Clear'}
        </Typography>
        <div className="flex justify-center items-center mt-8">
          <Divider className="mr-2" />
          <div>
            {weatherData?.weather[0].icon ? getIcons(IconsType.sun) : getIcons(IconsType.moon)}
          </div>
          <Divider className="ml-2" />
        </div>

        <div className="flex justify-center items-center gap-5 mt-2">
          <Typography size={18} fontWeight={600}>
            H: {weatherData?.main.temp ? convertKelvinToCelsius(weatherData.main.temp_max) : '28'}
          </Typography>
          <Typography size={18} fontWeight={600}>
            L: {weatherData?.main.temp ? convertKelvinToCelsius(weatherData.main.temp_min) : '28'}
          </Typography>
        </div>
      </Card>
      <div className="mx-8 my-4">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard
