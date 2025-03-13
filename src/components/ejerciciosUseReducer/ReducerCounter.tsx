import { useReducer } from "react";
import { Button } from "../ui/button";

type Actions =
  | { type: "INCREMENTAR" }
  | { type: "DECREMENTAR" }
  | { type: "REINICIAR" };

const ReducerCounter = () => {
  const reducer = (
    state: { count: number },
    action: Actions
  ): { count: number } => {
    switch (action.type) {
      case "INCREMENTAR":
        return { count: state.count + 1 };
      case "DECREMENTAR":
        return { count: state.count - 1 };
      case "REINICIAR":
        return { count: 0 };
      default:
        return state;
    }
  };
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="w-xl">Count: {state.count}</h1>
      <Button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </Button>
      <Button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </Button>
      <Button onClick={() => dispatch({ type: "REINICIAR" })}>Reiniciar</Button>
    </div>
  );
};

export default ReducerCounter;
