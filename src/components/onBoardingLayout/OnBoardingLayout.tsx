import React from 'react'
import Lottie from 'react-lottie'
import NetworkAnime from 'assets/lottie/networkAnime.json'
import Typography from 'components/typography'
import { ROUTES } from 'constants/routes'
import { getIcons } from 'assets'
import { IconsType } from 'assets/types'
import Divider from 'components/divider'
import cx from 'classnames'

interface OnBoardingLayoutProps {
  children: React.ReactNode
  containerClassName?: string
  title?: string
  subTitle?: string
  subTitleLink?: string
  OnSubTitleLinkHandler?: VoidFunction
}

const OnBoardingLayout = ({
  children,
  containerClassName,
  title,
  subTitle,
  subTitleLink,
  OnSubTitleLinkHandler
}: OnBoardingLayoutProps) => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: NetworkAnime
  }

  return (
    <div className="flex justify-center items-center h-screen relative flex-col lg:flex-row">
      <div className="bg-primary100 flex-1 h-screen lg:flex justify-center items-center flex-col gap-12 hidden">
        <Typography className="text-white" size={24} fontWeight={400}>
          Discover a World of Flavors
        </Typography>
        <Lottie options={defaultOptions} width={400} height={400} />
      </div>
      <div className="flex-1 h-screen flex justify-center items-center">
        <div
          style={{
            boxShadow: '0px 0px 80px 0px rgba(34, 3, 73, 0.10)'
          }}
          className={cx(
            'flex justify-between flex-col h-fit lg:w-[500px] w-full mx-5 rounded-xl p-10 z-10 bg-white',
            containerClassName
          )}
        >
          <div>
            <Typography size={20} fontWeight={600}>
              {title || 'Welcome'}
            </Typography>
            <Typography className="mt-2" size={14} fontWeight={500}>
              {subTitle || 'Already have an account?'}

              {subTitleLink && (
                <span
                  onClick={OnSubTitleLinkHandler}
                  className="text-primary ml-2 font-bold cursor-pointer"
                >
                  {subTitleLink}
                </span>
              )}
            </Typography>
          </div>

          <Divider className="!w-10" />
          <div className="h-full w-full">{children}</div>
          <Typography size={12} fontWeight={500} className="mt-4">
            By signing up, I agree to Alpaago{' '}
            <a
              href={ROUTES.TERMS_CONDITIONS}
              target="_blank"
              className="text-primary50 font-bold cursor-pointer"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href={ROUTES.PRIVACY_POLICY}
              target="_blank"
              className="text-primary50 font-bold cursor-pointer"
            >
              Privacy Policy
            </a>
            .
          </Typography>
        </div>
        <div className="absolute bottom-0 right-0 -z-10">
          {getIcons(IconsType.onBoardingCornerSvg)}
        </div>
      </div>
    </div>
  )
}

export default OnBoardingLayout
