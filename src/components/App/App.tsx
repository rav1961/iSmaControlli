import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../../layouts';
import { Suspense } from 'react';
import DataPointsPage from 'src/pages/DataPointsPage';
import SearchPage from 'src/pages/SearchPage';
import NotFoundPage from 'src/pages/NotFoundPage';

// const DataPointsPage = lazy(() => import('../../pages/DataPointsPage'));
// const SearchPage = lazy(() => import('../../pages/SearchPage'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DataPointsPage />} />
            <Route path="/:equipment" element={<DataPointsPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
