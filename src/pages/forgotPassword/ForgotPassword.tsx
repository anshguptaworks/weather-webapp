import Button from 'components/button'
import Input from 'components/input'
import OnBoardingLayout from 'components/onBoardingLayout'
import { ROUTES } from 'constants/routes'
import { useRouter } from 'next/router'
import React from 'react'

const ForgotPassword = () => {
  const { push } = useRouter()

  const handleResetPassword = () => {
    push(ROUTES.RESET_PASSWORD)
  }
  return (
    <div>
      <OnBoardingLayout title="Forgot Password" subTitle="Enter you email to reset your password">
        <div className="flex justify-center items-center flex-col gap-2">
          <Input type="text" placeholder="Enter your email" label="Email" />
          <Button isFullWidth buttonType="submit" className="mt-4" onClick={handleResetPassword}>
            Continue
          </Button>
        </div>
      </OnBoardingLayout>
    </div>
  )
}

export default ForgotPassword
