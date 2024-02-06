import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const SignUpPage = dynamic(() => import('../../src/pages/signUp'), { ssr: false })

const SignUp: NextPage = (): JSX.Element => {
  return <SignUpPage />
}

export default SignUp
