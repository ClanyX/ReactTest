import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export const FetchUser = (() => {
    const [user, setUser] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data));
    }, [fetchTrigger]);

    return (
        <div>
            <ul>
                {user.map(user => <li key={user.id}>Name: {user.name} Email: {user.email}</li>)}
            </ul>
            <Button color="primary" variant="contained" onClick={() => setFetchTrigger(!fetchTrigger)}>
                Fetch User
            </Button>
        </div>
    );
});