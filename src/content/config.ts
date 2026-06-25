import { defineCollection, z } from 'astro:content';

const values = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const usecases = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { values, usecases };
