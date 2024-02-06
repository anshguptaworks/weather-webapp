import SearchBar from 'components/searchBar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Typography from 'components/typography'
import Card from 'components/card'

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDayTime = (date: any) => {
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return date.toLocaleTimeString('en-US', options)
  }
  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col">
      <div className="flex justify-between items-center mx-6 py-3 mb-6">
        <div className="flex justify-center items-center gap-2">
          <Image src={Logo} alt="logo" width={32} height={32} />
          <Typography size={16} fontWeight={600} className="md:text-3xl">
            Alpaago
          </Typography>
        </div>
        <SearchBar />
      </div>
      <Card className="mx-4">
        <Card className="!w-[200px]">
          <div>Day</div>
          <div>{formatDayTime(currentDateTime)}</div>
        </Card>
      </Card>
    </div>
  )
}

export default Dashboard
