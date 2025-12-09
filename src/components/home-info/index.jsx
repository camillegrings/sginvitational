import styles from './style.module.css'
import { useTranslations } from '@/i18n';
import Image from 'next/image'
import Link from 'next/link'
import { snowmanGraffiti } from '@fonts'
import zap from '@assets/zap.svg'
import tape from '@assets/tape.svg'
import xtape from '@assets/x-tape.svg'

export default function HomeInfo() {
    const translation = useTranslations('HomePage');
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.dividor}`}></span>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.videoWrapper}`}>
                    <Image alt='' src={tape} width={100} height={50} className={`${styles.tape}`} />
                    <iframe src="https://player.vimeo.com/video/1144697154?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" width="300" height="533" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="SGI2025"></iframe>
                    <Image alt='' src={xtape} width={38} height={38} className={`${styles.xtape}`} />
                </div>
                <div className={`${styles.content}`}>
                    <p className={`${styles.date} ${snowmanGraffiti.className}`}>
                        {translation('date-start')}
                        <span> 24</span>,
                        <span> 25 </span>
                        {translation('date-middle')}
                        <span> 26</span>
                        <br />
                        {translation('date-end')}
                    </p>
                    <p className={`${styles.place} ${snowmanGraffiti.className}`}>DANCE 4ALL</p>
                    <p className={`${styles.address}`}>
                        <a href='https://maps.app.goo.gl/mU6vraDsctQSu9bE6' target='_blank'>{translation('address-1')} <br /> {translation('address-2')}</a>
                    </p>
                    <p className={`${styles.knowMore}`}>
                        <Link href="/saiba-mais">{translation('know-more')}</Link>
                    </p>
                    <p>
                        <a className={`${styles.instagram}`} href='https://www.instagram.com/sgi_oficial/' target='_blank'>
                            <span className={`${styles.instagramIcon}`}></span>
                            <span className={`${styles.instagramLabel}`}>@sgi_oficial</span>
                        </a>
                    </p>
                </div>
            </div>
            <Image alt='' src={zap} width={60} height={88} className={`${styles.zap}`} />
        </div>
    );
}
