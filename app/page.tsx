import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container***REMOVED***>
      <main className={styles.main***REMOVED***>
        <h1 className={styles.title***REMOVED***>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description***REMOVED***>
          Get started by editing{' '***REMOVED***
          <code className={styles.code***REMOVED***>app/page.tsx</code>
        </p>

        <div className={styles.grid***REMOVED***>
          <a href="https://beta.nextjs.org/docs" className={styles.card***REMOVED***>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card***REMOVED***
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card***REMOVED***
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer***REMOVED***>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '***REMOVED***
          <span className={styles.logo***REMOVED***>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72***REMOVED*** height={16***REMOVED*** />
          </span>
        </a>
      </footer>
    </div>
  )
***REMOVED***
