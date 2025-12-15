import { getTheme } from '@/lib/api/prismaService'
import '@/styles/globals.css'
import { Viewport } from 'next'
import { Inter, Lexend, Lora } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '700'],
})
const lora = Lora({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-lora',
})

export async function generateMetadata() {
  const theme = await getTheme()
  const ogImage = theme?.openGraphImage
    ? {
        url: theme.openGraphImage,
      }
    : {
        url: '/opengraph-image.png',
      }
  const faviconUrl = theme?.favIcon ? theme.favIcon : '/favicon.svg'

  if (!theme) {
    return {
      title: 'Klimadashboard',
      icons: faviconUrl,
      openGraph: {
        images: [ogImage],
      },
    }
  }

  return {
    title: theme.title,
    icons: faviconUrl,
    openGraph: {
      images: [ogImage],
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16,
      )}`
    : null
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = await getTheme()

  let style: React.CSSProperties = {}

  if (theme) {
    style = {
      '--color-primary': hexToRgb(theme.primary),
      '--color-primary-light': hexToRgb(theme.primaryLight),
      '--color-secondary': hexToRgb(theme.secondary),
      '--color-secondary-light': hexToRgb(theme.secondaryLight),
      '--color-climate': hexToRgb(theme.climate),
      '--color-climate-light': hexToRgb(theme.climateLight),
      '--color-mobility': hexToRgb(theme.mobility),
      '--color-mobility-light': hexToRgb(theme.mobilityLight),
      '--color-energy': hexToRgb(theme.energy),
      '--color-energy-light': hexToRgb(theme.energyLight),
      '--color-buildings': hexToRgb(theme.buildings),
      '--color-buildings-light': hexToRgb(theme.buildingsLight),
      '--border-radius-md': `${
        theme.borderRadius * 12 * (theme.borderRadius / 3)
      }px`,
      '--border-radius-lg': `${
        theme.borderRadius * 17.3 * (theme.borderRadius / 3)
      }px`,
    } as React.CSSProperties
  }

  return (
    <html
      className={`${inter.variable} ${lexend.variable} ${lora.variable}`}
      lang="de"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={style}>
        {children}
        {/* <Cookies /> */}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          src="https://www.wiesbaden.de/resources/iframeResizer.js/iframeResizer.contentWindow.min.js"
          type="text/javascript"
        />
      </body>
    </html>
  )
}
