import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from '@/i18n';
import Image from 'next/image'
import logo from '@assets/logo.png'

export default function Footer() {
    const translation = useTranslations('Header');

    return (
        <footer className={`${styles.container}`}>
            <Link href="/">
                <Image alt='SGI' src={logo} width={50} height={33} />
            </Link>
            <nav className={`${styles.nav}`}>
                <Link href="/info">{translation('informations')}</Link>
                <Link href="/eventos">{translation('previous-events')}</Link>
                <Link href="/inscricoes">{translation('register')}</Link>
                <Link href="/sobre">{translation('about')}</Link>
            </nav>
            <div className={`${styles.social}`}>
                <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/' target='_blank' />
                <a className={`${styles.facebook}`} href='https://www.facebook.com/SwingDeGarotos' target='_blank' />
            </div>
        </footer>
    )
}
