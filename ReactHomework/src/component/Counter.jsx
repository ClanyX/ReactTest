import { useState } from 'react';
import Button from '@mui/material/Button';
import './Counter.css';
export const Counter = () => {
    let [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    let step = double ? 2 : 1;

    function method(number){
        switch(number){
            case 1:
                if(count < 10) setCount(count += step);
                break;
            case -1:
                if(count > -10) setCount(count -= step);
                break;
        }
    }

    return (
        <div>
            <p>Count: {count}</p>
            <Button className='btn' color='primary' variant='contained' onClick={() => method(1)}>
                Add
            </Button>   
            <Button className='btn' color='primary' variant='contained' onClick={() => method(-1)}>
                Decrease
            </Button>
            <Button className='btn' color='primary' variant='contained' onClick={() => setCount(count = 0)}>
                Reset
            </Button>
            <Button className='btn' color='primary' variant='contained' onClick={() => setDouble(!double)}>
                {double ? "Double ON" : "Double OFF"}
            </Button>
        </div>
    )
};