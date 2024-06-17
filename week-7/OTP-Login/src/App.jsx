import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [phnum, Setphnum] = useState('');
  const [resp, Setresp] = useState('');
  const [otpDigit, SetOTPdigit] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]); // Ref to store references to each input field

  const submitHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3000/generate-otp", {
        phoneNumber: phnum
      });
      Setresp(response.data.message);
    } catch (err) {
      console.error('Error sending OTP:', err.message);
    }
  }

  const handleChange = (index, value) => {
    const newOtpDigits = [...otpDigit];
    newOtpDigits[index] = value;
    SetOTPdigit(newOtpDigits);

    if (value !== "" && index < otpDigit.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  const handleVerification = async () => {
    try {
      const response = await axios.post("http://localhost:3000/verify-otp", {
        phoneNumber: phnum,
        code: otpDigit.join("")
      });
      alert(response.data.message);
    } catch (err) {
      console.error('Error verifying OTP:', err.message);
    }
  }

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="container">
      <div className='GeneratorBox'>
        <input type="number" value={phnum} onChange={(e) => Setphnum(e.target.value)} />
        <button type='submit' onClick={submitHandler}>Send OTP</button>
        <p>{resp}</p>
      </div>

      {resp === "OTP sent" && (
        <div className='OTP-verify'>
          {otpDigit.map((otp, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={otp}
              onChange={(e) => handleChange(index, e.target.value)}
              ref={(ref) => inputRefs.current[index] = ref}
            />
          ))}
          <button onClick={handleVerification}>Submit the OTP</button>
        </div>
      )}
    </div>
  );
}

export default App;
