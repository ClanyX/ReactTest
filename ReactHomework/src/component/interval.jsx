import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

export const Interval = (() => {
    const [count, setCount] = useState(0);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!stop){
                if(count < 20){
                    setCount(count + 1);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count, stop]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button variant="contained" color="primary" onClick={() => setStop(!stop)}>
                Stop
            </Button>
        </div>
    );
});