import { z } from "zod";

export const comentarioSchema = z.object({
  id: z.string(),
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre debe tener menos de 20 caracteres"),
  contenido: z.string().min(1, "El contenido debe tener al menos 1 caracter"),
  reviews: z.number().min(1).max(5),
  likes: z.number().default(0),
  dislikes: z.number().default(0),
});

export type ComentarioSchema = z.infer<typeof comentarioSchema>;
