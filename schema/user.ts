import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),  
  password: z.string()
});

export type createUserSchemaType = z.infer<typeof createUserSchema>

export const editUserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(), 
    password: z.string()
  });
  
  export type editUserSchemaType = z.infer<typeof editUserSchema>