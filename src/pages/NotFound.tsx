import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-display text-7xl text-ink">404</h1>
        <p className="mb-6 text-lg text-muted-ink">This page was not found at FACELINES.</p>
        <a href="/" className="pill pill-dark">Return home</a>
      </div>
    </div>
  );
};

export default NotFound;
