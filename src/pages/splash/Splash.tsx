import React, { useCallback } from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Typography from 'components/typography'
import Button from 'components/button'
import { ButtonSize, ButtonVariant } from 'components/button/button.types'
import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'

const Splash = () => {
  const { push } = useRouter()

  const handleLogin = useCallback(() => {
    push(ROUTES.LOGIN)
  }, [push])

  const handleSignup = useCallback(() => {
    push(ROUTES.SIGN_UP)
  }, [push])

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 gap-6 sm:gap-16 h-screen">
      <div className="flex justify-center items-center gap-2">
        <Image
          className="animate-bounce transition-shadow duration-300 ease-in-out transform "
          src={Logo}
          alt="logo"
          width={50}
          height={50}
        />
        <Typography size={32} fontWeight={600}>
          Alpaago
        </Typography>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Typography size={16} fontWeight={700} className="sm:text-4xl">
          Welcome to Alpaago Snack Universe
        </Typography>
        <Typography size={14} fontWeight={500} className="sm:text-3xl sm:mt-0 mt-1">
          Discover a World of Flavors
        </Typography>
        <Typography
          className="max-w-[280px] sm:max-w-[600px] text-center mt-6 text-grey200"
          size={16}
          fontWeight={400}
        >
          Savor the variety with Alpaago Snack Universe! Our curated selection of tasty, hygienic
          snacks is personalized for your palate. Enjoy new flavors daily at great prices, all
          chosen by our unique taste-matching algorithm.
        </Typography>
      </div>

      <div className="flex justify-between items-center sm:gap-6 gap-2 sm:flex-row flex-col">
        <Button
          onClick={handleLogin}
          className="sm:px-28 px-0 w-[260px]"
          buttonType="button"
          size={ButtonSize.Medium}
          variant={ButtonVariant.Primary}
        >
          Login
        </Button>
        <Button
          onClick={handleSignup}
          className="sm:px-28 px-0 w-[260px]"
          buttonType="button"
          size={ButtonSize.Medium}
          variant={ButtonVariant.Primary}
        >
          Signup
        </Button>
      </div>
    </div>
  )
}

export default Splash
