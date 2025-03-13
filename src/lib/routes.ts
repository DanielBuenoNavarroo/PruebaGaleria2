import AddImages from "@/components/ejercicios/AddImages";
import Comentarios from "@/components/ejercicios/Comentarios";
import { Contador } from "@/components/ejercicios/Contador";
import Formulario from "@/components/ejercicios/Formulario";
import Selects from "@/components/ejercicios/Selects";
import Temporizador from "@/components/ejercicios/Temporizador";
import Video from "@/components/ejercicios/Video";
import ReducerCounter from "@/components/ejerciciosUseReducer/ReducerCounter";
import { JSX } from "react";

type Route = {
  name: string;
  path: string;
  beforePath: string;
  component: () => JSX.Element;
};

type Routes = {
  category: string;
  path: string;
  routes: Route[];
};

export const routes: Routes[] = [
  {
    category: "Ejercicios",
    path: "",
    routes: [
      { name: "Imágenes", path: "", beforePath: "", component: AddImages },
      {
        name: "Cálculo de precios",
        path: "ejercicio2",
        beforePath: "",
        component: Selects,
      },
      { name: "Video", path: "ejercicio3", beforePath: "", component: Video },
      {
        name: "Temporizador",
        path: "ejercicio4",
        beforePath: "",
        component: Temporizador,
      },
      {
        name: "Contador",
        path: "ejercicio5",
        beforePath: "",
        component: Contador,
      },
      {
        name: "Formulario",
        path: "ejercicio6",
        beforePath: "",
        component: Formulario,
      },
      {
        name: "Comentarios",
        path: "ejercicio7",
        beforePath: "",
        component: Comentarios,
      },
    ],
  },
  {
    category: "UseReducer",
    path: "useReducer",
    routes: [
      {
        name: "Contador",
        path: "reducerCounter",
        beforePath: "useReducer",
        component: ReducerCounter,
      },
    ],
  },
];
