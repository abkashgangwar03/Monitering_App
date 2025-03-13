import React, { useState } from "react";
import Hero from "./components/Hero";
import Verification from './components/Verification'



const App = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <Verification />
      ) : (
        <Hero setSuccess={setSuccess} />
      )}
      
    
    </>
  );
};

export default App;
