import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      cover: image().optional(),
      year: z.number().optional(),
      tags: z.array(z.string()).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
