import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import { rascals, balmy } from '@fonts'
import Image from 'next/image'
import depoGisele from '@assets/depo-gisele.png'
import depoLeandro from '@assets/depo-leandro.png'
import depoCibelle from '@assets/depo-cibelle.png'
import Link from 'next/link'

export default function Testimony() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <h4 className={`${styles.subtitle} ${rascals.className}`}>DEPOIMENTOS</h4>
            <h3 className={`${styles.title} ${balmy.className}`}>O que dizem sobre o evento?</h3>
            <div className={`${styles.content}`}>
                <div className={`${styles.card}`}>
                    <p>&quot;Lorem ipsum dolor sit amet consectetur. Bibendum cum massa dolor dapibus sed vitae vitae euismod. Quam ipsum viverra posuere senectus.&quot;
                    </p>
                    <Image alt='' src={depoGisele} width={100} height={100} className={`${styles.cardImage}`} />
                    <p className={`${styles.cardName} ${balmy.className}`}>Gisele</p>
                </div>
                <div className={`${styles.card}`}>
                    <p>&quot;Lorem ipsum dolor sit amet consectetur. Bibendum cum massa dolor dapibus sed vitae vitae euismod. Quam ipsum viverra posuere senectus.&quot;
                    </p>
                    <Image alt='' src={depoLeandro} width={100} height={100} className={`${styles.cardImage}`} />
                    <p className={`${styles.cardName} ${balmy.className}`}>Leandro</p>
                </div>
                <div className={`${styles.card}`}>
                    <p>&quot;Lorem ipsum dolor sit amet consectetur. Bibendum cum massa dolor dapibus sed vitae vitae euismod. Quam ipsum viverra posuere senectus.&quot;
                    </p>
                    <Image alt='' src={depoCibelle} width={100} height={100} className={`${styles.cardImage}`} />
                    <p className={`${styles.cardName} ${balmy.className}`}>Cibelle</p>
                </div>
            </div>
            <Link className={`${styles.link}`} href="/eventos">{translation('know-more')}</Link>
        </div>
    );
};