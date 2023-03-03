import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/LandingPage.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Application</title>
        <meta name="description" content="App description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3 className={styles.test}>Welcome to NextJS</h3>
      </main>
    </>
  )
}
