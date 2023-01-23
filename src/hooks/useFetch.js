import React, { useEffect } from "react";
import axios from "axios";

export default function useFetch(options) {
  useEffect(() => {
    if (options.url) {
      const fetchCountries = async () => {
        options.setIsLoading(true);
        try {
          const res = await axios.get(options.url);
          options.setData(res.data);
        } catch (err) {
          options.setError(err);
        }
        options.setIsLoading(false);
      };
      fetchCountries();
    }
  }, []);
}
