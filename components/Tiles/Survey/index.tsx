'use client'

import { Button ***REMOVED*** from '@/components/Elements/Button'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { useState ***REMOVED*** from 'react'
import { animated, useTransition ***REMOVED*** from '@react-spring/web'
import { BaseTile ***REMOVED*** from '../Base/BaseTile'
import SurveyAnswer, { SurveyAnswerProps ***REMOVED*** from './Answer'
import { ID ***REMOVED*** from '@directus/sdk'

export type SurveyTileProps = {
  question: string
  answer: SurveyAnswerProps
  id: string | ID
***REMOVED***
export default function SurveyTile({ question, answer, id ***REMOVED***: SurveyTileProps) {
  const [showAnswer, setShowAnswer] = useState(false)

  const transitions = useTransition(showAnswer, {
    from: { opacity: 0, y: 80 ***REMOVED***,
    enter: { opacity: 1, y: 0 ***REMOVED***,
    leave: { opacity: 0, y: 80 ***REMOVED***,
    initial: { opacity: 0, y: 0 ***REMOVED***,
***REMOVED***)

  const RevealAnswerButton = (
    <Button
      className="transition-all"
      onClick={() => setShowAnswer(!showAnswer)***REMOVED***
      variant={'inverse'***REMOVED***
    >
***REMOVED***showAnswer ? 'zurück zur Frage' : 'Antwort aufdecken'***REMOVED***
    </Button>
  )
  return (
    <BaseTile
      embedId={`survey-${id***REMOVED***`***REMOVED***
      footerCenterElement={RevealAnswerButton***REMOVED***
      variant="secondary"
    >
      <div className="text-white">
        <Title as="h5" font={'normal'***REMOVED*** variant={'inverse'***REMOVED***>
          <span className="font-semibold">Befragungsergebnisse:</span>{' '***REMOVED***
          Bürgerumfrage 2022
        </Title>
        <Spacer />
        <div className="relative h-fit">
          <div className="opacity-0">
            <Title as="h3" variant={'inverse'***REMOVED***>
        ***REMOVED***question***REMOVED***
            </Title>
          </div>
    ***REMOVED***transitions((styles, renderAnswer) =>
            renderAnswer ? (
              <SurveyAnswer {...answer***REMOVED*** {...styles***REMOVED*** />
        ***REMOVED*** : (
              <animated.div
                className="absolute left-0 top-0 h-full w-full"
                style={styles***REMOVED***
              >
                <Title as="h3" variant={'inverse'***REMOVED***>
            ***REMOVED***question***REMOVED***
                </Title>
              </animated.div>
        ***REMOVED***,
      ***REMOVED******REMOVED***
        </div>
      </div>
    </BaseTile>
  )
***REMOVED***
