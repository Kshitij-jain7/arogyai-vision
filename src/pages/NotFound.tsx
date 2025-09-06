import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "@/components/NotFound";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return <NotFound />;
};

export default NotFoundPage;
