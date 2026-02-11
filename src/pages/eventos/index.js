import { Header, Footer } from '@components'
import styles from './style.module.css'

import { useTranslations } from '@/i18n';

export default function EventosPage() {
    const translation = useTranslations('EventosPage');
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h1>{translation('comming-soon')}</h1>
            </main>
            <Footer />
        </>
    );
}