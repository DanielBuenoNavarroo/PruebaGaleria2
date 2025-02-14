import ShinyText from "@/components/ui/ShinyText";
import { routes } from "@/lib/routes";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );

    if (currentRoute) {
      document.title = currentRoute.name;
      setTitle(currentRoute.name);
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full grid grid-cols-[15rem_1fr]">
      <ul className="w-60 h-full flex flex-col items-center justify-center gap-8 p-4 border-r border-neutral-300/20">
        {routes.map((route, i) => (
          <li key={i}>
            <Link
              className={`text-xl ${
                route.path === location.pathname
                  ? "font-bold"
                  : "hover:font-bold"
              } transition-all duration-200 ease-in-out`}
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full h-full ">
        <div className="w-full text-center p-4 border-b border-neutral-300/20">
          <ShinyText
            text={title}
            disabled={false}
            speed={3}
            className="m-auto text-4xl font-bold"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
