import { defineCollection, z } from 'astro:content';

const briefings = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    blurb: z.string(),
    weekday: z.string(),
    lede: z.string()
  })
});

export const collections = { briefings };
