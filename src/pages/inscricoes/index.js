import styles from './style.module.css'

import { RegisterForm, Header, Footer } from '@components'
import { ToastContainer } from 'react-toastify';
import { rascals } from '@fonts'

export default function InscricoesPage() {
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h1 className={`${styles.title} ${rascals.className}`}>Formulário de Inscrição</h1>
                <RegisterForm />
                <ToastContainer />
            </main>
            <Footer />
        </>
    );
}