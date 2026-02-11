import styles from './style.module.css'

import { RegisterForm, Header, Footer } from '@components'
import { ToastContainer } from 'react-toastify';
import { rascals } from '@fonts'
import { useTranslations } from '@/i18n';

export default function InscricoesPage() {
    const translation = useTranslations('RegisterPage');
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h1 className={`${styles.title} ${rascals.className}`}>{translation('title')}</h1>
                <RegisterForm />
                <ToastContainer />
            </main>
            <Footer />
        </>
    );
}