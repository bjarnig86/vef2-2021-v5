// TODO sækja og setja upp react router

import { Route } from 'react-router';
import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
// import { NewsPage } from './pages/News';
// import { NewsList } from './components/news-list/NewsList';
// import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      {/* útfæra routin */}
      <Route>
        <Index />
      </Route>
    </Layout>
  );
}
