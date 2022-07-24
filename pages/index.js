import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodie</title>
        <meta name="foodshop" content="Best foods in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured/>
      <PizzaList/>
      {/* <Footer/> */}
    </div>
  )
}
