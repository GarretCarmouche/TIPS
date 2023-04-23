// // Import the necessary modules
// import React, { useEffect, useState } from "react";
//
// // Define the RFIDReader component
// const RFIDReader = () => {
//     const [rfidData, setRFIDData] = useState(""); // State to store RFID data
//
//     useEffect(() => {
//         const handleRFIDData = (event) => {
//             // Event handler for RFID data
//             const rfidData = event.data;
//             setRFIDData(rfidData);
//         };
//
//         // Add event listener to listen for RFID data
//         window.addEventListener("rfiddata", handleRFIDData);
//
//         // Cleanup function to remove event listener on unmount
//         return () => {
//             window.removeEventListener("rfiddata", handleRFIDData);
//         };
//     }, []);
//
//     return (
//         <div>
//             <h1>RFID Reader</h1>
//             <p>RFID Data: {rfidData}</p>
//         </div>
//     );
// };
//
// export default RFIDReader;
//

import React, { useState } from "react";

const InputForm = () => {
    const [inputValue, setInputValue] = useState(""); // State variable to store input value

    const handleInputChange = (event) => {
        // Event handler for input change
        setInputValue(event.target.value); // Update state with new input value
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the input value here, e.g. send it to a backend API
        console.log("Input Value:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
