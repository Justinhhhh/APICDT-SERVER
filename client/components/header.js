import styles from '../styles/header.module.css'
import Image from 'next/image'

function Header({ image, font, title }) {
    return (
        <div className={`${font.className} ${styles.container}`}>
            <div className={styles.header}>
                <Image alt={title} src={image} width={200}></Image>
                <div>{title}</div>
            </div>
        </div>
    );
}

export default Header;