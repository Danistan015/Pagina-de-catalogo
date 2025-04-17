import { defineCollection, z } from 'astro:content';

// Define the "books" collection schema
const books = defineCollection({
  schema: z.object({
    title: z.string(),           // Title of the book (string)
    author: z.string(),          // Author of the book (string)
    img: z.string(),             // Image URL of the book (string)
    temps: z.number(),           // Estimated reading time in minutes (number)
    description: z.string(),     // Description of the book (string)
    watch: z.string().url(),     // URL for watching or related content (URL string)
  }),
});

// Export the collections object with the "books" collection
export const collections = {
  books,  // Ensure this is correctly exported for usage
};
