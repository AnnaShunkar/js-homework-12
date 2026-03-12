import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const About = lazy(() => import("./pages/About"));
const ToDoComponent = lazy(() => import("./ToDoComponent"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              path="about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="todo-list"
              element={
                <PrivateRoute>
                  <ToDoComponent />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;