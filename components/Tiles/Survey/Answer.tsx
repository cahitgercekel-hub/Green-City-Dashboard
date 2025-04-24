'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { animated, AnimatedProps } from '@react-spring/web'
import { ComponentPropsWithRef } from 'react'

export type SurveyAnswerProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  percent: number
  text: string
}

export default function SurveyAnswer({ percent, text }: SurveyAnswerProps) {
  return (
    <div className="flex w-full gap-4 md:flex-row">
      <Title as="h1" className="flex-[2_2_0%] whitespace-nowrap">
        {typeof percent === 'number' ? (
          <AnimatedNumber decimals={1}>{percent}</AnimatedNumber>
        ) : (
          <span>--</span>
        )}
        <span className="font-normal">%</span>
      </Title>

      <Title as="h4" className="flex-[3_3_0%]">
        {text}
      </Title>
    </div>
  )
}
