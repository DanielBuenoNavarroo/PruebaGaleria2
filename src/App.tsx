import { Suspense } from "react";
import "./App.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./lib/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route element={<MainLayout />}>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
