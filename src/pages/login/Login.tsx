import Button from 'components/button'
import { ButtonVariant } from 'components/button/button.types'
import Input from 'components/input'
import OnBoardingLayout from 'components/onBoardingLayout'
import { ROUTES } from 'constants/routes'
import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {
  const { push } = useRouter()

  const handleSignUp = () => {
    push(ROUTES.SIGN_UP)
  }

  const handleForgotPassword = () => {
    push(ROUTES.FORGOT_PASSWORD)
  }

  return (
    <div>
      <OnBoardingLayout
        subTitle="Do not have an account?"
        subTitleLink="Create an account"
        OnSubTitleLinkHandler={handleSignUp}
      >
        <div className="flex justify-center items-center flex-col gap-2">
          <Input type="text" placeholder="Enter your email" label="Email" />
          <Input type="password" placeholder="Enter your password" label="Password" />
          <Button isFullWidth buttonType="submit" className="mt-4" onClick={() => {}}>
            Login
          </Button>
        </div>
        <div>
          <Button
            isFullWidth
            buttonType="button"
            variant={ButtonVariant.Tertiary}
            onClick={handleForgotPassword}
          >
            Forgot Password
          </Button>
        </div>
      </OnBoardingLayout>
    </div>
  )
}

export default Login
