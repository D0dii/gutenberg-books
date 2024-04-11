import { createFileRoute } from "@tanstack/react-router";
import Favourites from "pages/favourites/Favourites.tsx";

export const Route = createFileRoute("/favourites")({
  component: Favourites,
});
