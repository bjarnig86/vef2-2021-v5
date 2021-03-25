import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const apiUrl = process.env.REACT_APP_API_URL;

News.protoTypes = {
  flokkur: PropTypes.string,
}

export function News({ flokkur }) {
  // TODO sækja fréttir fyrir flokk
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = `${apiUrl}${flokkur}`;

      try {
        const result = await fetch(url);
        console.log('result :>> ', result);
        if (!result.ok) {
          console.error('result not ok');
        }

        json = await result.json();
        console.log('json :>> ', json);
      } catch (e) {
        setError('Gat ekki sótt gögn');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [flokkur]);
  
  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {data.items.map((i) => {
        return (
          <p>{i.title}</p>
        )
      })}
    </div>
  );
}