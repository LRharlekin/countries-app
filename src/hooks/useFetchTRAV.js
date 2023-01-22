import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("running useEffect");
    let shouldCancel = false;

    const callFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (shouldCancel) return;
        setData(newResponseJSON);
        setError(null);
      } catch (newError) {
        if (shouldCancel) return;
        setError(newError);
        setData(null);
      }
      setIsLoading(false);
    };
    callFetch();
    return () => (shouldCancel = true);
  }, []);

  console.log("will return data now");
  return {
    data,
    isLoading,
    error,
  };
};
