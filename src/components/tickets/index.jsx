import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import { snowmanGraffiti, rascals, balmy } from '@fonts'

export default function Tickets() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.dividorTop}`}></span>
            <div className={`${styles.content}`}>
                <h3 className={`${styles.title} ${snowmanGraffiti.className} gs_reveal`}>{translation('tickets')}</h3>
                <h4 className={`${styles.typeTitle} ${rascals.className}`}>
                    <span>{translation('full-event')}</span>
                    <span className={`${styles.underline}`}></span>
                </h4>
                <p className={`${styles.typeSubtitle}`}>{translation('full-event-desc')}</p>
                <div className={`${styles.typesContainer}`}>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date} ${balmy.className}`}>01/12</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name} ${balmy.className}`}>{translation('promo')}</span>
                                <span className={`${styles.desc}`}>{translation('promo-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.soldout} ${balmy.className}`}>ESGOTADO</span>
                            <span className={`${styles.priceDesc}`}>{translation('promo-tickets')}</span>
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date} ${balmy.className}`}>01/12</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name} ${balmy.className}`}>{translation('dark-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('dark-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            {/* <span className={`${styles.price} ${balmy.className}`}>R$300</span> */}
                            <span className={`${styles.soldout} ${balmy.className}`}>ESGOTADO</span>
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date} ${balmy.className}`}>15/01</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name} ${balmy.className}`}>{translation('first-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('first-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${balmy.className}`}>R$350</span>
                            {/* <span className={`${styles.soldout} ${balmy.className}`}>ESGOTADO</span> */}
                        </div>
                    </div>
                    <div className={`${styles.typesWrapper}`}>
                        <div className={`${styles.infoWrapper}`}>
                            <span className={`${styles.date} ${balmy.className}`}>01/04</span>
                            <div className={`${styles.wrapper}`}>
                                <span className={`${styles.name} ${balmy.className}`}>{translation('second-batch')}</span>
                                <span className={`${styles.desc}`}>{translation('second-desc')}</span>
                            </div>
                        </div>
                        <div className={`${styles.priceWrapper}`}>
                            <span className={`${styles.price} ${balmy.className}`}>R$400</span>
                            {/* <span className={`${styles.soldout} ${balmy.className}`}>ESGOTADO</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <span className={`${styles.dividorBottom}`}></span>
        </div>
    );
}
