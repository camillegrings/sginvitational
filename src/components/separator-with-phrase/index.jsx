import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import Link from 'next/link'

export default function SeparatorWithPhrase() {
    const translation = useTranslations('HomePage');
    return (
        <section className={`${styles.container}`}>
            <p>{translation('buy-now')}</p>
            <Link className={`${styles.link}`} href="/inscricoes">{translation('register')}</Link>
        </section>
    );
};