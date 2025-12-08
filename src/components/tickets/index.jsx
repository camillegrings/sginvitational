import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import { snowmanGraffiti, rascals } from '@fonts'

export default function Tickets() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.dividorTop}`}></span>
            <div className={`${styles.content}`}>
                <h3 className={`${styles.title} ${snowmanGraffiti.className}`}>{translation('tickets')}</h3>
                <h4 className={`${styles.typeTitle} ${rascals.className}`}>
                    <span>{translation('full-event')}</span>
                    <span className={`${styles.underline}`}></span>
                </h4>
                <p className={`${styles.typeSubtitle}`}>{translation('full-event-desc')}</p>
                <div className={`${styles.typesContainer}`}>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date}`}>01/12</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name}`}>{translation('promo')}</span>
                                <span className={`${styles.desc}`}>{translation('promo-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${rascals.className}`}>R$300</span>
                            <span className={`${styles.priceDesc}`}>{translation('promo-tickets')}</span>
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date}`}>01/12</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name}`}>{translation('dark-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('dark-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${rascals.className}`}>R$300</span>
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date}`}>15/01</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name}`}>{translation('first-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('first-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${rascals.className}`}>R$350</span>
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date}`}>01/04</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name}`}>{translation('second-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('second-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${rascals.className}`}>R$400</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className={`${styles.dividorBottom}`}></span>
        </div>
    );
}
