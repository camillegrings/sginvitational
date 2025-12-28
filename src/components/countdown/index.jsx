'use client'
import { useState, useEffect } from 'react';
import { useTranslations } from '@/i18n';
import { snowmanGraffiti, balmy } from '@fonts'
import { gsap } from "gsap";

import styles from './style.module.css'

import { calculateTimeLeft } from '@/hooks/calculateTimeLeft'

export default function Countdown() {
    const translation = useTranslations('HomePage');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextTime = calculateTimeLeft()

            Object.keys(timeLeft).forEach((key) => {
                const oldValue = timeLeft[key];
                const newValue = nextTime[key];

                if (oldValue !== newValue) {
                    gsap.fromTo(`.${key}`,
                        { scale: 0.6, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }
                    );
                }
            });

            setTimeLeft(nextTime);
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval, index) => {
        return (
            <div key={interval} className={`${styles.wrapper}`}>
                <span className={`${styles.time} ${snowmanGraffiti.className} ${interval}`}>{timeLeft[interval]}</span>
                <span className={`${styles.interval} ${balmy.className}`}>{translation(interval)}</span>
            </div>
        );
    });

    return (
        <div className={`${styles.container}`}>
            {/* {timerComponents.length ? timerComponents : <span className={`${styles.finishLabel} ${snowmanGraffiti.className}`}>{translation('finish-count')}</span>} */}
            {timerComponents}
        </div>
    );
};