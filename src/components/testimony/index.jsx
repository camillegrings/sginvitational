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
            <h4 className={`${styles.subtitle} ${rascals.className}`}>{translation('testimony-title')}</h4>
            <h3 className={`${styles.title} ${balmy.className}`}>{translation('testimony-subtitle')}</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles.card}`}>
                    <div>

                        <p className={`${styles.cardName} ${balmy.className}`}>Kessi</p>
                        <Image alt='' src={depoKessi} width={120} height={120} className={`${styles.cardImage}`} />
                    </div>
                    <p>
                        &quot;{translation('testimony-kessi')} 🥰.&quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>Peixoto</p>
                        <Image alt='' src={depoPeixoto} width={120} height={120} className={`${styles.cardImage}`} />
                    </div>
                    <p>
                        &quot;{translation('testimony-peixoto')}&quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>João</p>
                        <Image alt='' src={depoJoao} width={120} height={120} className={`${styles.cardImage}`} />
                    </div>
                    <p>
                        &quot;{translation('testimony-joao')}&quot;
                    </p>

                </div>
                <div className={`${styles.card}`}>
                    <div>
                        <p className={`${styles.cardName} ${balmy.className}`}>Eli</p>
                        <Image alt='' src={depoEli} width={120} height={120} className={`${styles.cardImage}`} />
                    </div>
                    <p>
                        &quot;{translation('testimony-eli')}&quot;
                    </p>

                </div>
            </div>
            <Link className={`${styles.link}`} href="/eventos">{translation('know-more')}</Link>
        </div>
    );
};