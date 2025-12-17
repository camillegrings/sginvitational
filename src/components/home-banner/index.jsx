"use client"
import styles from './style.module.css'
import Image from 'next/image'
import logo2026 from '@assets/logo2026.png'
import bannerFull from '@assets/banner-full.png'
import bannerMobile from '@assets/banner2.png'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';

export default function HomeBanner() {
    function scrollToSection() {
        const el = document.getElementById('countdown')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1
        });

        const btn = `.${styles.scrollDown}`;

        tl.to(btn, { y: -14, duration: 0.18, ease: "power2.out" })
            .to(btn, { y: 0, duration: 0.18, ease: "power2.in" })
            .to(btn, { y: -14, duration: 0.18, ease: "power2.out" })
            .to(btn, { y: 0, duration: 0.18, ease: "power2.in" })
            .to(btn, { y: -14, duration: 0.18, ease: "power2.out" })
            .to(btn, { y: 0, duration: 0.28, ease: "power2.out" });

        gsap.from(`.${styles.logo}`, { y: 70, opacity: 0, duration: 1 });
    });

    return (
        <section className={`${styles.container}`}>
            <Image alt='SGI 2026' src={logo2026} width={513} height={216} className={`${styles.logo} gs_reveal`} data-speed="clamp(1.2)" />
            <Image alt='' src={bannerFull} width={811} height={325} className={`${styles.bannerDesktop} `} data-speed="0.6" />
            <Image alt='' src={bannerMobile} width={431} height={300} className={`${styles.bannerMobile}`} />
            <button className={`${styles.scrollDown}`} onClick={scrollToSection} />
            <span className={`${styles.dividor}`}></span>
        </section>
    );
}
