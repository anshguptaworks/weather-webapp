import Button from 'components/button'
import Input from 'components/input'
import OnBoardingLayout from 'components/onBoardingLayout'
import { ROUTES } from 'constants/routes'
import { useRouter } from 'next/router'
import React from 'react'

const SignUp = () => {
  const { push } = useRouter()

  const handleLogin = () => {
    push(ROUTES.LOGIN)
  }

  return (
    <div>
      <OnBoardingLayout subTitleLink="Log in" OnSubTitleLinkHandler={handleLogin}>
        <div className="flex justify-center items-center flex-col gap-2">
          <Input type="text" placeholder="Enter your email" label="Email" />
          <Input type="password" placeholder="Enter your password" label="Password" />
          <Input type="password" placeholder="Enter confirm password" label="Confirm Password" />
          <Button buttonType="submit" className="w-full mt-4" onClick={() => {}}>
            SignUp
          </Button>
        </div>
      </OnBoardingLayout>
    </div>
  )
}

export default SignUp
