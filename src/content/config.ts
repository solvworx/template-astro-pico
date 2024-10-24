import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      topics: z.array(z.string()).optional().default([])
    })
});

export const collections = {
  posts: postsCollection,
};