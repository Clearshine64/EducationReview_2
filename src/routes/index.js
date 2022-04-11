import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layout';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();

  return (
    <Suspense >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'reviews/:id', element: <Reviews /> },
        { path: 'experience', element: <Experience /> },
        { path: 'about', element: <About /> },
        { path: 'categories', element: <Categories /> },
        { path: 'category/:id', element: <CategoryDetail /> },
        { path: 'pricing/:id', element: <Pricing /> },
      ]
    },

  ]);
}

const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const Reviews = Loadable(lazy(() => import('../pages/Reviews')));
const Experience = Loadable(lazy(() => import('../pages/Experience')));
const About = Loadable(lazy(() => import('../pages/About')));
const Categories = Loadable(lazy(() => import('../pages/Categories')));
const CategoryDetail = Loadable(lazy(() => import('../pages/CategoryDetail')));
const Pricing = Loadable(lazy(() => import('../pages/Pringing')));