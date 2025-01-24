'use client'

import { Button ***REMOVED*** from '@/components/Elements/Button'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { animated, useTransition ***REMOVED*** from '@react-spring/web'
import { useState ***REMOVED*** from 'react'
import { BaseTile ***REMOVED*** from '../Base/BaseTile'
import SurveyAnswer, { SurveyAnswerProps ***REMOVED*** from './Answer'

export type SurveyTileProps = {
  title: string
  question: string
  answer: SurveyAnswerProps
  dataSource: string
  dataRetrieval: Date
  id: string
***REMOVED***
export default function SurveyTile({
  question,
  answer,
  id,
  dataSource,
  dataRetrieval,
  title,
***REMOVED***: SurveyTileProps) {
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
          <span className="font-semibold">Befragungsergebnisse:</span> {title***REMOVED***
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
              // @ts-ignore
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
      <Spacer />
***REMOVED***/* <div className="flex space-x-2 text-xs">
        <Title as="h7" font="semibold" variant={'inverse'***REMOVED***>
          Datenstand: {new Date(dataRetrieval).getFullYear()***REMOVED***
        </Title>
        <Title as="h7" font="normal" variant={'inverse'***REMOVED***>
          Quelle: {dataSource***REMOVED***
        </Title>
      </div> */***REMOVED***
    </BaseTile>
  )
***REMOVED***
