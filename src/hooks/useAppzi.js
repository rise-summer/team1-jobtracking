import { useEffect } from "react";
const useAppzi = (token) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://w.appzi.io/w.js?token=${token}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [token]);
};
export default useAppzi;
