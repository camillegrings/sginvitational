import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import { rascals } from '@fonts'
import heart from '@assets/heart.svg'
import Image from 'next/image'

export default function EffectPhrase() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container} ${rascals.className}`}>
            <Image alt='' src={heart} width={90} height={105} className={`${styles.heart}`} />
            <h4><span className={`${styles.deco1}`}>SWING</span> DE GAROTOS +</h4>
            <h4>WEST COAST <span className={`${styles.deco2}`}>SWING</span> =</h4>
            <h4 className={`${styles.lastLine}`}>
                <span>{translation('best-event')}</span>
                <span className={`${styles.underline}`}></span>
            </h4>
            <span className={`${styles.dividor}`}></span>
        </div>
    );
};