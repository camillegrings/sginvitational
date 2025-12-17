import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import Link from 'next/link'

export default function Separator() {
    const translation = useTranslations('HomePage');
    return (
        <section className={`${styles.container}`}>
            <Link className={`${styles.link}`} href="/inscricoes">{translation('register')}</Link>
            <span className={`${styles.dividorBottom}`}></span>
        </section>
    );
};