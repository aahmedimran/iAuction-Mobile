import React, { memo, useEffect, useState } from 'react'
import {Text,View} from 'react-native'

const LiveTimer = ({ targetTime, }:any) => {
    const [remainingTime, setRemainingTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        const currentTime = new Date().getTime();
        const targetDateTime = new Date(targetTime).getTime();

        if (currentTime >= targetDateTime) {
            if (isRunning) {
                setIsRunning(false);
            }
        } else {
            if (isRunning) {
                const timerId = setInterval(() => {
                    const updatedTime = new Date().getTime();
                    const timeDifference = targetDateTime - updatedTime;
                    setRemainingTime(timeDifference);
                }, 1000);

                return () => {
                    clearInterval(timerId);
                };
            }
        }

    }, [remainingTime, isRunning]); // eslint-disable-line
    // Convert remaining time to days, hours, minutes, and seconds
    const displaydays = Math.floor(remainingTime / 1000 / (24 * 60 * 60));
    const displayHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const displayMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const displaySeconds = Math.floor((remainingTime / 1000) % 60);
    return (
        <View>{isRunning ? (
            <Text style={{ color: 'black' }}>
                 {displaydays<10 ? `0${displaydays}` : displaydays} :
                {displayHours < 10 ? ` 0${displayHours} ` : displayHours || '00'} :
                {displayMinutes < 10 ? ` 0${displayMinutes} ` : displayMinutes || '00'}:
                {displaySeconds < 10 ? ` 0${displaySeconds} ` : displaySeconds || '00'}
            </Text>
        ) : (
            <Text style={{ color: 'black' }}>Expired</Text>
        )}</View>
    )
}

export default memo(LiveTimer)