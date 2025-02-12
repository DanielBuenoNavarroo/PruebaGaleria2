import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, ThumbsDown, ThumbsUp, Trash } from "lucide-react";
import { ComentarioSchema, comentarioSchema } from "@/schema/ComentariosSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

type PropsComentario = {
  addLikes: (id: string) => void;
  addDislikes: (id: string) => void;
  deleteComent: (id: string) => void;
};

const Comentario = ({
  id,
  nombre,
  contenido,
  reviews,
  likes,
  dislikes,
  addLikes,
  addDislikes,
  deleteComent,
}: ComentarioSchema & PropsComentario) => {
  return (
    <Card className="w-full max-w-screen-sm">
      <div className="flex border-b p-4">
        <CardHeader className="p-0 pr-4 flex items-center justify-center border-r">
          <CardTitle>{nombre}</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex py-0 px-4 items-center">
          {contenido}
        </CardContent>
      </div>
      <CardFooter className="items-center justify-center py-2 gap-4">
        <Button variant={"ghost"} onClick={() => addLikes(id)} className="w-20">
          <ThumbsUp />
          {likes}
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => addDislikes(id)}
          className="w-20"
        >
          <ThumbsDown />
          {dislikes}
        </Button>
        <Button
          variant={"ghost"}
          className="hover:bg-red-500 "
          onClick={() => deleteComent(id)}
        >
          <Trash />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ComentarioForm = ({
  setComentarios,
}: {
  setComentarios: React.Dispatch<React.SetStateAction<ComentarioSchema[]>>;
}) => {
  const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const form = useForm<ComentarioSchema>({
    resolver: zodResolver(comentarioSchema),
    mode: "onChange",
    defaultValues: {
      id: generateId(),
      nombre: "",
      contenido: "",
      reviews: 0,
      likes: 0,
      dislikes: 0,
    },
  });

  const onSubmit = (data: ComentarioSchema) => {
    setComentarios((comentarios) =>
      comentarios ? [...comentarios, data] : [data]
    );
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="space-y-4 w-80" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="nombre"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage className="text-md text-red-500">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contenido"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="resize-none h-40"
                  placeholder="Escribe un comentario..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-md text-red-500">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reviews"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant={"ghost"}
                      className={`cursor-pointer p-1 hover:bg-transparent ${
                        star <= field.value
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                      onClick={() => field.value === star}
                    >
                      <Star />
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage className="text-md text-red-500">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          className="m-auto flex"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Comentar
        </Button>
      </form>
    </Form>
  );
};

const Comentarios = () => {
  const [comentarios, setComentarios] = useState<ComentarioSchema[]>(
    JSON.parse(localStorage.getItem("comentarios") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  const addLike = (id: string) => {
    setComentarios((comentarios) => {
      const index = comentarios.findIndex((comentario) => comentario.id === id);
      if (index !== -1) {
        const newComentarios = [...comentarios];
        newComentarios[index] = {
          ...newComentarios[index],
          likes: newComentarios[index].likes + 1,
        };
        return newComentarios;
      }

      return comentarios;
    });
  };

  const addDislike = (id: string) => {
    setComentarios((comentarios) => {
      const index = comentarios.findIndex((comentario) => comentario.id === id);
      if (index !== -1) {
        const newComentarios = [...comentarios];
        newComentarios[index] = {
          ...newComentarios[index],
          dislikes: newComentarios[index].dislikes + 1,
        };
        return newComentarios;
      }

      return comentarios;
    });
  };

  const deleteComent = (id: string) => {
    setComentarios((comentarios) => {
      const index = comentarios.findIndex((comentario) => comentario.id === id);
      if (index !== -1) {
        return [...comentarios.filter((comentario) => comentario.id !== id)];
      }

      return comentarios;
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <ComentarioForm setComentarios={setComentarios} />
      <Separator className="my-4 max-w-screen-md" />
      {comentarios.map(
        ({ id, nombre, contenido, reviews, likes, dislikes }) => (
          <Comentario
            key={id}
            id={id}
            nombre={nombre}
            contenido={contenido}
            reviews={reviews}
            likes={likes}
            dislikes={dislikes}
            addLikes={addLike}
            addDislikes={addDislike}
            deleteComent={deleteComent}
          />
        )
      )}
    </div>
  );
};

export default Comentarios;
