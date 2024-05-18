import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import Home from "../pages/home/Home.tsx";

const homeSearchSchema = z.object({
  page: z.number().catch(1),
  search: z.string().catch(""),
});

type HomeSearch = z.infer<typeof homeSearchSchema>;

export const Route = createFileRoute("/")({
  validateSearch: (search): HomeSearch => homeSearchSchema.parse(search),
  component: Home,
});
