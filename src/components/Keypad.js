import React, { useState } from 'react';

function Keypad() {
    // Handle state if needed in future, for now it remains empty
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        console.log('Entering password...');
        setPassword(event.target.value); // Updates the password state if necessary
    };

    return (
        <div>
            <input 
                type="password" 
                value={password}
                onChange={handleChange} 
                placeholder="Enter password" 
            />
        </div>
    );
}

export default Keypad;
