import './globals.css'

export default function RootLayout({
  children,
***REMOVED***: {
  children: React.ReactNode
***REMOVED***) {
  return (
    <html lang="en">
***REMOVED***/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */***REMOVED***
      <head />
      <body>{children***REMOVED***</body>
    </html>
  )
***REMOVED***
