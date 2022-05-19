// Code Keypad Component Here
import React from "react";

function Keypad() {
    function handleInputSubmit(e) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input 
                type="password" 
                onChange={handleInputSubmit}
            />
        </div>
    )
}

export default Keypad; 
