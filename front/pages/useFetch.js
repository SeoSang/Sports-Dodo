import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { BACKEND_URL } from '../sagas';

axios.defaults.baseURL = `${BACKEND_URL}/api`;

const useFetch = (url) => {
  const [fetch, setFetch] = useState('');

  const fetchApi = async (url) => {
    try {
      const { data } = await axios.get(url);
      //   console.log(data);
      setFetch(data);

      //   return data;
    } catch (e) {
      console.log(e);

      //   return [];
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return { fetch, setFetch };
};

export default useFetch;
