import { Header, Footer } from '@components'
import styles from './style.module.css'

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h1>Em breve!</h1>
            </main>
            <Footer />
        </>
    );
}