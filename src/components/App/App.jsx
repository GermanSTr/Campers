import CamperDetails from 'components/CamperDetails/CamperDetails';
import SharedLayout from 'components/common/SharedLayout/SharedLayout';
import CatalogPage from 'components/pages/CatalogPage/CatalogPage';
import FavoritesPage from 'components/pages/FavoritesPage/FavoritesPage';
import HomePage from 'components/pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
