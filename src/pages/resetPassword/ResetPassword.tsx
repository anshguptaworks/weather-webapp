import Button from 'components/button'
import Input from 'components/input'
import OnBoardingLayout from 'components/onBoardingLayout'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <OnBoardingLayout>
        <div className="flex justify-center items-center flex-col gap-2">
          <Input type="text" placeholder="Enter your email" label="Email" />
          <Button isFullWidth buttonType="submit" className="mt-4" onClick={() => {}}>
            Continue
          </Button>
        </div>
      </OnBoardingLayout>
    </div>
  )
}

export default ForgotPassword
