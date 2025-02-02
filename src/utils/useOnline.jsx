import React, { useEffect } from "react";
import { useState } from "react";

const useOnline = () => {
    const [isOnline , setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
        setIsOnline(false);
    })
    window.addEventListener('online' , () => {
        setIsOnline(true);
    })
  })

    return isOnline;
}

export default useOnline;