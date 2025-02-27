import { useEffect, useState } from "react";
import './ColorBox.css'

function ColorBox() {
    const [color, setColor] = useState('#FF5733');
    const [isChanging, setIsChanging] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isChanging) {
                setColor(GetCode().toUpperCase());
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isChanging]);

    function GetCode(): string {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    return (
        <div>
            <div className="box" style={{ backgroundColor: color, width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <p style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>{color}</p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setIsChanging(!isChanging)}>Changing: {isChanging ? 'TRUE' : 'FALSE'}</button>
            </div>
        </div>
    )
}

export default ColorBox;