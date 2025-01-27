import React from "react";
import Button from '@mui/material/Button';
import { useState } from "react";

const ButtonComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <Button variant="contained" color="primary" onClick={() => setCount((count) => count + 1)}>
            Click me {count * 2}
        </Button>
    );
};

export default ButtonComponent;