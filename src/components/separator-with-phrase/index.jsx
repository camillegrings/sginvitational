import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import Link from 'next/link'
import { balmy } from '@fonts'

export default function SeparatorWithPhrase() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <p className={`${balmy.className}`}>{translation('buy-now')}</p>
            <Link className={`${styles.link}`} href="/inscricoes">{translation('register')}</Link>
        </div>
    );
};