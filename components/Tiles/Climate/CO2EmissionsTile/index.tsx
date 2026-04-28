import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import { MsKlimadashboardIconsKCo2 } from '@/components/Icons/Klima'
import getTileData from '@/lib/api/getTileData'
import { format } from 'date-fns'
import { TileSplitView } from '../../Base/TileSplitView'
import ClimateTile from '../ClimateTile'
import CO2EmissionsContent from './CO2EmissionsContent'
import { getT } from '@/lib/i18n/server'

export default async function CO2EmissionsTile() {
  const [data, t] = await Promise.all([getTileData('climate-co2'), getT()])
  const infoText = data?.info ?? ''

  return (
    <ClimateTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadt Münster - Stabsstelle Klima"
      embedId="climate-co2"
      subtitle={t('tiles.climate.co2.subtitle')}
      title={
        <>
          CO<sub>2</sub>
        </>
      }
    >
      <TileSplitView>
        <TileSplitView.Left>
          <CO2EmissionsContent />
        </TileSplitView.Left>
        <TileSplitView.Right>
          <div className="flex flex-col items-center justify-between">
            <Title as="h5" variant={'dark'}>
              {infoText}
            </Title>
            <Spacer />
            <MsKlimadashboardIconsKCo2 className="mx-auto w-40" />
          </div>
        </TileSplitView.Right>
      </TileSplitView>
    </ClimateTile>
  )
}
