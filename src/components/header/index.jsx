'use client'

import { useState } from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import { useTranslations } from '@/i18n';
import Image from 'next/image'
import logo from '@assets/logo.png'
import instagram from '@assets/instagram.svg'

export default function Header() {
    const translation = useTranslations('Header');
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className={`${styles.container}`}>
            <div className={`${styles.menuTop}`}>
                <button className={`${styles.mobileMenu}`} onClick={toggleNav}>
                    <div className={`${styles.hamburger} ${isOpen && styles.active}`}>
                        <div className={`${styles.bar} ${styles.top}`}></div>
                        <div className={`${styles.bar} ${styles.middle}`}></div>
                        <div className={`${styles.bar} ${styles.bottom}`}></div>
                    </div>
                </button>
                <Link href="/">
                    <Image alt='SGI' src={logo} width={50} height={33} />
                </Link>
            </div>
            <nav className={`${styles.nav} ${isOpen && styles.open}`}>
                <Link href="/info">{translation('informations')}</Link>
                <Link href="/eventos">{translation('previous-events')}</Link>
                <Link href="/inscricoes">{translation('register')}</Link>
                <Link href="/sobre">{translation('about')}</Link>
                <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/' target='_blank'>
                    <Image alt='' src={instagram} width={20} height={20} className={`${styles.instagramIcon}`} />
                    <span className={`${styles.instagramLabel}`}>Instagram</span>
                </a>
            </nav>
        </header>
    );
}
