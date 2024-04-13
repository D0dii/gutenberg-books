import { createFileRoute } from "@tanstack/react-router";
import BookDetails from "pages/bookDetails/BookDetails";
import { z } from "zod";

const bookSearchSchema = z.object({
  ID: z.number().catch(0),
});

type BookID = z.infer<typeof bookSearchSchema>;

export const Route = createFileRoute("/book")({
  validateSearch: (search): BookID => bookSearchSchema.parse(search),
  component: BookDetails,
});
