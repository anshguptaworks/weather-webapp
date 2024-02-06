import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DashboardPage = dynamic(() => import('../../src/pages/dashboard'), { ssr: false })

const Dashboard: NextPage = (): JSX.Element => {
  return <DashboardPage />
}

export default Dashboard
