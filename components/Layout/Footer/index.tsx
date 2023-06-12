import Link from 'next/link'
import StairStepBackground from '../StairStepBackground'
import Script from 'next/script'
import Title from '@/components/Elements/Title'
import Container from '../Container'
import Image from 'next/image'

import SmartCityMSLogo from '@/assets/logos/smart_city_ms.png'
import MuensterKlima2030 from '@/assets/logos/muenter_unser_klima_2030.png'
import StadtwerkeLogo from '@/assets/logos/Stadtwerke_Muenster_Logo.png'
import BMWSBLogo from '@/assets/logos/BMWSB.png'
import KFW from '@/assets/logos/kfw.png'

export default function Footer() {
  return (
    <StairStepBackground>
      <Script id="linkTo_UnCryptMailto">
  ***REMOVED***`function UnCryptMailto( s )
    ***REMOVED***
            var n = 0;
            var r = "";
            for( var i = 0; i < s.length; i++)
      ***REMOVED***
                n = s.charCodeAt( i );
                if( n >= 8364 )
          ***REMOVED***
                    n = 128;
              ***REMOVED***
                r += String.fromCharCode( n - 1 );
          ***REMOVED***
            return r;
      ***REMOVED***

        function linkTo_UnCryptMailto( s )
  ***REMOVED***
            location.href=UnCryptMailto( s );
      ***REMOVED***
      `***REMOVED***
      </Script>
      <Container>
        <div className="items-top flex w-full flex-col justify-around pb-10 lg:flex-row lg:gap-20 xl:pb-20 2xl:gap-44">
          <div className="flex-1">
            <Title as={'h4'***REMOVED*** className="py-10 md:py-20">
              Ein Projekt von
            </Title>
            <div className="flex w-full grid-cols-2 flex-col gap-8 lg:gap-16 xl:grid">
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="Stadtwerke Münster Logo"
                  className="object-contain"
                  fill
                  src={SmartCityMSLogo***REMOVED***
                />
              </div>
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="Stadtwerke Münster Logo"
                  className="object-contain"
                  fill
                  src={MuensterKlima2030***REMOVED***
                />
              </div>
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="Stadtwerke Münster Logo"
                  className="object-contain"
                  fill
                  src={StadtwerkeLogo***REMOVED***
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Title as={'h4'***REMOVED*** className="py-10 md:py-20">
              Gefördert durch
            </Title>
            <div className="flex w-full grid-cols-2 flex-col gap-8 lg:gap-16 xl:grid">
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="Stadtwerke Münster Logo"
                  className="object-contain"
                  fill
                  src={BMWSBLogo***REMOVED***
                />
              </div>
              <div className="relative h-28 w-full md:h-36">
                <Image
                  alt="Stadtwerke Münster Logo"
                  className="object-contain"
                  fill
                  src={KFW***REMOVED***
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col sm:hidden 2xl:flex">
            <Title as={'h4'***REMOVED*** className="py-10 opacity-0 md:py-20">
              Impressum
            </Title>
            <div className="flex flex-1 flex-col justify-between gap-8">
              <Link href="/impressum">
                <Title as="h5" className="underline" variant={'primary'***REMOVED***>
                  Impressum
                </Title>
              </Link>
              <Link href="/datenschutz">
                <Title as="h5" className="underline" variant={'primary'***REMOVED***>
                  Datenschutz
                </Title>
              </Link>
        ***REMOVED***/* https://www.math.uni-hamburg.de/it/dienste/encryptma.html */***REMOVED***
              <a href="javascript:linkTo_UnCryptMailto('nbjmup;lmjnbAtubeu.nvfotufs/ef');">
                <Title as="h5" className="underline" variant={'primary'***REMOVED***>
                  Sie haben Feedback für uns?
                </Title>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden justify-between sm:flex 2xl:hidden">
          <Link href="https://www.stadt-muenster.de/impressum">
            <Title as="h5" className="underline" variant={'primary'***REMOVED***>
              Impressum
            </Title>
          </Link>
          <Link href="https://www.stadt-muenster.de/datenschutz">
            <Title as="h5" className="underline" variant={'primary'***REMOVED***>
              Datenschutz
            </Title>
          </Link>
          <a href="javascript:linkTo_UnCryptMailto('nbjmup;lmjnbAtubeu.nvfotufs/ef');">
            <Title as="h5" className="underline" variant={'primary'***REMOVED***>
              Sie haben Feedback für uns?
            </Title>
          </a>
        </div>
      </Container>
    </StairStepBackground>
  )
***REMOVED***
