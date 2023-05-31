import Title from '@/components/Elements/Title'

// @ts-ignore
import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import { format ***REMOVED*** from 'date-fns'
import DataTile from '../DataTile'
import { Masterplan ***REMOVED*** from '@/components/Icons'

export default function DataCountTile() {
  return (
    <DataTile
      dataRetrieval={format(new Date(), 'dd.MM.yyyy')***REMOVED***
      dataSource={'Stadt Münster'***REMOVED***
      embedId={'climate-data'***REMOVED***
      title={
        <>
          <AnimatedNumber className="font-medium">{20***REMOVED***</AnimatedNumber>{' '***REMOVED***
          Datenkacheln
        </>
    ***REMOVED***
    >
      <div>
        <div className="flex flex-row justify-center gap-6">
          <span className="flex flex-col justify-center">
            <Masterplan className="h-20 text-primary md:h-44" />
          </span>
          <Title as={'subtitle'***REMOVED***>
            Können Sie momentan zu den verschiedenen Kategorien auf unserem
            Dashboard finden. Sie haben Daten?{' '***REMOVED***
            <span className="text-secondary">
              <a href="mailto:smartcity@stadt-muenster.de">
                Schreiben Sie uns!
              </a>
            </span>{' '***REMOVED***
          </Title>
        </div>
      </div>
    </DataTile>
  )
***REMOVED***
