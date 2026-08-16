import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      cover: z
        .object({
          src: image(),
          alt: z.string().default(''),
        })
        .optional(),
      tags: z.array(z.string()).default([]),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'unpublished']).default('journal'),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    note: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string().optional(),
    date: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    year: z.number(),
    note: z.string().optional(),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/software' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image().optional(),
      github: z.string().url().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog, publications, talks, awards, software };