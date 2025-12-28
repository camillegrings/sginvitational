const TARGET_DATE = '04/24/2026'

export const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
};