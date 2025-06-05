import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const BePhotographerPage = lazy(() => import('./pages/BePhotographerPage'));
const PhotographersPage = lazy(() => import('./pages/PhotographersPage'));
const PlansPage = lazy(() => import('./pages/PlansPage'));
const PlanCheckoutPage = lazy(() => import('./pages/PlanCheckoutPage'));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Disable right click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable PrintScreen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
      }
      
      // Disable Ctrl+P
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albuns" element={<AlbumsPage />} />
          <Route path="/albuns/:albumId" element={<AlbumDetailPage />} />
          <Route path="/fotografos" element={<PhotographersPage />} />
          <Route path="/fotografo/:photographerId" element={<PhotographerProfilePage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/cliente/painel" element={<CustomerDashboardPage />} />
          <Route path="/fotografo/painel" element={<PhotographerDashboardPage />} />
          <Route path="/admin/painel" element={<AdminDashboardPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/seja-fotografo" element={<BePhotographerPage />} />
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/planos/checkout/:planId" element={<PlanCheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;