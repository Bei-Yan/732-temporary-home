import Head from 'next/head'
import SearchBar from '../components/index/SearchBar'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className={styles.centerDiv}>
          <SearchBar />
        </div>
      </main>
    </>
  )
}

