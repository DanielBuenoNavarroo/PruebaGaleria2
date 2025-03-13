import ShinyText from "@/components/ui/ShinyText";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { routes } from "@/lib/routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    const currentRoute = routes
      .flatMap((routeCategory) => routeCategory.routes)
      .find((route) => {
        return (
          (route.beforePath === ""
            ? `/${route.path}`
            : `/${route.beforePath}/${route.path}`) === location.pathname
        );
      });
    console.log(currentRoute);
    if (currentRoute) {
      document.title = currentRoute.name;
      setTitle(currentRoute.name);
    }
  }, [location]);

  const getPath = (path: string, beforePath: string) => {
    return beforePath === "" ? path : `${beforePath}/${path}`;
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-[15rem_1fr]">
      <div className="w-60 h-full flex flex-col justify-center px-4 border-r border-neutral-300/20">
        <Accordion type="single" defaultValue="item-1">
          {routes.map(({ category, routes }, i) => (
            <AccordionItem value={`item-${i + 1}`} key={category}>
              <AccordionTrigger className="text-2xl">
                {category}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                {routes.map(({ path, beforePath, name }, i) => (
                  <Link
                    key={i}
                    to={getPath(path, beforePath)}
                    className={`text-xl ${
                      getPath(path, beforePath) === location.pathname
                        ? "font-bold"
                        : "hover:font-bold"
                    } transition-all duration-200 ease-in-out`}
                  >
                    {name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
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
