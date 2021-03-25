import React from 'react';

import { News } from '../components/news/News';

export function Index() {
  // TODO útfæra yfirlitssíðu
  return (
    <>
      <News flokkur = {'allar'} />
      <News flokkur = {'innlent'} />
      <News flokkur = {'erlent'} />
    </>
  )
}
