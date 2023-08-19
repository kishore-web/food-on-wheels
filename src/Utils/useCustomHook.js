import { useEffect } from "react";
import { useState } from "react";
import { SINGLE_RESTRO } from "../constant/config";

const useCustomHook = (resid) => {
  const [specificRestro, setSpecificRestro] = useState(null);
  useEffect(() => {
    fetchRestData();
  }, []);
  const fetchRestData = async () => {
    const res = await fetch(SINGLE_RESTRO + resid);
    const data = await res.json();
    setSpecificRestro(data);
  };
  return specificRestro;
};
export default useCustomHook;
