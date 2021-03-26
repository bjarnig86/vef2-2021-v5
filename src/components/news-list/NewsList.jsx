import React, { useEffect, useState } from 'react';
import { News } from '../news/News';
import { NotFound } from '../../pages/NotFound';

import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  // TODO sækja yfirlit fréttaflokka
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = `${apiUrl}`

      try {
        const result = await fetch(url);

        if (!result.ok) {
          console.error('Result not ok');
          throw new Error(result.status);
        }

        json = await result.json();
      } catch (e) {
        setError(`Gat ekki sótt gögn: ${e.message}`);
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, []);

  if (error) {
    if (error.includes('404')) {
      return (
        <>
          <NotFound />
        </>
      );
    }

    return (
      <p>{error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  const fjoldiFretta = 5;

  return ( data &&
    <>
    <div className={s.newsContainer}>
      {data.map((i, index) => {
        return (
          <>
            <News key={index} flokkur={i.id} fjoldiFretta={fjoldiFretta} />
          </>
        )
      })}
    </div>
    </>
  )
}
