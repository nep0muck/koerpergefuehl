// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const karriereCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        benefits: z.array(z.string()).optional(),
        expectations: z.array(z.string()).optional(),
    })
 });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'karriere': karriereCollection,
};