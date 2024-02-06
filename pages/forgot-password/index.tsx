import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ForgotPasswordPage = dynamic(() => import('../../src/pages/forgotPassword'), { ssr: false })

const ForgotPassword: NextPage = (): JSX.Element => {
  return <ForgotPasswordPage />
}

export default ForgotPassword
