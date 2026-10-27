import { getT } from '@/lib/i18n/server'
import ClimateTile from '../ClimateTile'
import NoiseContent from './NoiseContent'

export default async function NoiseTile() {
  const t = await getT()
  return (
    <ClimateTile
      dataSource="LärmLupe Heilbronn · opensensemap.org"
      embedId="climate-noise"
      live
      subtitle={t('tiles.climate.noise.subtitle')}
      title={t('tiles.climate.noise.title')}
    >
      <NoiseContent />
    </ClimateTile>
  )
}
