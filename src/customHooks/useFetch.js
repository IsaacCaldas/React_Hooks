import React, { useState, useEffect } from "react";

export const useFetch = (url, method = 'get') => {// method: get, post, delete...

  const [response, setResponse] = useState({
    data: null,
    loading: true
  });

  useEffect(function() {

    fetch(url, { method })
      .then(resp => resp.json())
      .then(json => setResponse({
        data: json,
        loading: false,
      }));

  }, [url, method]);

  return response;

};

/*fetch('http://files.cod3r.com.br/curso-react/estados.json')
		.then(resp => resp.json())
		.then(json => console.log(json));*/
	/*fetch('../../jsons/brazilStates.js')
		.then(resp => resp.json())
		.then(json => console.log(json));*/