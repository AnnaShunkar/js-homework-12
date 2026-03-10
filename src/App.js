import './App.css';
import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const About = lazy(() => import('./pages/About'));
const ToDoComponent = lazy(() => import('./ToDoComponent'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuth') === 'true'
  );
  const [loginUser, setLoginUser] = useState(null);

  return (
    <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="about"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="todo-list"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <ToDoComponent />
                  </PrivateRoute>
                }
              />
              <Route
                path="login"
                element={
                  <Login
                    setLoginUser={setLoginUser}
                    setIsAuthenticated={setIsAuthenticated}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Suspense>
  );
}

export default App;