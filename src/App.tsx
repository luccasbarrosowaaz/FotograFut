import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const AlbumsPage = lazy(() => import('./pages/AlbumsPage'));
const AlbumDetailPage = lazy(() => import('./pages/AlbumDetailPage'));
const PhotographerProfilePage = lazy(() => import('./pages/PhotographerProfilePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const CustomerDashboardPage = lazy(() => import('./pages/dashboard/CustomerDashboardPage'));
const PhotographerDashboardPage = lazy(() => import('./pages/dashboard/PhotographerDashboardPage'));
const AdminDashboardPage = lazy(() => import('./pages/dashboard/AdminDashboardPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albuns" element={<AlbumsPage />} />
          <Route path="/albuns/:albumId" element={<AlbumDetailPage />} />
          <Route path="/fotografo/:photographerId" element={<PhotographerProfilePage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/cliente/painel" element={<CustomerDashboardPage />} />
          <Route path="/fotografo/painel" element={<PhotographerDashboardPage />} />
          <Route path="/admin/painel" element={<AdminDashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;