import { Button ***REMOVED*** from '@/components/Elements/Button'
import { Spacer ***REMOVED*** from '@/components/Elements/Spacer'
import { Spinner ***REMOVED*** from '@/components/Elements/Spinner'
import { BaseTile ***REMOVED*** from '@/components/Tiles/BaseTile'
import SuccessStoryTile from '@/components/Tiles/SuccessStoryTile'

export default function Home() {
  return (
    <div>
      <Button>Hello World</Button>
      <Spacer />
      <Spinner />
      <Spacer />
      <BaseTile>
        <h1 className="text-6xl font-bold text-green-500">Hello World</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          cumque repellat officia sunt quibusdam ut, hic eaque quo! Expedita
          porro magni beatae ad veritatis explicabo numquam quidem nisi eius!
          Nihil.
        </div>
      </BaseTile>
      <Spacer size="lg" />
      <BaseTile
        startImage={
          <img src="https://www.stadt-muenster.de/fileadmin/user_upload/stadt-muenster/obm/pics/vorschau-lewe-lambertikirchplatz-m.jpg" />
      ***REMOVED***
      >
        <h1 className="text-6xl font-bold text-green-500">Hello World</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          cumque repellat officia sunt quibusdam ut, hic eaque quo! Expedita
          porro magni beatae ad veritatis explicabo numquam quidem nisi eius!
          Nihil.
        </div>
      </BaseTile>
      <Spacer size="lg" />
      <SuccessStoryTile
        endImage={
          <img src="https://www.stadt-muenster.de/fileadmin/user_upload/stadt-muenster/obm/pics/vorschau-lewe-lambertikirchplatz-m.jpg" />
      ***REMOVED***
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          cumque repellat officia sunt quibusdam ut, hic eaque quo! Expedita
          porro magni beatae ad veritatis explicabo numquam quidem nisi eius!
          Nihil.
        </div>
      </SuccessStoryTile>
    </div>
  )
***REMOVED***
