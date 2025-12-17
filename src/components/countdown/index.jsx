'use client'
import { useState, useEffect } from 'react';
import { useTranslations } from '@/i18n';
import { snowmanGraffiti, rascals } from '@fonts'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import styles from './style.module.css'

const TARGET_DATE = '04/24/2026'

export default function Countdown() {
    const translation = useTranslations('HomePage');
    const calculateTimeLeft = () => {
        const difference = +new Date(TARGET_DATE) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

    useGSAP(() => {
        gsap.from(`.${styles.wrapper}`, {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: {
                trigger: "#countdown",
                start: "top 75%"
            }
        });
    });

    const timerComponents = Object.keys(timeLeft).map((interval, index) => {
        return (
            <div key={interval} className={`${styles.wrapper}`}>
                <span className={`${styles.time} ${snowmanGraffiti.className} ${interval}`}>{timeLeft[interval]}</span>
                <span className={`${styles.interval} ${rascals.className}`}>{translation(interval)}</span>
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