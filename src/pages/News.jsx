import React from 'react';
import { useParams } from 'react-router';
import { News } from '../components/news/News';

export function NewsPage() {
  // TODO útfæra fréttasíðu

  let {id} = useParams();

  return (
    <>
      <News flokkur={id} isHomePage={false}/>
    </>
  );
}