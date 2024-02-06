import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Splash = dynamic(() => import('../src/pages/splash'), { ssr: false })

const Home: NextPage = (): JSX.Element => {
  return <Splash />
}

export default Home
