import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setisOnline] = useState(true);

    useEffect(() => {
        
        const setOnline = () => {
            setisOnline(true);
        }

        const setOffline = () => {
            setisOnline(false);
        }

        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);
    }

    );
    return isOnline;
    
}

export default useOnline;