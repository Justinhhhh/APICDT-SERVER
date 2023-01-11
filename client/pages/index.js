import Head from 'next/head'
import Header from '../components/header'
import Timelines from '../components/Timelines'
import logo from '../public/Logo2023.jpeg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>亚太辩论</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header image={logo} title="第十一届亚太大专华语辩论公开赛"/>
        <Timelines />
      </div>
    </div>
  )
}
