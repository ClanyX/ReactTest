import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Time rn: {time.toLocaleTimeString()}</p>
            <Button variant="contained" color="primary" onClick={() => setTime(new Date())}>
                Refresh Time
            </Button>
        </div>
    )
}