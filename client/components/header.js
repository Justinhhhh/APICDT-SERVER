import { Ma_Shan_Zheng } from '@next/font/google'
import styles from '../styles/header.module.css'
import logo from '../public/logo.png'
import Image from 'next/image'

const MaShanZheng = Ma_Shan_Zheng({
    weight: '400',
    subsets: ['latin'],
    size: '500'
})

function Header() {
    console.log(MaShanZheng.className)
    return (
        <div className={`${MaShanZheng.className} ${styles.container}`}>
            <div className={styles.header}>
                <Image src={logo} width={200}></Image>
                <div>第十一届亚太辩论比赛</div>
            </div>
        </div>
    );
}

export default Header;