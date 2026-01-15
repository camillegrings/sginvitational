import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import { rascals, balmy } from '@fonts'
import Image from 'next/image'
import depoEli from '@assets/eli.png'
import depoPeixoto from '@assets/peixoto.png'
import depoJoao from '@assets/joao.png'
import depoKessi from '@assets/kessi.png'
import Link from 'next/link'

export default function Testimony() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <h4 className={`${styles.subtitle} ${rascals.className}`}>DEPOIMENTOS</h4>
            <h3 className={`${styles.title} ${balmy.className}`}>O que dizem sobre o evento?</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles.card}`}>
                    <div>

                        <p className={`${styles.cardName} ${balmy.className}`}>Kessi</p>
                        <Image alt='' src={depoKessi} width={120} height={120} className={`${styles.cardImage}`} />
                    </div>
                    <p>
                        &quot;Um momento de reencontro, com os amigos, com a dança, com a bagunça gostosa e a galera divertida e querida! Esse evento veio pra complementar e unir tudo de melhor num só lugar 🤍
                        Parabéns aos organizadores por nos proporcionar essa experiência única e que cada ano só melhora e faz a gente ter mais vontade de participar 🥰.&quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>Peixoto</p>
                        <Image alt='' src={depoPeixoto} width={120} height={120} className={`${styles.cardImage}`} />

                    </div>
                    <p>
                        &quot;O Evento foi muito massa! Músicas legais, aulas legais, bailes incríveis, um pessoal super da hora de dançar e socializar!
                        Organização muito bacana... valeu super a pena! ❤️
                        &quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>João</p>
                        <Image alt='' src={depoJoao} width={120} height={120} className={`${styles.cardImage}`} />

                    </div>
                    <p>
                        &quot;Você está atrás de um evento com pompa e gala? Procure em outro lugar.
                        O negócio aqui é arriação, é se divertir muito! Seja com muita dança ao som de ótimas músicas (é West, afinal, né? e os DJs mandam muito!!!), como principalmente trocando uma energia com uma galera super animada! As expectativas já foram criadas e moram sozinhas para o próximo.
                        &quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>Eli</p>
                        <Image alt='' src={depoEli} width={120} height={120} className={`${styles.cardImage}`} />

                    </div>
                    <p>
                        &quot;Aqui fala uma argentina que ficou muito feliz, e teve uma experiência maravilhosa no SGI.
                        Adorei as aulas, a diversão e a gentileza de todos conosco, principalmente por ser nossa primeira vez na comunidade!&quot;
                    </p>

                </div>
            </div>
            <Link className={`${styles.link}`} href="/eventos">{translation('know-more')}</Link>
        </div>
    );
};