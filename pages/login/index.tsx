import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const LoginPage = dynamic(() => import('../../src/pages/login'), { ssr: false })

const Login: NextPage = (): JSX.Element => {
  return <LoginPage />
}

export default Login
