import React, { useState } from "react";

const SignUp = ({signUpSignal}) => {
    const [isLoged , setIsLoged] = useState(false);
    function handleSubmit () {
        setIsLoged(true)
        signUpSignal(isLoged)
    }
  
    return (
        <div className="w-full h-svh bg-slate-950 text-white flex justify-center items-center ">
            <button onClick={ handleSubmit } className="text-7xl text-center font-extrabold">Sign up</button>
        </div>
    )
}
export default SignUp;