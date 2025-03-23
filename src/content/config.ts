// Content collections configuration
import { defineCollection, z } from 'astro:content';

export const collections = {
  talks: defineCollection({
    type: 'data', // JSON files
    schema: z.object({
      conf: z.string(),
      date: z.string().transform((date) => new Date(date)),
      title: z.string(),
      slides: z.string().url().optional(),
      video: z.string().url().optional(),
      image: z.string(),
      featured: z.boolean().optional().default(false)
    })
  })
}; 