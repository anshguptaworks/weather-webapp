import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ResetPasswordPage2 = dynamic(() => import('../../src/pages/resetPassword'), { ssr: false })

const ResetPassword: NextPage = (): JSX.Element => {
  return <ResetPasswordPage2 />
}

export default ResetPassword
