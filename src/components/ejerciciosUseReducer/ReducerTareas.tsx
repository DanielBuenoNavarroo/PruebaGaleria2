type Accions =
  | { type: "AGREGAR_TAREA"; texto: string }
  | { type: "ELIMINAR_TAREA"; id: number }
  | { type: "TOGGLE_COMPLETADA"; id: number };

type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};

type Data = {
  tareas: Tarea[];
};

const ReducerTareas = () => {
  const reducer = (state: Data, action: Accions): Data => {
    switch (action.type) {
      case "AGREGAR_TAREA": {
        const nuevaTarea: Tarea = {
          id: Date.now(),
          texto: action.texto,
          completada: false,
        };
        return { ...state, tareas: [...state.tareas, nuevaTarea] };
      }

      case "ELIMINAR_TAREA":
        return {
          ...state,
          tareas: state.tareas.filter((tarea) => tarea.id !== action.id),
        };

      case "TOGGLE_COMPLETADA":
        return {
          ...state,
          tareas: state.tareas.map((tarea) =>
            tarea.id === action.id
              ? { ...tarea, completada: !tarea.completada }
              : tarea
          ),
        };

      default:
        return state;
    }
  };

  const initialState: Data = {
    tareas: [],
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>

      {/* Formulario para agregar tarea */}
      <form onSubmit={manejarEnvio} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nuevaTarea">Nueva Tarea</Label>
          <Input
            id="nuevaTarea"
            value={textoTarea}
            onChange={manejarCambio}
            placeholder="Escribe una nueva tarea"
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Agregar Tarea
        </Button>
      </form>

      {/* Mostrar la lista de tareas */}
      <div className="mt-4 space-y-2">
        {state.tareas.map((tarea) => (
          <Card
            key={tarea.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={tarea.completada}
                onChange={() =>
                  dispatch({ type: "TOGGLE_COMPLETADA", id: tarea.id })
                }
              />
              <span
                className={`flex-1 ${
                  tarea.completada ? "line-through text-gray-500" : ""
                }`}
              >
                {tarea.texto}
              </span>
            </div>
            <Button
              variant="destructive"
              onClick={() => dispatch({ type: "ELIMINAR_TAREA", id: tarea.id })}
            >
              Eliminar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReducerTareas;
