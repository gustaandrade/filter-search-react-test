import React, { useState, useEffect } from "react";

const useFetch = (url: string, options?: RequestInit) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    };

    doFetch();
  }, [options, url]);

  return response;
};

export default useFetch;
