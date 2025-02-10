import AddImages from "@/components/ejercicios/AddImages";
import { Contador } from "@/components/ejercicios/Contador";
import Formulario from "@/components/ejercicios/Formulario";
import Selects from "@/components/ejercicios/Selects";
import Temporizador from "@/components/ejercicios/Temporizador";
import Video from "@/components/ejercicios/Video";
import { JSX } from "react";

type Route = {
  name: string;
  path: string;
  component: () => JSX.Element;
};

export const routes: Route[] = [
  { name: "Imagenes", path: "/", component: AddImages },
  { name: "Cálculo de precios", path: "/ejercicio2", component: Selects },
  { name: "Video", path: "/ejercicio3", component: Video },
  { name: "Temporizador", path: "/ejercicio4", component: Temporizador },
  { name: "Contador", path: "/ejercicio5", component: Contador },
  { name: "Formulario", path: "/ejercicio6", component: Formulario },
];
