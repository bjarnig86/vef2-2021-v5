import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound';

import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

News.protoTypes = {
  flokkur: PropTypes.string,
  fjoldiFretta: PropTypes.number,
  isHomePage: PropTypes.boolean,
}

export function News({ flokkur, fjoldiFretta, isHomePage = true }) {
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

        if (!result.ok) {
          console.error('result not ok');
          throw new Error(result.status);
        }

        json = await result.json();
      } catch (e) {
        setError(`Gat ekki sótt fréttir: ${e.message}`);
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [flokkur, fjoldiFretta]);
  
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

  const linkText = isHomePage ? 'Allar fréttir' : 'Til baka';

  return ( data &&
    <div className={s.flokkur}>
      <h2>{data.title}</h2>
      {data.items.slice(0, fjoldiFretta).map((i, index) => {
        return (
            <a key={index} href={i.link}><p>{i.title}</p></a>
            )
          })}
          <br/>
          <Link to={isHomePage ? flokkur : "/"}>{linkText}</Link>
    </div>
  );
}