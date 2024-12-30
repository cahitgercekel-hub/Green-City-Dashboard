'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { animated, AnimatedProps ***REMOVED*** from '@react-spring/web'
import { ComponentPropsWithRef ***REMOVED*** from 'react'

export type SurveyAnswerProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  percent: number
  text: string
***REMOVED***

export default function SurveyAnswer({
  percent,
  text,
  ...props
***REMOVED***: SurveyAnswerProps) {
  return (
    // @ts-ignore
    <animated.div className="absolute left-0 top-0 w-full" style={{ ...props ***REMOVED******REMOVED***>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <Title as="h1" className="whitespace-nowrap">
    ***REMOVED***typeof percent === 'number' ? (
            <AnimatedNumber decimals={1***REMOVED***>{percent***REMOVED***</AnimatedNumber>
      ***REMOVED*** : (
            <span>--</span>
      ***REMOVED******REMOVED***
          <span className="font-normal">%</span>
        </Title>
        <Title as="h4">{text***REMOVED***</Title>
      </div>
    </animated.div>
  )
***REMOVED***
