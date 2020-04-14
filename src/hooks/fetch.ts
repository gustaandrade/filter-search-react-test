import { useState, useEffect } from "react";

const useFetch = (url: string, options?: RequestInit) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    const fetchURL = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setRes(json);
    };

    fetchURL();
  }, [options, url]);

  return res;
};

export default useFetch;
