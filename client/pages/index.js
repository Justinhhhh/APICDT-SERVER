import Head from 'next/head'
import Header from '../components/header'
import Timelines from '../components/Timelines'
import { Ma_Shan_Zheng } from '@next/font/google'
import logo from '../public/logo.png'

const MaShanZheng = Ma_Shan_Zheng({
    weight: '400',
    subsets: ['latin'],
    size: '500'
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Header image={logo} font={MaShanZheng} title="第十一届亚太辩论比赛"/>
          <Timelines bgColor= "yellow"/>
      </main>
    </div>
  )
}
