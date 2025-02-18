import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                if(time < 60){
                    setTime(time + 1);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time, running]);

    return (
        <div>
            <p>Time: {time}</p>
            <Button color='primary' variant='contained' onClick={() => setRunning(true)}>Start</Button>
            <Button color='primary' variant='contained' onClick={() => setRunning(false)}>Stop</Button>
            <Button color='primary' variant='contained' onClick={() => { setTime(0); setRunning(false);}}>Reset</Button>
        </div>
    );
};
