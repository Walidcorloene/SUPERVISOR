/*import React,{ useState, useCallback, useRef, useEffect } from "react";

export class useHttpClient extends React.Component {
  
  constructor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
  }

  sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  activeHttpRequests = useRef([]);

  clearError = () => {
    setError(null);
  };

  componentDidMount = () => {
    activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
  }

  

}
*/